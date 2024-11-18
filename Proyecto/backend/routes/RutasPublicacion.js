const express = require('express');
const router = express.Router();
const controladorPublicaciones = require('../controllers/ControladorPublicacion');

/* Dependencia para las imagenes
const multer = require('multer');
const upload = multer({ dest: 'downloads/' });*/

/* Ruta para crear una nueva publicación
router.post('/v2/publicacion', upload.array('fotosInternas', 4), upload.array('fotosExternas', 4), controladorPublicaciones.crearPublicacion);*/

// Ruta para crear una nueva publicación
router.post('/v2/publicacion', controladorPublicaciones.crearPublicacion);

// Ruta para crear una plantilla de publicación
router.post('/v3/publicacion', controladorPublicaciones.crearPlantilla);

// Ruta para modificar una publicación
router.put('/v5/publicacion', controladorPublicaciones.modificarPublicacion);

// Ruta para eliminar una publicación
router.delete('/v4/publicacion/:idPublicacion', controladorPublicaciones.eliminarPublicacion);

// Ruta para obtener las fotos de una publicación
router.get('/publicacion/fotos/:id', controladorPublicaciones.getFotos);

// Ruta para obtener una publicación por su ID
router.get('/v1/publicacion/:idPublicacion', controladorPublicaciones.verPublicacion);

// Ruta para obtener las publicaciones de un usuario
router.get('/misPubliciones/:cedula', controladorPublicaciones.misPublicaciones);

module.exports = router;
