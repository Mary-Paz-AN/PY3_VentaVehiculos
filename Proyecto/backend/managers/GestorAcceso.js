// Se importa la clase Usario
const Usuario = require('../models/Usuario');
const { getConnection, sql } = require('./conexion');

// Creación de la clase del gesstor
class GestorAcceso {

    //Método para iniciar sesion con el usuario
    async iniciarSesionUsuario(usuario, contrasena) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();
            
            // Asignar los parámetros de entrada
            request.input('usuario', sql.VarChar, usuario);
            request.input('contrasena', sql.VarChar, contrasena);

            //Ejecutar el store procedure
            const resultado = await request.execute('logU');
            
            //Verificar que el usuario sea correcto
            if (resultado.recordset.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en logU:', error);
            throw new Error('Hubo un problema al iniciar sesión. Por favor, vuelva a inténtalo.');
        }
    }

    //Método para iniciar sesion con el correo
    async iniciarSesionCorreo(correo, contrasena) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();
            
            // Asignar los parámetros de entrada
            request.input('correo', sql.VarChar, correo);
            request.input('contrasena', sql.VarChar, contrasena);

            //Ejecutar el store procedure
            const resultado = await request.execute('logC');
            
            //Verificar que el usuario sea correcto
            if (resultado.recordset.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en logC:', error);
            throw new Error('Hubo un problema al iniciar sesión. Por favor, vuelva a inténtalo.');
        }
    }
    

    //Método para crear un usuario
    async registrarse(datos) {
        try {
            // Crea un nuevo usuario 
            const nuevoUsuario = new Usuario(datos.user, datos.correo, datos.contra);
            
            nuevoUsuario.setInfoUsuario(
                datos.identificacion,
                datos.tipoIdentificacion,
                datos.nombre,
                datos.apellido1,
                datos.apellido2,
                datos.nacionalidad,
                datos.fechaNacimiento,
                datos.telefono
            );
        
            nuevoUsuario.setDirrecion(datos.provincia, datos.canton, datos.distrito);

            const user = nuevoUsuario.getUsuario();

            // Insertar la infromacion en la base de datos
            const resultado = await this.crearCuentaBD(user);

            if (resultado) {
                return true;
            } else {
                throw new Error('Error al registrar usuario');
            }

        } catch (error) {
            console.error('Error en registrarse:', error);
            throw new Error(error.message || 'Error al registrar usuario. Por favor, vuelva a intentarlo.');
        }
    }

    async crearCuentaBD(user) {
        try {
            // Obtiene una conexión a la base de datos
            const pool = await getConnection();
            const request =  pool.request();
    
            // Asignar los parámetros de entrada
            request.input('cedula', sql.VarChar, user.cedula)
            request.input('usuario', sql.VarChar, user.usuario)
            request.input('contrasena', sql.VarChar, user.contrasena)
            request.input('tipoIdentificacion', sql.VarChar, user.tipoIdentificacion)
            request.input('nombre', sql.VarChar, user.nombre)
            request.input('apellido1', sql.VarChar, user.apellido1)
            request.input('apellido2', sql.VarChar, user.apellido2)
            request.input('nacionalidad', sql.VarChar, user.nacionalidad)
            request.input('fechaNacimiento', sql.Date, user.fechaNacimiento)
            request.input('correo', sql.VarChar, user.correo)
            request.input('telefono', sql.VarChar, user.telefono)
            request.input('provincia', sql.VarChar, user.provincia)
            request.input('canton', sql.VarChar, user.canton)
            request.input('distrito', sql.VarChar, user.distrito)
                
            //Ejecutar el store procedure
            const resultado = await request.execute('crearU');

            // Verificar que se creo el usuario
            if (resultado && resultado.rowsAffected && resultado.rowsAffected[0] > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en crearU:', error);
            throw new Error('Error al registrar usuario. Por favor, vuelva a inténtalo.');
        }
    }

    //Método para conseguir la informacoión del usuari por medio de su usuario
    async infoUsuario(usuario) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();
            
            // Asignar los parámetros de entrada
            request.input('usuario', sql.VarChar, usuario);

            //Ejecutar el store procedure
            const resultado = await request.execute('infoU');
            
            // Verificar que el resultado si exista
            if (resultado.recordset.length > 0) {
                const usuarioData = resultado.recordset[0];

                if (usuarioData.fechaNacimiento) {
                    usuarioData.fechaNacimiento = usuarioData.fechaNacimiento.toISOString().split('T')[0];
                }
                
                return usuarioData;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en el infoU:', error);
            throw new Error('Hubo un problema consiguiendo la información. Por favor, vuelva a inténtalo.');
        }
    }

    // Método que usa el api del registro civil para validar la cedula
    async verificarIdentificacion(cedula) {
        return esCedulaValida(cedula);
    }

    // Método que usa el api del tse para validar si la persona tiene processos penales
    async verificarProcessoPenal(cedula) {
        return poseeProcessoPenal(cedula);
    }
}

export default GestorAcceso;