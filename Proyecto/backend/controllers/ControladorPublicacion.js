// Importar el gestor y crear su instancia para poder usar sus métodos
import GestorPublicaciones from "../managers/GestorPublicaciones.js";
const gestorPublicaciones = new GestorPublicaciones();

// Crear una publicación
export async function crearPublicacion(req, res) {
    try {
        // Procesar los datos
        const datos = req.body;  

        // Llamar al gestor para crear la publicación
        const resultado = await gestorPublicaciones.crearPublicacion(datos);

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

// Crear una publicación por medio de una plantilla
export async function crearPlantilla(req, res) {
    try {
        // Procesar los datos
        const datos = req.body;  

        // Llamar al gestor para crear la publicación
        const resultado = await gestorPublicaciones.crearPlantilla(datos);

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

// Modificar una publicación
export async function modificarPublicacion(req, res) {
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
}

// Eliminar una publicación
export async function eliminarPublicacion(req, res) {
    try {
        const { idPublicacion } = req.params; 
        const resultado = await gestorPublicaciones.eliminarPublicacion(idPublicacion);

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
export async function getFotos (req, res) {
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
}

// Obtener una publicación
export async function verPublicacion(req, res) {
    try {
        const { idPublicacion } = req.params; 
        const datos = await gestorPublicaciones.verPublicacion(idPublicacion);

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
}

// Busca las publicaciones del usuario por medio de la cedula
export async function misPublicaciones(req, res) {
    try {
        const { cedula } = req.params;
        const publicaciones = await gestorPublicaciones.misPublicaciones(cedula);

        //Verificar que existan datos
        if (publicaciones) {
            return res.status(200).json(publicaciones);
        } else {
            return res.status(404).json({ message: 'Publicaciones no encontradas' });
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
