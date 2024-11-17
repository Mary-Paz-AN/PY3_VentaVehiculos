import SistemaPago from "./SistemaPago";
import APISafetyPay from "../APIs/APISafePay";

class AdaptadorSafetyPay extends SistemaPago{
  constructor(){
    this.APISafetyPay = new APISafetyPay();
    this.APISafetyPay.configurarAPI();
  }
  
  realizarPago(monto, referencia){
    this.APISafetyPay.pagar({monto, referencia});
  }
}

module.exports = AdaptadorSafetyPay;