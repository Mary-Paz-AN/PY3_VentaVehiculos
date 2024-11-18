// Dependency for the proper functioning of the server
const express = require("express");
const cors = require('cors');
const rutasUsuario = require('./routes/RutasUsuario');
const rutasPublicacion = require('./routes/RutasPublicacion');

// Constants
const app = express();
const PORT = process.env.PORT || 3001;

// Manejo de JSONS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
// Usar las rutas para la gestión de los usuarios
app.use('/api/cuenta', rutasUsuario);

// Usar las rutas para la gestión de publicaciones
app.use('/api/publicaciones', rutasPublicacion);


// Archivos del frontend 
app.use(express.static("build"));

// Iniicar el servidor
app.listen(PORT, () => console.log(`The server started on http://localhost:${PORT}`));


app.post('/filtrarAutosBusqueda', async (req, res) => {
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

    console.log({
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
      leasing,
    });

    res.status(200).send("Datos recibidos correctamente");
  } catch (err) {
    console.error("Error al procesar los datos:", err);
    res.status(500).send("Error interno del servidor");
  }
});

app.post('/realizarReservacion', async (req, res) => {
  try {
    
    res.json(result.recordset);
  } catch (err) {
    console.log('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error al realizar la ');
  }
});
