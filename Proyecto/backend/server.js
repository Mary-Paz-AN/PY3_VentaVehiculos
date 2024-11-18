//Controladores de las funciones.
import { filtrarAutos } from "./controllers/ControladorPublicacion";

// Dependency for the proper functioning of the server
const express = require("express");
const cors = require('cors');
const rutasUsuario = require('./routes/RutasUsuario');

// Constants
const app = express();
const PORT = process.env.PORT || 3001;

// Manejo de JSONS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3001' }));

//Instancias de controladores
const GestorPublicacionesI = new GestorPublicaciones();

app.get('/usuario', async (req, res) => {
  try {
    //Iniciar la conexión con la base de datos para hacer consultado
    const pool = await getConnection();
    const request = pool.request();

    // Ejecutar la consulta
    const result = await request.query('SELECT * FROM Usuario');
    res.json(result.recordset);
  } catch (err) {
    console.log('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error al ejecutar el procedimiento almacenado');
  }
});

app.post('/filtrarAutosBusqueda', async (req, res) => {
  filtrarAutos(req, res)
});

// Rutas
// Usar las rutas para la gestión de los usuarios
app.use('/api/cuenta', rutasUsuario);

// Archivos del frontend 
app.use(express.static("build"));

// Iniicar el servidor
app.listen(PORT, () => console.log(`The server started on http://localhost:${PORT}`));
