class SistemaPago{
  constructor() {
    if (this.constructor === Animal) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }
  }

  realizarPago(monto, tarjeta){
    throw new Error("Debe implementar el método hacerSonido.");
  }
}

export default SistemaPago;