import mssql from 'mssql';
import osModule from 'os';

const sql = mssql;
const os = osModule;

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
export async function getConnection () {
    try {
        const pool = await sql.connect(configSql);

        return pool;
    } catch (err) {
        console.error(err);
    }
}

export {sql}