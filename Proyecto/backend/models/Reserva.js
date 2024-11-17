class Reservacion{
  constructor(identificacionUsuarioC, identificacionEmpresaC, fechaReservaC, lugarC){
    this.IdentificacionUsuario = identificacionUsuarioC;
    this.IdentificacionEmpresa = identificacionEmpresaC;
    this.FechaReserva = fechaReservaC;
    this.Lugar = lugarC;
  }

  getReserva(){
    return {
      IdentificacionUsuario: this.IdentificacionUsuario,
      IdentificacionEmpresa: this.IdentificacionEmpresa,
      FechaReserva: this.FechaReserva,
      Lugar: this.Lugar
    }
  }
}

module.exports = Reservacion;