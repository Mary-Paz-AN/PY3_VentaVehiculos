import SistemaPago from "./SistemaPago.js";
import APIPayPal from "../APIs/APIPayPal.js";

class AdaptadorPayPal extends SistemaPago{
  constructor(){
    this.APIPayPal = new APIPayPal();
    this.APIPayPal.configurarAPI();
  }
  
  realizarPago(monto, email){
    this.APIPayPal.pagar({monto, email});
  }
}

export default AdaptadorPayPal;