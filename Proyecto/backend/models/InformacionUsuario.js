// Clase deinformació del Uusario

class InformacionUsuario {

    constructor(cedulaC, tipoIdentificacionC, nombreC, apellido1C, apellido2C, nacionalidadC, fechaNacimientoC, telefonoC) {
        this.cedula = cedulaC;
        this. tipoIdentificacion = tipoIdentificacionC;
        this.nombre = nombreC;
        this.apellido1 = apellido1C;
        this.apellido2 = apellido2C;
        this.nacionalidad = nacionalidadC;
        this.fechaNacimiento = fechaNacimientoC;
        this.telefono = telefonoC;
    }


    // Método que devuelve un objeto de lso atributos de la clase
    getInfo() {
        const info = {
            cedula: this.cedula,
            tipoIdentificacion: this.tipoIdentificacion,
            nombre: this.nombre,
            apellido1: this.apellido1,
            apellido2: this.apellido2,
            nacionalidad: this.nacionalidad,
            fechaNacimiento: this.fechaNacimiento,
            telefono: this.telefono
        };

        return info;
    }
}

export default InformacionUsuario;