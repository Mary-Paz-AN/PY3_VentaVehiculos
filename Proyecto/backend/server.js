// Dependency for the proper functioning of the server
const express = require("express");
const rutasUsuario = require('./routes/RutasUsuario'); 

// Constants
const app = express();
const PORT = process.env.PORT || 3001;

// Manejo de JSONS
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Rutas
// Usar las rutas para la gestión de los usuarios
app.use('/api/cuenta', rutasUsuario); 

// Archivos del frontend 
app.use(express.static("build")); 

// Iniicar el servidor
app.listen(PORT, () => console.log(`The server started on http://localhost:${PORT}`));
