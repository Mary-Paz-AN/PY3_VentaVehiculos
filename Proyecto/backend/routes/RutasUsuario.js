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

module.exports = router;
