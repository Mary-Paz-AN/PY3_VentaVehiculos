// Importar el gestor y crear su instancia para poder usar sus métodos
const GestorPublicaciones = require('../gestores/GestorPublicaciones');
const gestorPublicaciones = new GestorPublicaciones();

// Crear una publicación
exports.crearPublicacion = async (req, res) => {
    try {
        const datos = req.body; // Obtener los datos del cuerpo de la solicitud
        const resultado = await gestorPublicaciones.crearPublicacion(datos);
        if (resultado) {
            return res.status(201).json({ message: 'Publicación creada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al crear la publicación' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Modificar una publicación
exports.modificarPublicacion = async (req, res) => {
    try {
        const datos = req.body; // Obtener los datos del cuerpo de la solicitud
        const resultado = await gestorPublicaciones.modificarPublicacion(datos);
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
exports.eliminarPublicacion = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la publicación desde los parámetros de la URL
        const resultado = await gestorPublicaciones.eliminarPublicacion(id);
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

// Obtener una publicación
exports.verPublicacion = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la publicación desde los parámetros de la URL
        const datos = await gestorPublicaciones.verPublicacion(id);
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

// Crear publicación a partir de una plantilla
exports.crearPlantilla = async (req, res) => {
    try {
        const { id, data } = req.body; // Obtener los datos del cuerpo de la solicitud
        const resultado = await gestorPublicaciones.crearPlantilla(id, data);
        if (resultado) {
            return res.status(201).json({ message: 'Plantilla creada exitosamente' });
        } else {
            return res.status(400).json({ message: 'Error al crear la plantilla' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al procesar la solicitud' });
    }
};

// Obtener las fotos de una publicación
exports.getFotos = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID de la publicación desde los parámetros de la URL
        const fotos = await gestorPublicaciones.getFotos(id);
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
