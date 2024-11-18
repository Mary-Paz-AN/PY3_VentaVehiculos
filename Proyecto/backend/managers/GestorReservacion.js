import Reservacion from "../models/Reserva.js";
import Pago from "../models/Pago.js";
import APIGooglePay from "../APIs/APIGooglePay.js";
import APIPayPal from "../APIs/APIPayPal.js";
import APISafetyPay from "../APIs/APISafePay.js";

class GestorReservaciones{
  constructor(){
    this.Reservaciones = {};
  }

  crearReserva(identificacionUsuario, identificacionEmpresa, fechaReserva, lugar, metodoPago){
    const nuevaReservacion = new Reservacion(identificacionEmpresa, identificacionEmpresa, fechaReserva, lugar);
    const metodoPagoSeleccionado = seleccionarMetodoPago(metodoPago);
    const pago = new Pago(metodoPagoSeleccionado);
    const informacionReservacion = {"reservacion": nuevaReservacion, "pago": pago};
    this.Reservaciones[identificacionUsuario + fechaReserva] = informacionReservacion;
  }

  seleccionarMetodoPago(idMetodoPago){
    if(idMetodoPago == 1){
      return new APIGooglePay();
    }
    else if(idMetodoPago == 2){
      return new APIPayPal();
    }
    else{
      return new APISafetyPay();
    }
  }

  pagar(monto, identificador, identificadorPago){
    return this.Reservaciones.identificadorPago.pago.pagar(monto, identificador);
  }
}

export default GestorReservaciones;