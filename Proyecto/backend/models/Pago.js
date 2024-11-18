import EstadoPago from "./EstadoPago.js";

class Pago{
  constructor(sistemaC){
    this.Estado = EstadoPago.PENDIENTE;
    this.SistemaC = sistemaC;
  }

  setEstadoPago(estadoPago){
    this.Estado = estadoPago;
  }

  pagar(monto, tarjeta){
    try {
      this.SistemaC.realizarPago(monto, tarjeta);
      this.Estado = EstadoPago.COMPLETADO;
    } catch (error) {
      this.Estado = EstadoPago.FALLIDO;
    }
    return this.Estado;
  }
}

export default Pago;