// Clase distrito

class Direccion {

    constructor(provinciaC, cantonC, distritoC) {
        this.provincia = provinciaC;
        this.canton = cantonC;
        this.distrito = distritoC;
    }

    // Método que devuelve un objeto con los atributos
    getDireccion() {
        const direccion = {
            provincia: this.provincia, 
            canton: this.canton, 
            distrito: this.distrito
        };

        return direccion;
    }
}

export default Direccion;