import SistemaPago from "./SistemaPago";
import APIGooglePay from "../APIs/APIGooglePay";

class AdaptadorGooglePay extends SistemaPago{
  constructor(){
    this.APIGooglePay = new APIGooglePay();
    this.APIGooglePay.configurarAPI();
  }

  realizarPago(monto, tarjeta){
    this.APIGooglePay.pagar({monto, tarjeta});
  }
}

module.exports = AdaptadorGooglePay;