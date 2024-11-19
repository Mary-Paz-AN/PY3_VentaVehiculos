//Controladores de las funciones.
import { consultarVehiculo, filtrarAutos, mostrarPublicacionBusqueda } from "./controllers/ControladorPublicacion.js";

// Dependency for the proper functioning of the server
import expressModule from 'express';
import corsModule from 'cors';
import rutasUsuario from "./routes/RutasUsuario.js"
import rutasPublicacion from "./routes/RutasPublicacion.js"

const express = expressModule;
const cors = corsModule;

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

app.post('/consultarVehiculo', async (req, res) => {
  consultarVehiculo(req, res)
});

app.post('/mostrarPublicacionBusqueda', async (req, res) => {
  mostrarPublicacionBusqueda(req, res)
});