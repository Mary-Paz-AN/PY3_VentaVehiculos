import SistemaPago from "./SistemaPago";
import APIPayPal from "../APIs/APIPayPal";

class AdaptadorPayPal extends SistemaPago{
  constructor(){
    this.APIPayPal = new APIPayPal();
    this.APIPayPal.configurarAPI();
  }
  
  realizarPago(monto, email){
    this.APIPayPal.pagar({monto, email});
  }
}

module.exports = AdaptadorPayPal;