const sql = require('mssql');
const os = require('os');

// Define el nombre de usuario y de contraseña
const serverName = os.hostname();
const getUser = () => {
    if(serverName === 'MP') {
        return "marypaz"
    } else {
        return "andrew"
    }
}

const getContra = () => {
    if(serverName === 'MP') {
        return "mp123"
    } else {
        return "ad123"
    }
}


//Configuración para la conexión con la base de datos
const configSql = {
    user: getUser(),
    password: getContra(),
    server: "localhost",
    database: "AutosUsados",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

//Iniciar la conexión
const getConnection = async ( ) => {
    try {
        const pool = await sql.connect(configSql);

        return pool;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getConnection, sql };