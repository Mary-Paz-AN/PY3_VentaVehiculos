//Dependency for the proper functioning of the server
const express = require("express");
const { getConnection, sql } = require('./conexion');

//Constants
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`The server started on  http://localhost:${PORT}`));
app.use(express.static("build"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/usuario', async (req, res) => {
    try {
        //Iniciar la conexión con la base de datos para hacer consultado
        const pool = await getConnection();
        const request = pool.request();
        
        // Ejecutar la consulta
        const result = await request.query('SELECT * FROM Usuario');
        res.json(result.recordset); 
    } catch (err) {
        console.error('Error al ejecutar el procedimiento almacenado:', err);
        res.status(500).send('Error al ejecutar el procedimiento almacenado');
    }
});
