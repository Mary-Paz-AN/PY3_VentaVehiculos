USE AutosUsados;

GO
CREATE PROCEDURE FiltrarPublicaciones
    @marca VARCHAR(30) = NULL,
    @modelo VARCHAR(30) = NULL,
    @anio INT = NULL,
    @placa VARCHAR(6) = NULL,
    @precio INT = NULL,
    @negociable BIT = NULL,
    @aceptaVehiculos BIT = NULL,
    @transmisionTipo VARCHAR(30) = NULL,
    @puertas INT = NULL,
    @largo REAL = NULL,
    @ancho REAL = NULL,
    @alto REAL = NULL,
    @materialAsientos VARCHAR(45) = NULL,
    @motor VARCHAR(30) = NULL,
    @vidriosElectricos BIT = NULL,
    @espejosElectricos BIT = NULL,
    @sensoresTraseros BIT = NULL,
    @sensoresDelanteros BIT = NULL,
    @camaraRetroceso BIT = NULL,
    @camara360 BIT = NULL,
    @sensoresLaterales BIT = NULL,
    @tablero VARCHAR(30) = NULL,
    @tipoTransmision VARCHAR(30) = NULL,
    @tapizado VARCHAR(30) = NULL,
    @sonido VARCHAR(30) = NULL,
    @estadoVehiculo INT = NULL,
    @leasing BIT = NULL
AS
BEGIN
    WITH FotosConPrioridad AS (
        SELECT 
            F.IdPublicacion,
            F.foto,
            ROW_NUMBER() OVER (PARTITION BY F.IdPublicacion ORDER BY F.Id ASC) AS RowNum
        FROM vw_fotos AS F
    ),
    PublicacionesConFotoUnica AS (
        SELECT
            P.placa,
            P.marca,
            P.modelo,
            F.foto
        FROM vw_publicacion AS P
        INNER JOIN FotosConPrioridad AS F
            ON P.id = F.IdPublicacion AND F.RowNum = 1
        WHERE
            (@marca IS NULL OR P.marca = @marca) AND
            (@modelo IS NULL OR P.modelo = @modelo) AND
            (@anio IS NULL OR P.anio = @anio) AND
            (@placa IS NULL OR P.placa = @placa) AND
            (@precio IS NULL OR P.precio = @precio) AND
            (@negociable IS NULL OR P.negociable = @negociable) AND
            (@aceptaVehiculos IS NULL OR P.recibeVehiculo = @aceptaVehiculos) AND
            (@transmisionTipo IS NULL OR P.transmision = @transmisionTipo) AND
            (@puertas IS NULL OR P.cantidadPuertas = @puertas) AND
            (@largo IS NULL OR P.largo = @largo) AND 
            (@ancho IS NULL OR P.ancho = @ancho) AND
            (@alto IS NULL OR P.alto = @alto) AND
            (@materialAsientos IS NULL OR P.asientos = @materialAsientos) AND
            (@motor IS NULL OR P.motor = @motor) AND
            (@vidriosElectricos IS NULL OR P.vidriosElec = @vidriosElectricos) AND
            (@espejosElectricos IS NULL OR P.espejosElec = @espejosElectricos) AND
            (@sensoresTraseros IS NULL OR P.sensorTrasero = @sensoresTraseros) AND
            (@sensoresDelanteros IS NULL OR P.sensorDelantero = @sensoresDelanteros) AND
            (@camaraRetroceso IS NULL OR P.camaraRetroceso = @camaraRetroceso) AND
            (@camara360 IS NULL OR P.camara360 = @camara360) AND
            (@sensoresLaterales IS NULL OR P.sensorLateral = @sensoresLaterales) AND
            (@tablero IS NULL OR P.tablero = @tablero) AND
            (@tapizado IS NULL OR P.tapizado = @tapizado) AND
            (@sonido IS NULL OR P.sistemaSonido = @sonido) AND
            (@estadoVehiculo IS NULL OR P.estado = @estadoVehiculo) AND
            (@leasing IS NULL OR P.leasing = @leasing)
    )
    SELECT *
    FROM PublicacionesConFotoUnica;
END;

GO