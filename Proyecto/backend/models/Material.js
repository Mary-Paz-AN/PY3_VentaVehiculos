// Creación de la clase Material

class Material {
    
    constructor(materialAsientoC, materialTapizadoC) {
        this.asientos = materialAsientoC;
        this.tapizado = materialTapizadoC;
    }

    //Método para conseguir los atributos por medio de un objeto
    getMaterial() {
        const material = {
            asientos: this.asientos,
            tapizado: this.tapizado
        }

        return material;
    }

    setDatosMaterial(data) {
        this.asientos = data.asientos;
        this.tapizado = data.tapizado;
    }

    //Método para clonar los materiales
    clonar() {
        return new Material(this.asientos, this.tapizado);
    }

}

export default Material;