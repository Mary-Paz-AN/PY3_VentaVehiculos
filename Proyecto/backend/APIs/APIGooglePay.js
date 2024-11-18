class APIGooglePay {
  constructor() {
    this.api = "APIGooglePay.js";
  }

  configurarAPI() {
    console.log(`Configurando Google Pay (${this.api})...`);
  }

  pagar(datos) {
    this.configurarAPI();
    if (!datos.tarjeta || !datos.monto) {
      throw new Error("Datos incompletos para procesar el pago con Google Pay.");
    }

    // Simulación de validación de tarjeta
    if (!this.validarTarjeta(datos.tarjeta)) {
      throw new Error("Tarjeta inválida en Google Pay.");
    }

    this.procesarPago(datos);
  }

  validarTarjeta(tarjeta) {
    console.log(`Validando tarjeta: ${tarjeta}`);
    // Lógica ficticia de validación de tarjeta
    return tarjeta.startsWith("4") || tarjeta.startsWith("5"); // Por ejemplo, las tarjetas Visa comienzan con "4"
  }

  procesarPago(datos) {
    console.log(`Pago de ${datos.monto} CRC procesado exitosamente con Google Pay. Tarjeta: ${datos.tarjeta}`);
  }
}

export default APIGooglePay;