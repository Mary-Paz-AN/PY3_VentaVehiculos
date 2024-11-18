import Publicacion from '../models/Publicacion';
import { getConnection, sql } from './conexion';

// Creación de las clase
class GestorPublicaciones {

    // Crear una publicacion desde 0
    async crearPublicacion(datos) {
        try {
            //Crea una instancia de pubicación
            const nuevaPublicacion = new Publicacion(
                datos.cedula,
                datos.precio,
                datos.negociable,
                datos.recibeVehiculo,
                datos.leasing,
                datos.fotosInternas,
                datos.fotosExternas
            );

            nuevaPublicacion.setInfoVehiculo(
                datos.placa,
                datos.marca,
                datos.modelo,
                datos.anio,
                datos.tipo,
                datos.motor,
                datos.sistemaSonido,
                datos.tablero,
                datos.cantidadPuertas,
                datos.estado
            );

            nuevaPublicacion.setMaterial(datos.asientos, datos.tapizado);

            nuevaPublicacion.setSensores(
                datos.sensorTrasero,
                datos.sensorDelantero,
                datos.sensorLateral,
                datos.camaraRetroceso,
                datos.camara360
            );

            nuevaPublicacion.setMecanica(
                datos.traccion,
                datos.transmision,
                datos.vidriosElec,
                datos.espejosElec
            );

            nuevaPublicacion.setDimensiones(datos.largo, datos.ancho, datos.alto);

            const publicacion = nuevaPublicacion.getPublicacion();

            const resultado = await this.crearPublicacionBD(publicacion);
            if (resultado) {
                return true;
            } else {
                throw new Error('No se pudo crear la publicación');
            }

        } catch (error) {
            console.error('Error en crearPublicacion:', error);
            throw new Error('Error al crear la publicación. Por favor, intente nuevamente.');
        }
    }

    // Crear la publicación en la base de datos
    async crearPublicacionBD(publicacion) {
        try {
            //Conexión a la base de datos
            const pool = await getConnection();
            const request = pool.request();

            //Asignar los parámetros de entrada
            request.input('placa', sql.VarChar, publicacion.placa);
            request.input('marca', sql.VarChar, publicacion.marca);
            request.input('modelo', sql.VarChar, publicacion.modelo);
            request.input('anio', sql.Int, publicacion.anio);
            request.input('tipo', sql.VarChar, publicacion.tipo);
            request.input('motor', sql.VarChar, publicacion.motor);
            request.input('sistemaSonido', sql.VarChar, publicacion.sistemaSonido);
            request.input('tablero', sql.VarChar, publicacion.tablero);
            request.input('cantidadPuertas', sql.Int, publicacion.cantidadPuertas);
            request.input('estado', sql.Int, publicacion.estado);

            request.input('asientos', sql.VarChar, publicacion.asientos);
            request.input('tapizado', sql.VarChar, publicacion.tapizado);

            request.input('proxTraseros', sql.Bit, publicacion.sensorTrasero);
            request.input('proxDelanteros', sql.Bit, publicacion.sensorDelantero);
            request.input('proxLateral', sql.Bit, publicacion.sensorLateral);
            request.input('camaraRetroceso', sql.Bit, publicacion.camaraRetroceso);
            request.input('camara360', sql.Bit, publicacion.camara360);

            request.input('traccion', sql.VarChar, publicacion.traccion);
            request.input('transmicion', sql.VarChar, publicacion.transmision);
            request.input('ventaElec', sql.Bit, publicacion.vidriosElec);
            request.input('espeElec', sql.Bit, publicacion.espejosElec);

            request.input('largo', sql.Real, publicacion.largo);
            request.input('ancho', sql.Real, publicacion.alto);
            request.input('alto', sql.Real, publicacion.ancho);

            request.input('cedula', sql.VarChar, publicacion.cedulaUsuario);
            request.input('precio', sql.Real, publicacion.precio);
            request.input('negociable', sql.Bit, publicacion.negociable);
            request.input('recibeVehiculo', sql.Bit, publicacion.recibeVehiculo);
            request.input('leasing', sql.Bit, publicacion.leasing);

            let idPublicacion;
            request.output('idPublicacion', sql.Int, idPublicacion);

            //Ejecutar store procedure
            const resultado = await request.execute('sp_crearP');

            // Verificar que se creo la publicacion
            if (resultado && resultado.rowsAffected && resultado.rowsAffected[0] > 0) {
                /*try {
                    // Intentamos agregar las fotos, si algo falla se captura el error
                    await this.addFotos(publicacion.fotosInternas, publicacion.fotosExternas, idPublicacion);
                } catch (error) {
                    console.error('Error al agregar fotos:', error);
                    throw new Error('Hubo un error al agregar las fotos a la publicación. Por favor, inténtalo de nuevo.');
                }*/
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en sp_crearP:', error);
            throw new Error('Error al crear la publicación. Por favor, vuelva a inténtalo.');
        }
    }

    // Añade las fotos del vehiculo en la base de datos
    async addFotos(internas, externas, id) {
        try {
            //Conexión a la base de datos
            const pool = await getConnection();

            let j = 0;
            for (let i = 0; i < 8; i++) {
                if (i < 4) {
                    const request = pool.request();

                    //Parametros
                    let foto = internas[i];
                    request.input('idPublicacion', sql.Int, id);
                    request.input('foto', sql.VarBinary, foto);
                    request.input('interna', sql.Bit, true);

                    //Ejecutar store procedure
                    const resultado = await request.execute('sp_fotosP');

                    // Verificar que se añadió la foto
                    if (!resultado || !resultado.rowsAffected || resultado.rowsAffected[0] === 0) {
                        throw new Error('Error al agregar una de las fotos.');
                    }

                } else {
                    const request = pool.request();

                    //Parametros
                    let foto = externas[j];
                    request.input('idPublicacion', sql.Int, id);
                    request.input('foto', sql.VarBinary, foto);
                    request.input('interna', sql.Bit, false);

                    //Ejecutar store procedure
                    const resultado = await request.execute('sp_fotosP');

                    // Verificar que se añadió la foto
                    if (!resultado || !resultado.rowsAffected || resultado.rowsAffected[0] === 0) {
                        throw new Error('Error al agregar una de las fotos.');
                    }

                    j++;
                }
            }

            return true;

        } catch (error) {
            console.error('Error en sp_fotosP:', error);
            throw new Error('Hubo un error al agregar las fotos a la publicación. Por favor, inténtalo de nuevo.');
        }

    }

    //Usar una plantilla para craer una publicación
    async crearPlantilla(data) {
        try {
            const datos = await this.verPublicacion(data.id);

            if (!datos) {
                throw Error('Ocurrio un errror consiguiendo los datos');
            } else {

                //Crea una instancia de pubicación para usarla como plantilla
                const nuevaPublicacion = new Publicacion(
                    datos.cedula,
                    datos.precio,
                    datos.negociable,
                    datos.recibeVehiculo,
                    datos.leasing,
                    datos.fotosInternas,
                    datos.fotosExternas
                );

                nuevaPublicacion.setInfoVehiculo(
                    datos.placa,
                    datos.marca,
                    datos.modelo,
                    datos.anio,
                    datos.tipo,
                    datos.motor,
                    datos.sistemaSonido,
                    datos.tablero,
                    datos.cantidadPuertas,
                    datos.estado
                );

                nuevaPublicacion.setMaterial(datos.asientos, datos.tapizado);

                nuevaPublicacion.setSensores(
                    datos.sensorTrasero,
                    datos.sensorDelantero,
                    datos.sensorLateral,
                    datos.camaraRetroceso,
                    datos.camara360
                );

                nuevaPublicacion.setMecanica(
                    datos.traccion,
                    datos.transmision,
                    datos.vidriosElec,
                    datos.espejosElec
                );

                nuevaPublicacion.setDimensiones(datos.largo, datos.ancho, datos.alto);

                //Clonar la publicacion y agregar sus nuevo atributos
                const clon = nuevaPublicacion.clonar();
                clon.setDatosPublicacion(data);

                const publicacion = clon.getPublicacion();

                //Crear la publicacion
                const resultado = await this.crearPublicacionBD(publicacion);
                if (resultado) {
                    return true;
                } else {
                    throw new Error('No se pudo crear la publicación');
                }

            }

        } catch (error) {
            console.error('Error en crearPlantilla:', error);
            throw new Error('Error al crear la publicación. Por favor, intente nuevamente.');
        }
    }

    //Modificar una publicacion
    async modificarPublicacion(datos) {
        try {
            //Conexión a la base de datos
            const pool = await getConnection();
            const request = pool.request();

            //Asignar los parámetros de entrada
            request.input('placa', sql.VarChar, datos.placa);
            request.input('marca', sql.VarChar, datos.marca);
            request.input('modelo', sql.VarChar, datos.modelo);
            request.input('anio', sql.Int, datos.anio);
            request.input('tipo', sql.VarChar, datos.tipo);
            request.input('motor', sql.VarChar, datos.motor);
            request.input('sistemaSonido', sql.VarChar, datos.sistemaSonido);
            request.input('tablero', sql.VarChar, datos.tablero);
            request.input('cantidadPuertas', sql.Int, datos.cantidadPuertas);
            request.input('estado', sql.Int, datos.estado);

            request.input('asientos', sql.VarChar, datos.asientos);
            request.input('tapizado', sql.VarChar, datos.tapizado);

            request.input('proxTraseros', sql.Bit, datos.sensorTrasero);
            request.input('proxDelanteros', sql.Bit, datos.sensorDelantero);
            request.input('proxLateral', sql.Bit, datos.sensorLateral);
            request.input('camaraRetroceso', sql.Bit, datos.camaraRetroceso);
            request.input('camara360', sql.Bit, datos.camara360);

            request.input('traccion', sql.VarChar, datos.traccion);
            request.input('transmicion', sql.VarChar, datos.transmision);
            request.input('ventaElec', sql.Bit, datos.vidriosElec);
            request.input('espeElec', sql.Bit, datos.espejosElec);

            request.input('largo', sql.Real, datos.largo);
            request.input('ancho', sql.Real, datos.alto);
            request.input('alto', sql.Real, datos.ancho);

            request.input('precio', sql.Real, datos.precio);
            request.input('negociable', sql.Bit, datos.negociable);
            request.input('recibeVehiculo', sql.Bit, datos.recibeVehiculo);
            request.input('leasing', sql.Bit, datos.leasing);

            //Ejecutar store procedure
            const resultado = await request.execute('sp_modiP');

            // Verificar que se creo la publicacion
            if (resultado && resultado.rowsAffected && resultado.rowsAffected[0] > 0) {
                /*try {
                    // Intentamos agregar las fotos, si algo falla se captura el error
                    await this.modificarFotos(datos.fotosInternas, datos.fotosExternas, datos.internasId, datos.externasId);
                } catch (error) {
                    console.error('Error al modificar las fotos:', error);
                    throw new Error('Hubo un error al modificar las fotos de la publicación. Por favor, inténtalo de nuevo.');
                }*/
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en sp_modiP:', error);
            throw new Error('Error al modificar la publicación. Por favor, vuelva a inténtalo.');
        }
    }

    // Moidica las fotos del vehiculo en la base de datos
    async modificarFotos(internas, externas, internasId, externasId) {
        try {
            //Conexión a la base de datos
            const pool = await getConnection();

            let j = 0;
            for (let i = 0; i < 8; i++) {
                if (i < 4) {
                    const request = pool.request();

                    //Parametros
                    let foto = internas[i];
                    let id = internasId[i];
                    request.input('id', sql.Int, id);
                    request.input('foto', sql.VarBinary, foto);

                    //Ejecutar store procedure
                    const resultado = await request.execute('sp_modiFotosP');

                    // Verificar que se añadió la foto
                    if (!resultado || !resultado.rowsAffected || resultado.rowsAffected[0] === 0) {
                        throw new Error('Error al modificar una de las fotos.');
                    }

                } else {
                    const request = pool.request();

                    //Parametros
                    let foto = externas[j];
                    let id = externasId[i];
                    request.input('id', sql.Int, id);
                    request.input('foto', sql.VarBinary, foto);

                    //Ejecutar store procedure
                    const resultado = await request.execute('sp_modiFotosP');

                    // Verificar que se añadió la foto
                    if (!resultado || !resultado.rowsAffected || resultado.rowsAffected[0] === 0) {
                        throw new Error('Error al modificar una de las fotos.');
                    }

                    j++;
                }
            }

            return true;

        } catch (error) {
            console.error('Error en sp_modiFotosP:', error);
            throw new Error('Hubo un error al modificar las fotos de la publicación. Por favor, inténtalo de nuevo.');
        }

    }

    //Obtiene el id de las fotos y las fotos de una publicacion
    async getFotos(id) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();

            // Asignar los parámetros de entrada
            request.input('idPublicacion', sql.Int, id);

            //Ejecutar el store procedure
            const resultado = await request.execute('sp_fotos');

            // Verificar que el resultado si exista
            if (resultado.recordset.length > 0) {
                return resultado.recordset[0];
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en el sp_fotos:', error);
            throw new Error('Hubo un problema consiguiendo las fotos. Por favor, vuelva a inténtalo.');
        }
    }

    //Eliminar una publicación
    async eliminarPublicacion(id) {
        try {
            //Conexión a la base de datos
            const pool = await getConnection();
            const request = pool.request();

            //Parametro
            request.input('id', sql.Int, id);

            //Ejecutar store procedure
            const resultado = await request.execute('sp_eliminarP');

            // Verificar que se haya hecho la eliminación
            if (!resultado || !resultado.rowsAffected || resultado.rowsAffected[0] === 0) {
                throw new Error('Error al eliminar la publicación');
            }

            return true;

        } catch (error) {
            console.error('Error en sp_eliminarP:', error);
            throw new Error('Hubo un error al eliminar la publicación. Por favor, inténtalo de nuevo.');
        }

    }

    //Ver publicacion
    async verPublicacion(id) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();

            // Asignar los parámetros de entrada
            request.input('idPublicacion', sql.Int, id);

            //Ejecutar el store procedure
            const resultado = await request.execute('sp_publicacion');

            // Verificar que el resultado si exista
            if (resultado.recordset.length > 0) {
                const dataPublicacion = resultado.recordset[0];

                // Pasar a YYYY-MM-DD HH:MM:SS
                if (dataPublicacion.fechaPublicacion) {
                    const fechaConHora = dataPublicacion.fechaPublicacion.toISOString();
                    const [fecha, hora] = fechaConHora.split('T');
                    dataPublicacion.fechaPublicacion = `${fecha} ${hora.split('.')[0]}`; 
                }

                if (dataPublicacion.fechaModificacion) {
                    const fechaConHora = dataPublicacion.fechaModificacion.toISOString();
                    const [fecha, hora] = fechaConHora.split('T');
                    dataPublicacion.fechaModificacion = `${fecha} ${hora.split('.')[0]}`; 
                }

                return dataPublicacion;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en sp_publicacion:', error);
            throw new Error('Hubo un problema consiguiendo los datos. Por favor, vuelva a inténtalo.');
        }
    }

    //Lista de las publicaciones del usaurio
    async misPublicaciones(cedula) {
        try {
            // Iniciar la conexión a la BD
            const pool = await getConnection();
            const request = pool.request();

            // Asignar los parámetros de entrada
            request.input('cedula', sql.VarChar, cedula);

            //Ejecutar el store procedure
            const resultado = await request.execute('sp_misPublicaciones');

            // Verificar que el resultado si exista
            if (resultado.recordset.length > 0) {
                return resultado.recordset;
            } else {
                return false;
            }

        } catch (error) {
            console.error('Error en sp_misPublicaciones:', error);
            throw new Error('Hubo un problema consiguiendo los datos. Por favor, vuelva a inténtalo.');
        }
    }

    // Verificar que la placa sea valida
    verificarPlaca(placa) {

    }

    //Verificar que el vehiculo no cuente con multas 
    verificarMultas(placa) {

    }

    /**
     * Función para ejecutar el procedimiento almacenado `FiltrarPublicaciones`.
     * @param {Object} parametros - Parámetros para el procedimiento almacenado.
     * @returns {Promise<Array>} Resultados de la consulta.
     */
    async verPublicacionesFiltradas({
        marca = null,
        modelo = null,
        anio = null,
        placa = null,
        precio = null,
        negociable = null,
        aceptaVehiculos = null,
        transmisionTipo = null,
        puertas = null,
        largo = null,
        ancho = null,
        alto = null,
        materialAsientos = null,
        motor = null,
        vidriosElectricos = null,
        espejosElectricos = null,
        sensoresTraseros = null,
        sensoresDelanteros = null,
        camaraRetroceso = null,
        camara360 = null,
        sensoresLaterales = null,
        tablero = null,
        tipoTransmision = null,
        tapizado = null,
        sonido = null,
        estadoVehiculo = null,
        leasing = null,
    }) {
        // Crear la solicitud para el procedimiento almacenado
        const pool = getConnection();
        const request = pool.request();

        // Agregar todos los parámetros al request
        request.input("marca", sql.VarChar(30), marca);
        request.input("modelo", sql.VarChar(30), modelo);
        request.input("anio", sql.Int, anio);
        request.input("placa", sql.VarChar(6), placa);
        request.input("precio", sql.Int, precio);
        request.input("negociable", sql.Bit, negociable);
        request.input("aceptaVehiculos", sql.Bit, aceptaVehiculos);
        request.input("transmisionTipo", sql.VarChar(30), transmisionTipo);
        request.input("puertas", sql.Int, puertas);
        request.input("largo", sql.Float, largo);
        request.input("ancho", sql.Float, ancho);
        request.input("alto", sql.Float, alto);
        request.input("materialAsientos", sql.VarChar(45), materialAsientos);
        request.input("motor", sql.VarChar(30), motor);
        request.input("vidriosElectricos", sql.Bit, vidriosElectricos);
        request.input("espejosElectricos", sql.Bit, espejosElectricos);
        request.input("sensoresTraseros", sql.Bit, sensoresTraseros);
        request.input("sensoresDelanteros", sql.Bit, sensoresDelanteros);
        request.input("camaraRetroceso", sql.Bit, camaraRetroceso);
        request.input("camara360", sql.Bit, camara360);
        request.input("sensoresLaterales", sql.Bit, sensoresLaterales);
        request.input("tablero", sql.VarChar(30), tablero);
        request.input("tipoTransmision", sql.VarChar(30), tipoTransmision);
        request.input("tapizado", sql.VarChar(30), tapizado);
        request.input("sonido", sql.VarChar(30), sonido);
        request.input("estadoVehiculo", sql.Int, estadoVehiculo);
        request.input("leasing", sql.Bit, leasing);

        // Ejecutar el procedimiento almacenado
        const result = await request.execute("FiltrarPublicaciones");

        // Retornar los resultados
        return result.recordset;
    }

}

export default GestorPublicaciones;