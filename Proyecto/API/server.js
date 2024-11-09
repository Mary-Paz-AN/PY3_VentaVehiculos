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

