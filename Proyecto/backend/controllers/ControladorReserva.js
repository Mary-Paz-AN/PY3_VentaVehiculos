import GestorReservaciones from "../managers/GestorReservacion.js";
const gestorReservaciones = new GestorReservaciones();

export async function crearReservacion(req, res) {
    try{
        const repuesta =  await gestorReservaciones.crearReserva(req.body)
    
        res.json(repuesta);
    }
    catch(error){
        console.log("Error al procesar los datos:", error);
        res.status(500).send("Error interno del servidor");
    }
}