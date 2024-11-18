// Importar el gestor y crear su instancia para poder usar sus métodos
import GestorAcceso from '../managers/GestorAcceso.js'; 
const gestorAcceso = new GestorAcceso();

// Controlador para iniciar sesión con usuario y contraseña
async function iniciarSesionUsuario(req, res) {
    const { usuario, contrasena } = req.body;
    try {
        const resultado = await gestorAcceso.iniciarSesionUsuario(usuario, contrasena);

        //Verificar que todo salaga bien
        if (resultado) {
            return res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
        } else {
            return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un problema al iniciar sesión. Inténtalo más tarde.' });
    }
}

// Controlador para iniciar sesión con correo
async function iniciarSesionCorreo(req, res) {
    const { correo, contrasena } = req.body;
    try {
        const resultado = await gestorAcceso.iniciarSesionCorreo(correo, contrasena);

        // Verificar que todo salga bien
        if (resultado) {
            return res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
        } else {
            return res.status(400).json({ mensaje: 'Correo o contraseña incorrectos' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Hubo un problema al iniciar sesión. Inténtalo más tarde.' });
    }
}

// Controlador para registrar un nuevo usuario
async function registrarse(req, res) {
    const datos = req.body;
    try {
        const resultado = await gestorAcceso.registrarse(datos);

        // Verificar que se hizó la inserción a la base de datos
        if (resultado) {
            return res.status(201).json({ mensaje: 'El usuario se registró exitosamente' });
        } else {
            return res.status(400).json({ mensaje: 'No se pudo registrar el usuario' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Error al registrar el usuario. Inténtalo más tarde.' });
    }
}

// Controlador para conseguir la información del usuario
async function infoUsuario(req, res) {
    const { usuario } = req.params; 
    try {
        const resultado = await gestorAcceso.infoUsuario(usuario);

        // Devolver el resultado obtenido
        if (resultado) {
            return res.status(200).json(resultado);
        } else {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Ocurrio un problema al obtener la información del usuario' });
    }
}

export { iniciarSesionUsuario, iniciarSesionCorreo, registrarse, infoUsuario };
