class APIPayPal {
  constructor() {
    this.api = "APIPayPal.js";
  }

  configurarAPI() {
    console.log(`Conectando con la API de PayPal (${this.api})...`);
  }

  pagar(datos) {
    if (!datos.email || !datos.monto) {
      throw new Error("Faltan datos para procesar el pago con PayPal.");
    }
    this.procesarPago(datos);
  }

  procesarPago(datos) {
    console.log(`Pago de ${datos.monto} USD procesado exitosamente desde la cuenta PayPal: ${datos.email}`);
  }
}

export default APIPayPal;