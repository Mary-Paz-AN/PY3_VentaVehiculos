// Se importa la clase Uusario
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
            const resultado = await request.execute('sp_IniciarSesionUsuario');
            
            //Verificar que el usuario sea correcto
            if (resultado.recordset.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en el sp_iniciarSesionUsuario:', error);
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
            const resultado = await request.execute('sp_IniciarSesionCorreo');
            
            //Verificar que el usuario sea correcto
            if (resultado.recordset.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en el sp_iniciarSesionCorreo:', error);
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
    
            // Obtiene una conexión a la base de datos
            const pool = await getConnection();
            const request =  pool.request();
    
            // Asignar los parámetros de entrada
            request.input('cedula', sql.VarChar, nuevoUsuario.infoUsuario.cedula)
            request.input('usuario', sql.VarChar, nuevoUsuario.usuario)
            request.input('contrasena', sql.VarChar, nuevoUsuario.contrasena)
            request.input('tipoIdentificacion', sql.VarChar, nuevoUsuario.infoUsuario.tipoIdentificacion)
            request.input('nombre', sql.VarChar, nuevoUsuario.infoUsuario.nombre)
            request.input('apellido1', sql.VarChar, nuevoUsuario.infoUsuario.apellido1)
            request.input('apellido2', sql.VarChar, nuevoUsuario.infoUsuario.apellido2)
            request.input('nacionalidad', sql.VarChar, nuevoUsuario.infoUsuario.nacionalidad)
            request.input('fechaNacimiento', sql.Date, nuevoUsuario.infoUsuario.fechaNacimiento)
            request.input('correo', sql.VarChar, nuevoUsuario.correo)
            request.input('telefono', sql.VarChar, nuevoUsuario.infoUsuario.telefono)
            request.input('provincia', sql.VarChar, nuevoUsuario.direccion.provincia)
            request.input('canton', sql.VarChar, nuevoUsuario.direccion.canton)
            request.input('distrito', sql.VarChar, nuevoUsuario.direccion.distrito)
                
            //Ejecutar el store procedure
            const resultado = await request.execute('sp_CrearUsuario');

            // Verificar que se creo el usuario
            if (resultado && resultado.rowsAffected && resultado.rowsAffected[0] > 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en el sp_CrearUsuario:', error);
            throw new Error('Error al registrar usuario. Por favor, vuelva a inténtalo.');
        }
    }

    // Método que usa el api del registro civil para validar la cedula
    verificarIdentificacion(cedula) {

    }

    // Método que usa el api del tse para validar si la persona tiene processos penales
    verificarProcessoPenal(cedula) {

    }
}

module.exports = GestorAcceso;