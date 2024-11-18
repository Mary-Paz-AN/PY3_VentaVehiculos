// Creación de la clase Mecanica
class Mecanica {

    constructor(traccionC, tipoTransmicionC, ventanasElectricasC, espejosElectricosC) {
        this.traccion = traccionC;
        this.transmision = tipoTransmicionC;
        this.vidriosElec = ventanasElectricasC;
        this.espejosElec = espejosElectricosC;
    }

    //Método para conseguir los atributos por medio de un objeto
    getMecanica() {
        const mecanica = {
            traccion: this.traccion,
            transmision: this.transmision,
            vidriosElec: this.vidriosElec,
            espejosElec: this.espejosElec
        }

        return mecanica;
    }

    setDatosMecanica(data) {
        this.traccion = data.traccion;
        this.transmision = data.transmision;
        this.vidriosElec = data.vidriosElec;
        this.espejosElec = data.espejosElec;
    }

    //Método para clonar Mecanica
    clonar() {
        return new Mecanica(
            this.traccion,
            this.transmision,
            this.vidriosElec,
            this.espejosElec
        );
    }
}

export default Mecanica;