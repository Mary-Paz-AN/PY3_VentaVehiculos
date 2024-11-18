USE AutosUsados;

GO
CREATE PROCEDURE AgregarReservacion
@IdReservacion	INT = NULL,
@IdentificadorUsuario VARCHAR(12) = NULL,
@IdentificadorEmpresa VARCHAR(12) = NULL,
@FechaDeVisita DATETIMEOFFSET(2) = NULL,
@Lugar VARCHAR(25) = NULL
AS
BEGIN
	INSERT
		Reservacion(IdReservacion,
		IdentificadorUsuario,
		IdentificadorEmpresa,
		FechaDeVisita,
		Lugar)
	VALUES
		(
		@IdReservacion,
		@IdentificadorUsuario,
		@IdentificadorEmpresa,
		@FechaDeVisita,
		@Lugar)
END