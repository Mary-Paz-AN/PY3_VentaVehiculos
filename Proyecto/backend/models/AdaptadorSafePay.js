import SistemaPago from "./SistemaPago.js";
import APISafetyPay from "../APIs/APISafePay.js";

class AdaptadorSafetyPay extends SistemaPago{
  constructor(){
    this.APISafetyPay = new APISafetyPay();
    this.APISafetyPay.configurarAPI();
  }
  
  realizarPago(monto, referencia){
    this.APISafetyPay.pagar({monto, referencia});
  }
}

export default AdaptadorSafetyPay;