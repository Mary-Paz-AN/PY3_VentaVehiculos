USE AutosUsados;

GO
CREATE PROCEDURE FiltrarDatosVehiculos
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
    SELECT 
        *
    FROM 
        Vehiculo V
    INNER JOIN 
		Publicacion P ON V.Placa = P.Placa
    LEFT JOIN 
		Materiales MT ON V.Placa = MT.Placa
    LEFT JOIN 
		Sensores S ON V.Placa = S.Placa
    LEFT JOIN 
		Mecanica M ON V.Placa = M.Placa
    LEFT JOIN 
		Dimensiones D ON V.Placa = D.Placa
    WHERE
        (@marca IS NULL OR V.Marca = @marca) AND
        (@modelo IS NULL OR V.Modelo = @modelo) AND
        (@anio IS NULL OR V.Anio = @anio) AND
        (@placa IS NULL OR V.Placa = @placa) AND
        (@precio IS NULL OR P.PrecioColones = @precio) AND
        (@negociable IS NULL OR P.PrecioNegociable = @negociable) AND
        (@aceptaVehiculos IS NULL OR P.RecibeVehiculoPago = @aceptaVehiculos) AND
        (@transmisionTipo IS NULL OR M.TipoTransmicion = @transmisionTipo) AND
        (@puertas IS NULL OR V.CantidadPuertas = @puertas) AND
        (@largo IS NULL OR D.Largo = @largo) AND
        (@ancho IS NULL OR D.Ancho = @ancho) AND
        (@alto IS NULL OR D.Alto = @alto) AND
        (@materialAsientos IS NULL OR MT.MaterialAsientos = @materialAsientos) AND
        (@motor IS NULL OR V.Motor = @motor) AND
        (@vidriosElectricos IS NULL OR M.VentanasElectricas = @vidriosElectricos) AND
        (@espejosElectricos IS NULL OR M.EspejosElectricos = @espejosElectricos) AND
        (@sensoresTraseros IS NULL OR S.ProximidadTraseros = @sensoresTraseros) AND
        (@sensoresDelanteros IS NULL OR S.ProximidadDelanteros = @sensoresDelanteros) AND
        (@camaraRetroceso IS NULL OR S.CamaraRetroceso = @camaraRetroceso) AND
        (@camara360 IS NULL OR S.Camara360 = @camara360) AND
        (@sensoresLaterales IS NULL OR S.ProximidadLateral = @sensoresLaterales) AND
        (@tablero IS NULL OR V.TipoTableroMando = @tablero) AND
        (@tipoTransmision IS NULL OR M.TipoTransmicion = @tipoTransmision) AND
        (@tapizado IS NULL OR MT.MaterialTapizado = @tapizado) AND
        (@sonido IS NULL OR V.SistemaSonido = @sonido) AND
        (@estadoVehiculo IS NULL OR V.Estado = @estadoVehiculo) AND
        (@leasing IS NULL OR P.AsociadoALeasing = @leasing);
END;
GO
