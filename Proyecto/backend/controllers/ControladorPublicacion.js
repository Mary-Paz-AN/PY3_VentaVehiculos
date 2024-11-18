// Importar el gestor y crear su instancia para poder usar sus métodos
import GestorPublicaciones from '../gestores/GestorPublicaciones';
const gestorPublicaciones = new GestorPublicaciones();

// Crear una publicación
export async function crearPublicacion(req, res) {
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
}

// Modificar una publicación
export async function modificarPublicacion(req, res) {
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
}

// Eliminar una publicación
export async function eliminarPublicacion(req, res) {
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
}

// Obtener una publicación
export async function verPublicacion(req, res) {
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
}

// Crear publicación a partir de una plantilla
export async function crearPlantilla(req, res) {
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
}

// Obtener las fotos de una publicación
export async function getFotos(req, res) {
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
}

export async function filtrarAutos(req, res) {
    try {
        // Desestructuramos el JSON del cuerpo de la solicitud
        const {
          marca,
          modelo,
          año,
          placa,
          precio,
          negociable,
          aceptaVehiculos,
          transmisionTipo,
          puertas,
          dimensiones: { largo, ancho, alto },
          materialAsientos,
          motor,
          vidriosElectricos,
          espejosElectricos,
          sensoresTraseros,
          sensoresDelanteros,
          camaraRetroceso,
          camara360,
          sensoresLaterales,
          tablero,
          tipoTransmision,
          tapizado,
          sonido,
          estadoVehiculo,
          leasing,
        } = req.body;
    
        const filtrado = gestorPublicaciones.verPublicacionesFiltradas(
          marca,
          modelo,
          año,
          placa,
          precio,
          negociable,
          aceptaVehiculos,
          transmisionTipo,
          puertas,
          largo,
          ancho,
          alto,
          materialAsientos,
          motor,
          vidriosElectricos,
          espejosElectricos,
          sensoresTraseros,
          sensoresDelanteros,
          camaraRetroceso,
          camara360,
          sensoresLaterales,
          tablero,
          tipoTransmision,
          tapizado,
          sonido,
          estadoVehiculo,
          leasing
        )
    
        res.json(filtrado);
      } catch (err) {
        console.error("Error al procesar los datos:", err);
        res.status(500).send("Error interno del servidor");
      }
}