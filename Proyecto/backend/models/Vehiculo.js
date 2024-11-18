// Clases relacionadas
import Material from './Material';
import Sensor from './Sensor';
import Mecanica from './Mecanica';
import Dimension from './Dimension';

// Creación de la clase Vehiculo
class Vehiculo {

    constructor(placaC, marcaC, modeloC, anioC, tipoVehiculoC, motorC, sistemaSonidoC, tipoTableroC, cantidadPuertasC, estadoC) {
        this.placa = placaC;
        this.marca = marcaC;
        this.modelo = modeloC;
        this.anio = anioC;
        this.tipo = tipoVehiculoC;
        this.motor = motorC;
        this.sistemaSonido = sistemaSonidoC;
        this.tablero = tipoTableroC;
        this.cantidadPuertas = cantidadPuertasC;
        this.estado = estadoC
    }

    //Método para añadir la información sobre los materiales
    addMateriales(materialAsiento, materialTapizado) {
        this.material = new Material(materialAsiento, materialTapizado);
    }

    //Método para añadir información sobre los sensores
    addSensores(proximidadTraseros, proximidadDelanteros, proximidadLateral, camaraRetroceso, camara360) {
        this.sensor = new Sensor(proximidadTraseros, proximidadDelanteros, proximidadLateral, camaraRetroceso, camara360);
    }

    //Método para añadir las caractaeristicas mecanicas
    addCaractMecanicas(traccion, tipoTransmicion, ventanasElectricas, espejosElectricos) {
        this.mecanica = new Mecanica(traccion, tipoTransmicion, ventanasElectricas, espejosElectricos);
    }

    //Método para añdir las dimensiones
    addDimensiones(largo, ancho, alto) {
        this.dimension = new Dimension(largo, ancho, alto);
    }

    //Método para conseguir toda la información del vehiculo en forma de objeto
    getInfo() {
        const material = this.material.getMaterial();
        const sensor = this.sensor.getSensor();
        const mecanica = this.mecanica.getMecanica();
        const dimension = this.dimension.getDimension();

        const vehiculo = {
            placa: this.placa,
            marca: this.marca,
            modelo: this.modelo,
            anio: this.anio,
            tipo: this.tipo,
            motor: this.motor,
            sistemaSonido: this.sistemaSonido,
            tablero: this.tablero,
            cantidadPuertas: this.cantidadPuertas,
            estado: this.estado,
            asientos: material.asientos,
            tapizado: material.tapizado,
            sensorTrasero: sensor.sensorTrasero,
            sensorDelantero: sensor.sensorDelantero,
            sensorLateral: sensor.sensorLateral,
            camaraRetroceso: sensor.camaraRetroceso,
            camara360: sensor.camara360,
            traccion: mecanica.traccion,
            vidriosElec: mecanica.vidriosElec,
            espejosElec: mecanica.espejosElec,
            transmision: mecanica.transmision,
            largo: dimension.largo,
            alto: dimension.largo,
            ancho: dimension.ancho,
        }

        return vehiculo;
    }

    setDatosVehiculo(data) {
        this.vehiculo.placa = data.placa;
        this.vehiculo.marca = data.marca;
        this.vehiculo.modelo = data.modelo;
        this.vehiculo.anio = data.anio;
        this.vehiculo.tipo = data.tipo;
        this.vehiculo.motor = data.motor;
        this.vehiculo.sistemaSonido = data.sistemaSonido;
        this.vehiculo.tablero = data.tablero;
        this.vehiculo.cantidadPuertas = data.cantidadPuertas;
        this.vehiculo.estado = data.estado;

        if (this.material) {
            this.material.setDatosMaterial();
        }

        if (this.sensor) {
            this.sensor.setDatosSensor();
        }

        if (this.mecanica) {
            this.mecanica.setDatosMecanica();
        }

        if (this.dimension) {
            this.dimension.setDatosDimension();
        }
    }

    //Método para clonar vehiculo
    clonar() {
        const nuevoVehiculo = new Vehiculo(
            this.placa,
            this.marca,
            this.modelo,
            this.anio,
            this.tipo,
            this.motor,
            this.sistemaSonido,
            this.tablero,
            this.cantidadPuertas,
            this.estado
        );

        //Clonar sus otros atributos
        if (this.material) {
            nuevoVehiculo.material = this.material.clonar();
        }

        if (this.sensor) {
            nuevoVehiculo.sensor = this.sensor.clonar();
        }

        if (this.mecanica) {
            nuevoVehiculo.mecanica = this.mecanica.clonar();
        }

        if (this.dimension) {
            nuevoVehiculo.dimension = this.dimension.clonar();
        }

        return nuevoVehiculo
    }
}

export default Vehiculo;