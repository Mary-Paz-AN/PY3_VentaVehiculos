// Importar el gestor y crear su instancia para poder usar sus métodos
const GestorPublicaciones = require('../managers/GestorPublicaciones');
const gestorPublicaciones = new GestorPublicaciones();

/* Crear una publicación
async function crearPublicacion(req, res) {
    try {
        // Procesar los datos
        const datos = req.body;  // Los datos normales
        const fotosInternas = req.files.filter(file => file.fieldname === 'fotosInternas');
        const fotosExternas = req.files.filter(file => file.fieldname === 'fotosExternas');

        // Aquí puedes procesar los archivos si es necesario, o guardarlos en una base de datos

        console.log(datos);  // Datos de la publicación
        console.log(fotosInternas);  // Archivos de fotos internas
        console.log(fotosExternas);  // Archivos de fotos externas

        // Llamar al gestor para crear la publicación
        const resultado = await gestorPublicaciones.crearPublicacionBD(datos, fotosInternas, fotosExternas);

        // Verificar que todo salió bien y devolver la respuesta
        if (resultado) {
            return res.status(201).json({ message: 'Publicación creada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al crear la publicación' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
}*/

// Crear una publicación
async function crearPublicacion(req, res) {
    try {
        // Procesar los datos
        const datos = req.body;  // Los datos normales
        const fotosInternas = req.files.filter(file => file.fieldname === 'fotosInternas');
        const fotosExternas = req.files.filter(file => file.fieldname === 'fotosExternas');

        // Aquí puedes procesar los archivos si es necesario, o guardarlos en una base de datos

        console.log(datos);  // Datos de la publicación
        console.log(fotosInternas);  // Archivos de fotos internas
        console.log(fotosExternas);  // Archivos de fotos externas

        // Llamar al gestor para crear la publicación
        const resultado = await gestorPublicaciones.crearPublicacionBD(datos, fotosInternas, fotosExternas);

        // Verificar que todo salió bien y devolver la respuesta
        if (resultado) {
            return res.status(201).json({ message: 'Publicación creada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al crear la publicación' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
}

// Crear publicación por medio de una plantilla
async function crearPlantilla (req, res) {
    try {
        const data = req.body;
        const resultado = await gestorPublicaciones.crearPlantilla(data);

        // Verificar que la plantilla se hicicera
        if (resultado) {
            return res.status(201).json({ message: 'Plantilla de publicación creada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al crear la plantilla' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Modificar una publicación
async function modificarPublicacion (req, res) {
    try {
        const datos = req.body; 
        const resultado = await gestorPublicaciones.modificarPublicacion(datos);

        //Veriifcar que la modificación se hizó
        if (resultado) {
            return res.status(200).json({ message: 'Publicación modificada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al modificar la publicación' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Eliminar una publicación
async function eliminarPublicacion (req, res) {
    try {
        const { id } = req.params; 
        const resultado = await gestorPublicaciones.eliminarPublicacion(id);

        //Verificar que la publicación se elimine exitosamente
        if (resultado) {
            return res.status(200).json({ message: 'Publicación eliminada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al eliminar la publicación' });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Obtener las fotos de una publicación
async function getFotos (req, res) {
    try {
        const { id } = req.params;
        const fotos = await gestorPublicaciones.getFotos(id);

        //Verificar que existan datos
        if (fotos) {
            return res.status(200).json(fotos);
        } else {
            return res.status(404).json({ message: 'Fotos no encontradas' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Obtener una publicación
async function verPublicacion (req, res) {
    try {
        const { id } = req.params; 
        const datos = await gestorPublicaciones.verPublicacion(id);

        //Verificar que si existan datos
        if (datos) {
            return res.status(200).json(datos);
        } else {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Obtener las publicaciones de usuario
async function misPublicaciones (req, res) {
    try {
        const { cedula } = req.params;
        const fotos = await gestorPublicaciones.misPublicaciones(cedula);

        //Verificar que existan datos
        if (fotos) {
            return res.status(200).json(fotos);
        } else {
            return res.status(404).json({ message: 'Publicaciones no encontradas' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

module.exports = { crearPublicacion, crearPlantilla, modificarPublicacion, eliminarPublicacion, getFotos, verPublicacion, misPublicaciones };