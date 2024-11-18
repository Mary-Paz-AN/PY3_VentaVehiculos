//Controladores de las funciones.
import { filtrarAutos } from "./controllers/ControladorPublicacion";

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
  filtrarAutos(req, res)
});
