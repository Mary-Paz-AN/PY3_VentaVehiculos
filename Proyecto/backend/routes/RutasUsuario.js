const express = require('express');
const router = express.Router();

// Controlador
const usuarioController = require('../controllers/ControladorUsuario');

// Iniciar sesión con un usuario
router.post('/iniciarSesion/usuario', usuarioController.iniciarSesionUsuario);

// Iniicar sesión con el correo
router.post('/iniciarSesion/correo', usuarioController.iniciarSesionCorreo);

// Registrar un usuario
router.post('/registrarse', usuarioController.registrarse);

// Conseguir la información de un usuario
router.get('/informacion/:usuario', usuarioController.infoUsuario);

// Verificar validez de la cedula
router.post('/v1/registrarse', usuarioController.verificarIdentificacion);

// Verificar processos penales
router.post('/v2/registrarse', usuarioController.verificarProcessoPenal);

module.exports = router;
