USE AutosUsados;

GO
CREATE PROCEDURE AgregarReservacion
    @IdentificadorUsuario VARCHAR(12),
    @IdentificadorEmpresa VARCHAR(12),
    @FechaDeVisita DATETIMEOFFSET(2),
    @Lugar VARCHAR(25)
AS
BEGIN
    SET NOCOUNT ON;

    -- Generar el próximo ID
    DECLARE @NuevoId INT;

    SELECT @NuevoId = ISNULL(MAX(IdReservacion), 0) + 1
    FROM Reservacion;

	PRINT @NuevoId

    -- Insertar los datos
    INSERT INTO Reservacion (IdReservacion, IdentificadorUsuario, IdentificadorEmpresa, FechaDeVisita, Lugar)
    VALUES (@NuevoId, @IdentificadorUsuario, @IdentificadorEmpresa, @FechaDeVisita, @Lugar);
END;

SELECT * FROM Reservacion