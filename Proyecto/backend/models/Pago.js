import EstadoPago from "./EstadoPago"

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
  }
}

module.exports = Pago;