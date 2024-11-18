// Creación de la clase Dimension

class Dimension {

    constructor(largoC, anchoC, altoC) {
        this.largo = largoC;
        this.ancho = anchoC;
        this.alto = altoC;
    }

    //Método par aconseguir los atributos por medio de un objeto
    getDimension() {
        const dimension = {
            largo: this.largo,
            ancho: this.ancho,
            alto: this.alto,
        }

        return dimension;
    }

    setDatosDimension(data) {
        this.largo = data.largo;
        this.ancho = data.ancho;
        this.alto = data.alto;
    }

    //Método para clonar las dimensiones
    clonar() {
        return new Dimension(this.largo, this.ancho, this.alto);
    }

}

module.exports = Dimension;