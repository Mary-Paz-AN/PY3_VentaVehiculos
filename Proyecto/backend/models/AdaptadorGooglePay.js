import SistemaPago from "./SistemaPago.js";
import APIGooglePay from "../APIs/APIGooglePay.js";

class AdaptadorGooglePay extends SistemaPago{
  constructor(){
    this.APIGooglePay = new APIGooglePay();
    this.APIGooglePay.configurarAPI();
  }

  realizarPago(monto, tarjeta){
    this.APIGooglePay.pagar({monto, tarjeta});
  }
}

export default AdaptadorGooglePay;