USE AutosUsados;

GO
ALTER PROCEDURE FiltrarPublicaciones
    @marca VARCHAR(30) = NULL,
    @modelo VARCHAR(30) = NULL,
    @anio INT = NULL,
    @precioMin INT = NULL,
    @precioMax INT = NULL,
    @negociable BIT = NULL,
    @aceptaVehiculos BIT = NULL,
    @transmisionTipo VARCHAR(30) = NULL,
    @puertas INT = NULL,
    @largoMin FLOAT = NULL,
    @largoMax FLOAT = NULL,
    @anchoMin FLOAT = NULL,
    @anchoMax FLOAT = NULL,
    @altoMin FLOAT = NULL,
    @altoMax FLOAT = NULL,
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
    @tapizado VARCHAR(30) = NULL,
    @sonido VARCHAR(30) = NULL,
    @estadoVehiculo INT = NULL,
    @leasing BIT = NULL
AS
BEGIN
    -- Consulta principal
    SELECT 
        P.placa AS id,
        P.marca,
        P.modelo,
        P.precio
    FROM 
        vw_publicacion AS P
    WHERE
        -- Filtros dinámicos
        (@marca IS NULL OR @marca = '' OR P.marca LIKE '%' + @marca + '%') AND
		(@modelo IS NULL OR @modelo = '' OR P.modelo LIKE '%' + @modelo + '%') AND
		(@anio IS NULL OR @anio = 0 OR P.anio = @anio) AND
		(@precioMin IS NULL OR @precioMin = 0 OR P.precio >= @precioMin) AND
		(@precioMax IS NULL OR @precioMax = 0 OR P.precio <= @precioMax) AND
		(@negociable IS NULL OR @negociable = 0 OR P.negociable = @negociable) AND
		(@aceptaVehiculos IS NULL OR @aceptaVehiculos = 0 OR P.recibeVehiculo = @aceptaVehiculos) AND
		(@transmisionTipo IS NULL OR @transmisionTipo = '' OR P.transmision = @transmisionTipo) AND
		(@puertas IS NULL OR @puertas = 0 OR P.cantidadPuertas = @puertas) AND
		(@largoMin IS NULL OR @largoMin = 0 OR P.largo >= @largoMin) AND
		(@largoMax IS NULL OR @largoMax = 0 OR P.largo <= @largoMax) AND
		(@anchoMin IS NULL OR @anchoMin = 0 OR P.ancho >= @anchoMin) AND
		(@anchoMax IS NULL OR @anchoMax = 0 OR P.ancho <= @anchoMax) AND
		(@altoMin IS NULL OR @altoMin = 0 OR P.alto >= @altoMin) AND
		(@altoMax IS NULL OR @altoMax = 0 OR P.alto <= @altoMax) AND
		(@materialAsientos IS NULL OR @materialAsientos = '' OR P.asientos = @materialAsientos) AND
		(@motor IS NULL OR @motor = '' OR P.motor = @motor) AND
		(@vidriosElectricos IS NULL OR @vidriosElectricos = 0 OR P.vidriosElec = @vidriosElectricos) AND
		(@espejosElectricos IS NULL OR @espejosElectricos = 0 OR P.espejosElec = @espejosElectricos) AND
		(@sensoresTraseros IS NULL OR @sensoresTraseros = 0 OR P.sensorTrasero = @sensoresTraseros) AND
		(@sensoresDelanteros IS NULL OR @sensoresDelanteros = 0 OR P.sensorDelantero = @sensoresDelanteros) AND
		(@camaraRetroceso IS NULL OR @camaraRetroceso = 0 OR P.camaraRetroceso = @camaraRetroceso) AND
		(@camara360 IS NULL OR @camara360 = 0 OR P.camara360 = @camara360) AND
		(@sensoresLaterales IS NULL OR @sensoresLaterales = 0 OR P.sensorLateral = @sensoresLaterales) AND
		(@tablero IS NULL OR @tablero = '' OR P.tablero = @tablero) AND
		(@tapizado IS NULL OR @tapizado = '' OR P.tapizado = @tapizado) AND
		(@sonido IS NULL OR @sonido = '' OR P.sistemaSonido = @sonido) AND
		(@estadoVehiculo IS NULL OR @estadoVehiculo = 0 OR P.estado = @estadoVehiculo) AND
		(@leasing IS NULL OR @leasing = 0 OR P.leasing = @leasing)
END;


GO

CREATE PROCEDURE MostrarInformacionAuto
@placa VARCHAR(6) = NULL
AS
BEGIN
	SELECT
		P.marca,
		P.modelo,
		P.anio,
		P.placa,
		P.precio,
		P.negociable,
		P.recibeVehiculo,
		P.sensorTrasero,
		P.sensorDelantero,
		P.camaraRetroceso,
		P.camara360,
		P.sensorLateral,
		P.tablero,
		P.traccion,
		P.cantidadPuertas,
		P.largo,
		P.ancho,
		P.alto,
		P.asientos,
		P.motor,
		P.vidriosElec,
		P.espejosElec,
		P.transmision,
		P.tapizado,
		P.estado,
		P.leasing
	FROM
		vw_publicacion AS P
	WHERE
		P.placa = @placa
END;