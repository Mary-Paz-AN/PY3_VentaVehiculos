import InformacionUsuario from './InformacionUsuario'; 
import Direccion from './Direccion';

// Creación de la clase Usuario
class Usuario {

    constructor(usuarioC, correoC, contrasenaC)  {
        this.usuario = usuarioC;
        this.correo = correoC;
        this.contrasena = contrasenaC;
    }

    //Método para asignar la informacion del usuario
    setInfoUsuario(cedula, tipoIdentificacion, nombre, apellido1, apellido2, nacionalidad, fechaNacimiento, telefono) {
        this.infoUsuario = new InformacionUsuario(cedula, tipoIdentificacion, nombre, apellido1, apellido2, nacionalidad, fechaNacimiento, telefono);
    }

    //Método para asignar la dirección del usuario
    setDirrecion(provincia, canton, distrito) {
        this.direccion = new Direccion(provincia, canton, distrito);
    }


    // Método que devuelve un onjeto con la todo la información del usuario
    getUsuario() {
        const infoUsuario = this.infoUsuario.getInfo();
        const direccion = this.direccion.getDireccion();

        const usuario = {
            usuario: this.usuario,
            correo: this.correo,
            contrasena: this.contrasena,
            cedula: infoUsuario.cedula,
            tipoIdentificacion: infoUsuario.tipoIdentificacion,
            nombre: infoUsuario.nombre,
            apellido1: infoUsuario.apellido1,
            apellido2: infoUsuario.apellido2,
            nacionalidad: infoUsuario.nacionalidad,
            fechaNacimiento: infoUsuario.fechaNacimiento,
            telefono: infoUsuario.telefono,
            provincia: direccion.provincia,
            canton: direccion.canton, 
            distrito: direccion.distrito
        };

        return usuario;
    }
}

export default Usuario;