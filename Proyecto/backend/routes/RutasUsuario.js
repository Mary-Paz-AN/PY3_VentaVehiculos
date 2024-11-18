import { Router } from 'express';
const router = Router();

// Controlador
import { iniciarSesionUsuario, iniciarSesionCorreo, registrarse, infoUsuario , verificarIdentificacion, verificarProcessoPenal} from '../controllers/ControladorUsuario.js';

// Iniciar sesión con un usuario
router.post('/iniciarSesion/usuario', iniciarSesionUsuario);

// Iniicar sesión con el correo
router.post('/iniciarSesion/correo', iniciarSesionCorreo);

// Registrar un usuario
router.post('/registrarse', registrarse);

// Conseguir la información de un usuario
router.get('/informacion/:usuario', infoUsuario);

// Verificar validez de la cedula
router.post('/v1/registrarse', verificarIdentificacion);

// Verificar processos penales
router.post('/v2/registrarse', verificarProcessoPenal);

export default router;
