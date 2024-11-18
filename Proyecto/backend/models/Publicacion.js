//Relación con Vehiculo
const Vehiculo = require('./Vehiculo');

// Creación de la clase
class Publicacion {

    constructor(identificacionUsuarioC, precioColonesC, precioNegociableC, recibeVehiculoC, asociadoLeasingC, fotosInternasC, fotosExternasC) {
        this.cedula = identificacionUsuarioC;
        this.precio = precioColonesC;
        this.negociable = precioNegociableC;
        this.recibeVehiculo = recibeVehiculoC;
        this.leasing = asociadoLeasingC;
        this.fotosInternas = fotosInternasC;
        this.fotosExternas = fotosExternasC;
    }

    //Métodos para la creación de un vehiculo
    setInfoVehiculo(placa, marca, modelo, anio, tipoVehiculo, motor, sistemaSonido, tipoTablero, cantidadPuertas, estado) {
        this.vehiculo  = new Vehiculo(placa, marca, modelo, anio, tipoVehiculo, motor, sistemaSonido, tipoTablero, cantidadPuertas, estado);
    }

    setMaterial(materialAsiento, materialTapizado) {
        this.vehiculo.addMateriales(materialAsiento, materialTapizado);
    }

    setSensores(proximidadTraseros, proximidadDelanteros, proximidadLateral, camaraRetroceso, camara360) {
        this.vehiculo.addSensores(proximidadTraseros, proximidadDelanteros, proximidadLateral, camaraRetroceso, camara360);
    }

    setMecanica(traccion, tipoTransmicion, ventanasElectricas, espejosElectricos) {
        this.vehiculo.addCaractMecanicas(traccion, tipoTransmicion, ventanasElectricas, espejosElectricos);
    }

    setDimensiones(largo, ancho, alto) {
        this.vehiculo.addDimensiones(largo, ancho, alto);
    }

    //Método paraconseguir todo los atributos de la publicacion en un objeto
    getPublicacion() {
        const vehiculo = this.vehiculo.getInfo();

        const publicacion = {
            cedulaUsuario: this.cedula,
            placa: vehiculo.placa,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            anio: vehiculo.anio,
            tipo: vehiculo.tipo,
            motor: vehiculo.motor,
            sistemaSonido: vehiculo.sistemaSonido,
            tablero: vehiculo.tablero,
            cantidadPuertas: vehiculo.cantidadPuertas,
            estado: vehiculo.estado,
            asientos: vehiculo.asientos,
            tapizado: vehiculo.tapizado,
            sensorTrasero: vehiculo.sensorTrasero,
            sensorDelantero: vehiculo.sensorDelantero,
            sensorLateral: vehiculo.sensorLateral,
            camaraRetroceso: vehiculo.camaraRetroceso,
            camara360: vehiculo.camara360,
            traccion: vehiculo.traccion,
            vidriosElec: vehiculo.vidriosElec,
            espejosElec: vehiculo.espejosElec,
            transmision: vehiculo.transmision,
            largo: vehiculo.largo,
            alto: vehiculo.alto,
            ancho: vehiculo.ancho,
            precio: this.precio,
            negociable: this.negociable,
            recibeVehiculo: this.recibeVehiculo,
            leasing: this.leasing,
            fotosInternas: this.fotosInternas,
            fotosExternas: this.fotosExternas
        }

        return publicacion;
    }

    setDatosPublicacion(data) {
        this.cedula = data.cedula;
        this.precio = data.precio;
        this.negociable = data.negociable;
        this.recibeVehiculo = data.recibeVehiculo;
        this.leasing = data.leasing;
        this.fotosInternas = data.fotosInternas;
        this.fotosExternas = data.fotosExternas;

        if (this.vehiculo) {
            this.vehiculo.setDatosVehiculo(data);
        }
    }

    clonar() {
        const nuevaPublicacion =  new Publicacion(
            this.cedula,
            this.precio,
            this.negociable,
            this.recibeVehiculo,
            this.leasing,
            this.fotosInternas,
            this.fotosExternas
        )

        // Clonar vehiculo
        if (this.vehiculo) {
            nuevaPublicacion.vehiculo = this.vehiculo.clonar();
        }

        return nuevaPublicacion;
    }
}

module.exports = Publicacion;