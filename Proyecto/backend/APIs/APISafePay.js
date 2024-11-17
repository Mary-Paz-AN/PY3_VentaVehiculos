class APISafetyPay {
  constructor() {
    this.api = "APISafetyPay";
    this.tokenAutenticacion = null; // Simulación de autenticación
  }

  configurarAPI() {
    console.log(`Iniciando sesión en SafetyPay (${this.api})...`);
    this.tokenAutenticacion = this.autenticar();
  }

  autenticar() {
    console.log("Autenticando con SafetyPay...");
    // Simulación de autenticación
    return "token_secreto_123";
  }

  pagar(datos) {
    if (!this.tokenAutenticacion) {
      this.configurarAPI();
    }
    if (!datos.referencia || datos.monto <= 0) {
      throw new Error("Referencia o monto inválido para SafetyPay.");
    }
    this.procesarPago(datos);
  }

  procesarPago(datos) {
    console.log(`Pago de ${datos.monto} CRC procesado exitosamente en SafetyPay. Referencia: ${datos.referencia}`);
  }
}

module.exports = APISafetyPay;