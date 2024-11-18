// Creación de la clase Sensor

class Sensor {

    constructor(proximidadTraserosC, proximidadDelanterosC, proximidadLateralC, camaraRetrocesoC, camara360C) {
        this.sensorTrasero = proximidadTraserosC;
        this.sensorDelantero = proximidadDelanterosC;
        this.sensorLateral = proximidadLateralC;
        this.camaraRetroceso = camaraRetrocesoC;
        this.camara360 = camara360C;
    }

    //Método para conseguir los aributos por medio de un objeto
    getSensor() {
        const sensor = {
            sensorTrasero: this.sensorTrasero,
            sensorDelantero: this.sensorDelantero,
            sensorLateral: this.sensorLateral,
            camaraRetroceso: this.camaraRetroceso,
            camara360: this.camara360
        }

        return sensor;
    }

    setDatosSensor(data) {
        this.sensorTrasero = data.sensorTrasero;
        this.sensorDelantero = data.sensorDelantero;
        this.sensorLateral = data.sensorLateral;
        this.camaraRetroceso = data.camaraRetroceso;
        this.camara360 = data.camara360;
    }

    //Método para clonar los sensores
    clonar() {
        return new Sensor(
            this.sensorTrasero,
            this.sensorDelantero,
            this.sensorLateral,
            this.camaraRetroceso,
            this.camara360
        );
    }

}

export default Sensor;
