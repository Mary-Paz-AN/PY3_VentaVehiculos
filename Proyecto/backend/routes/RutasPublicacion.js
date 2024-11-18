import { Router } from 'express';
const router = Router();
import { crearPublicacion, crearPlantilla, modificarPublicacion, eliminarPublicacion, getFotos, verPublicacion } from '../controllers/ControladorPublicacion.js';

/* Dependencia para las imagenes
const multer = require('multer');
const upload = multer({ dest: 'downloads/' });*/

/* Ruta para crear una nueva publicación
router.post('/v2/publicacion', upload.array('fotosInternas', 4), upload.array('fotosExternas', 4), controladorPublicaciones.crearPublicacion);*/

// Ruta para crear una nueva publicación
router.post('/v2/publicacion', crearPublicacion);

// Ruta para crear una plantilla de publicación
router.post('/v3/publicacion', crearPlantilla);

// Ruta para modificar una publicación
router.put('/v5/publicacion', modificarPublicacion);

// Ruta para eliminar una publicación
router.delete('/v4/publicacion/:idPublicacion', eliminarPublicacion);

// Ruta para obtener las fotos de una publicación
router.get('/publicacion/fotos/:id', getFotos);

// Ruta para obtener una publicación por su ID
router.get('/v1/publicacion/:idPublicacion', verPublicacion);

// Ruta para obtener las publicaciones de un usuario
//router.get('/misPubliciones/:cedula', misPublicaciones);

export default router;
