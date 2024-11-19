import Reservacion from "../models/Reserva.js";
import Pago from "../models/Pago.js";
import APIGooglePay from "../APIs/APIGooglePay.js";
import APIPayPal from "../APIs/APIPayPal.js";
import APISafetyPay from "../APIs/APISafePay.js";
import { getConnection, sql } from './conexion.js';

class GestorReservaciones{
  constructor(){
    this.Reservaciones = {};
  }

  async crearReserva({
    identificacionUsuario,
    identificacionEmpresa,
    fechaReserva,
    lugar,
    metodoPago}){
    const nuevaReservacion = new Reservacion(identificacionEmpresa, identificacionEmpresa, fechaReserva, lugar);
    const metodoPagoSeleccionado = this.seleccionarMetodoPago(metodoPago);
    const pago = new Pago(metodoPagoSeleccionado);
    const informacionReservacion = {"reservacion": nuevaReservacion, "pago": pago};
    this.Reservaciones[identificacionUsuario + fechaReserva] = informacionReservacion;
    await this.pagar(2000, "Identificador",identificacionUsuario + fechaReserva);
    return {respuesta: true};
  }

  seleccionarMetodoPago(idMetodoPago){
    if(idMetodoPago === "1"){
      return new APIGooglePay();
    }
    else if(idMetodoPago === "2"){
      return new APIPayPal();
    }
    else{
      return new APISafetyPay();
    }
  }

  async pagar(monto, identificador, identificadorPago){
    this.Reservaciones[identificadorPago].pago.pagar(monto, identificador);
    await this.guardarReservacion(this.Reservaciones[identificadorPago].reservacion)
  }

  /**
   * 
   * @param {Reservacion} reservacion 
   */
  async guardarReservacion(reservacion){
    const pool = await getConnection();
    const request = pool.request();
    request.input("IdentificadorUsuario", sql.VarChar(45), reservacion.IdentificacionUsuario);
    request.input("IdentificadorEmpresa", sql.VarChar(45), reservacion.IdentificacionEmpresa);
    request.input("FechaDeVisita", sql.DateTimeOffset, reservacion.FechaReserva);
    request.input("Lugar", sql.VarChar(45), reservacion.Lugar);
    const result = await request.execute("AgregarReservacion");
  }
}

export default GestorReservaciones;