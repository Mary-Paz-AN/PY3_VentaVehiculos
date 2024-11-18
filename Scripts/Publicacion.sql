USE AutosUsados;
GO

-- Procedure para insertar los datos de la publicaci�n
CREATE PROCEDURE sp_crearP
	@idPublicacion INT OUTPUT,
    @placa VARCHAR(6),
    @marca VARCHAR(30),
    @modelo VARCHAR(30),
    @anio INT,
    @tipo VARCHAR(30),
    @motor VARCHAR(30),
    @sistemaSonido VARCHAR(30),
    @tablero VARCHAR(30),
    @cantidadPuertas INT,
    @estado INT,
    @asientos VARCHAR(45),
    @tapizado VARCHAR(25),
    @proxTraseros BIT,
    @proxDelanteros BIT,
    @proxLateral BIT,
    @camaraRetroceso BIT,
    @camara360 BIT,
    @traccion VARCHAR(10),
    @transmicion VARCHAR(30),
    @ventaElec BIT,
    @espeElec BIT,
    @largo REAL,
    @ancho REAL,
    @alto REAL,
    @cedula VARCHAR(12),
    @precio REAL,
    @negociable BIT,
    @recibeVehiculo BIT,
    @leasing BIT
AS
BEGIN
    BEGIN TRY
        -- Iniciar la transacci�n
        BEGIN TRANSACTION

        -- Insertar en Vehiculo
        INSERT INTO Vehiculo (
			Placa, 
			Marca, 
			Modelo, 
			Anio, 
			TipoVehiculo, 
			Motor, 
			SistemaSonido, 
			TipoTableroMando, 
			CantidadPuertas, 
			Estado)
        VALUES (
			@placa, 
			@marca, 
			@modelo, 
			@anio, 
			@tipo,
			@motor,
			@sistemaSonido, 
			@tablero, 
			@cantidadPuertas, 
			@estado);

        -- Insertar en Materiales
        INSERT INTO Materiales (
			Placa, 
			MaterialAsientos, 
			MaterialTapizado)
        VALUES (
			@placa, 
			@asientos, 
			@tapizado);

        -- Insertar en Sensores
        INSERT INTO Sensores (
			Placa, 
			ProximidadTraseros, 
			ProximidadDelanteros, 
			ProximidadLateral, 
			CamaraRetroceso, 
			Camara360)
        VALUES (
			@placa, 
			@proxTraseros, 
			@proxDelanteros, 
			@proxLateral, 
			@camaraRetroceso, 
			@camara360);

        -- Insertar en Mecanica
        INSERT INTO Mecanica (
			Placa, 
			Traccion, 
			TipoTransmicion, 
			VentanasElectricas, 
			EspejosElectricos)
        VALUES (
			@placa, 
			@traccion,
			@transmicion, 
			@ventaElec, 
			@espeElec);

        -- Insertar en Dimensiones
        INSERT INTO Dimensiones (
			Placa, 
			Largo, 
			Ancho, 
			Alto)
        VALUES (
			@placa, 
			@largo, 
			@ancho, 
			@alto);

        -- Insertar en Publicacion
        INSERT INTO Publicacion (
			NumeroCedula, 
			Placa, 
			PrecioColones, 
			PrecioNegociable, 
			RecibeVehiculoPago, 
			AsociadoALeasing)
        VALUES (
			@cedula, 
			@placa, 
			@precio, 
			@negociable, 
			@recibeVehiculo, 
			@leasing);

		--Conseguir el id de la insercci�n recien hecha
		SET @idPublicacion = SCOPE_IDENTITY();

        COMMIT TRANSACTION

    END TRY
    BEGIN CATCH
        -- Mostrar un error y realizar el rollback en caso de que ocurra un error en la insercci�n de datos
        ROLLBACK TRANSACTION
        DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT
        SELECT @ErrorMessage = ERROR_MESSAGE(), 
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE()
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState)
    END CATCH
END;
GO

-- Store procedure para insertar las fotos
CREATE PROCEDURE sp_fotosP
    @idPublicacion INT,
    @foto VARBINARY(MAX),
    @interna BIT
AS
BEGIN
    BEGIN TRY
        -- Iniciar la transacci�n
        BEGIN TRANSACTION;

        -- Insertar en Fotos
        INSERT INTO Fotos (
			IdPublicacion, 
			Imagen, 
			EsInterna)
        VALUES (
			@idPublicacion, 
			@foto, 
			@interna);

        COMMIT TRANSACTION;

    END TRY
    BEGIN CATCH
        -- Mostrar un error y realizar el rollback en caso de que ocurra un error en la insercci�n de datos
        DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
        SELECT @ErrorMessage = ERROR_MESSAGE(),
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE();
        ROLLBACK TRANSACTION;
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;
GO

-- Store procedure para modificar una publicacion
CREATE PROCEDURE sp_modiP
    @placa VARCHAR(6),
    @marca VARCHAR(30),
    @modelo VARCHAR(30),
    @anio INT,
    @tipo VARCHAR(30),
    @motor VARCHAR(30),
    @sistemaSonido VARCHAR(30),
    @tablero VARCHAR(30),
    @cantidadPuertas INT,
    @estado INT,
    @asientos VARCHAR(45),
    @tapizado VARCHAR(25),
    @proxTraseros BIT,
    @proxDelanteros BIT,
    @proxLateral BIT,
    @camaraRetroceso BIT,
    @camara360 BIT,
    @traccion VARCHAR(10),
    @transmicion VARCHAR(30),
    @ventaElec BIT,
    @espeElec BIT,
    @largo REAL,
    @ancho REAL,
    @alto REAL,
    @cedula VARCHAR(12),
    @precio REAL,
    @negociable BIT,
    @recibeVehiculo BIT,
    @leasing BIT
AS
BEGIN
    BEGIN TRY
        -- Iniciar la transacci�n
        BEGIN TRANSACTION;

        -- Actualizar Vehiculo
        UPDATE Vehiculo
        SET 
            Marca = @marca, 
            Modelo = @modelo, 
            Anio = @anio, 
            TipoVehiculo = @tipo, 
            Motor = @motor, 
            SistemaSonido = @sistemaSonido, 
            TipoTableroMando = @tablero, 
            CantidadPuertas = @cantidadPuertas, 
            Estado = @estado
        WHERE Placa = @placa;

        -- Actualizar Materiales
        UPDATE Materiales
        SET 
            MaterialAsientos = @asientos, 
            MaterialTapizado = @tapizado
        WHERE Placa = @placa;

        -- Actualizar Sensores
        UPDATE Sensores
        SET 
            ProximidadTraseros = @proxTraseros, 
            ProximidadDelanteros = @proxDelanteros, 
            ProximidadLateral = @proxLateral, 
            CamaraRetroceso = @camaraRetroceso, 
            Camara360 = @camara360
        WHERE Placa = @placa;

        -- Actualizar Mecanica
        UPDATE Mecanica
        SET 
            Traccion = @traccion, 
            TipoTransmicion = @transmicion, 
            VentanasElectricas = @ventaElec, 
            EspejosElectricos = @espeElec
        WHERE Placa = @placa;

        -- Actualizar Dimensiones
        UPDATE Dimensiones
        SET 
            Largo = @largo, 
            Ancho = @ancho, 
            Alto = @alto
        WHERE Placa = @placa;

        -- Actualizar Publicacion
        UPDATE Publicacion
        SET 
            NumeroCedula = @cedula, 
            PrecioColones = @precio, 
            PrecioNegociable = @negociable, 
            RecibeVehiculoPago = @recibeVehiculo, 
            AsociadoALeasing = @leasing
        WHERE Placa = @placa;

        -- Confirmar la transacci�n
        COMMIT TRANSACTION;

    END TRY
    BEGIN CATCH
        -- Mostrar un error y realizar el rollback en caso de que ocurra un error en la actualizaci�n de datos
        ROLLBACK TRANSACTION;
        DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
        SELECT @ErrorMessage = ERROR_MESSAGE(), 
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE();
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;
GO

-- Store procedure para modificar las fotos
CREATE PROCEDURE sp_modiFotosP
    @id INT,
    @foto VARBINARY(MAX)
AS
BEGIN
    BEGIN TRY
        -- Iniciar la transacci�n
        BEGIN TRANSACTION;

        -- Actualizar Fotos
        UPDATE Fotos
        SET 
            Imagen = @foto
        WHERE ID = @id;

        COMMIT TRANSACTION;

    END TRY
    BEGIN CATCH
        -- Mostrar un error y realizar el rollback en caso de que ocurra un error en la insercci�n de datos
        DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
        SELECT @ErrorMessage = ERROR_MESSAGE(),
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE();
        ROLLBACK TRANSACTION;
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;
GO
--- View para las fotos
CREATE VIEW vw_fotos AS
SELECT 
	ID AS id,
	Imagen AS foto,
	IdPublicacion
FROM Fotos;
GO

--Store procedure para buscar las fotos de una publicaci�n
CREATE PROCEDURE sp_fotos
	@id INT
AS
BEGIN
	SELECT
		id,
		foto
	FROM vw_fotos
	WHERE IdPublicacion = @id;
END;
GO

-- Store procedure para eliminar una publicaci�n
CREATE PROCEDURE sp_eliminarP
	@id INT
AS
BEGIN
    BEGIN TRY
        -- Iniciar la transacci�n
        BEGIN TRANSACTION;

        -- Eliminar Fotos
        DELETE FROM Fotos WHERE IdPublicacion = @id;

		-- Eliminar Publicacion
		DELETE FROM Publicacion WHERE IdPublicacion = @id;

        COMMIT TRANSACTION;

    END TRY
    BEGIN CATCH
        -- Mostrar un error y realizar el rollback en caso de que ocurra un error en la insercci�n de datos
        DECLARE @ErrorMessage NVARCHAR(4000), @ErrorSeverity INT, @ErrorState INT;
        SELECT @ErrorMessage = ERROR_MESSAGE(),
               @ErrorSeverity = ERROR_SEVERITY(),
               @ErrorState = ERROR_STATE();
        ROLLBACK TRANSACTION;
        RAISERROR (@ErrorMessage, @ErrorSeverity, @ErrorState);
    END CATCH
END;
GO

-- View para ver la informaci�n de una publicaci�n
CREATE VIEW vw_publicacion AS
SELECT 
	P.IdPublicacion AS id,
	P.NumeroCedula AS cedula,
	P.PrecioColones AS precio,
	P.PrecioNegociable AS negociable,
	P.RecibeVehiculoPago AS recibeVehiculo,
	P.AsociadoALeasing AS leasing,
	P.FechaPublicacion AS fechaPublicacion,
	P.FechaEdicion AS fechaModificacion,
	V.Placa AS placa,
	V.Marca AS marca,
	V.Modelo AS modelo,
	v.Anio AS anio,
	V.TipoVehiculo AS tipo,
	V.SistemaSonido AS sistemaSonido,
	V.TipoTableroMando AS tablero,
	V.CantidadPuertas AS cantidadPuertas,
	V.Estado AS estado,
	MA.MaterialAsientos AS asientos,
	MA.MaterialTapizado AS tapizado,
	S.ProximidadTraseros AS sensorTrasero,
	S.ProximidadDelanteros AS sensorDelantero,
	S.ProximidadLateral AS sensorLateral,
	S.CamaraRetroceso AS camaraRetroceso,
	S.Camara360 AS camara360,
	M.Traccion AS traccion,
	M.VentanasElectricas AS vidriosElec,
	M.EspejosElectricos AS espejosElec,
	M.TipoTransmicion AS transmision,
	D.Largo AS largo,
	D.Alto AS alto,
	D.Ancho AS ancho
FROM Publicacion AS P
INNER JOIN Vehiculo AS V ON P.Placa = V.Placa
INNER JOIN Materiales AS MA ON V.Placa = MA.Placa
INNER JOIN Sensores AS S ON V.Placa = S.Placa
INNER JOIN Mecanica AS M ON V.Placa = M.Placa
INNER JOIn Dimensiones AS D ON V.Placa = D.Placa
GO

--Store Procedure para conseguir la informaci�n dependiedo del id de la publicaci�n
CREATE PROCEDURE sp_publicacion 
	@idPublicacion INT
AS
BEGIN
	SELECT 
		id,
		cedula,
		precio,
		negociable,
		recibeVehiculo,
		leasing,
		fechaPublicacion,
		fechaModificacion,
		placa,
		marca,
		modelo,
		anio,
		tipo,
		sistemaSonido,
		tablero,
		cantidadPuertas,
		estado,
		asientos,
		tapizado,
		sensorTrasero,
		sensorDelantero,
		sensorLateral,
		camaraRetroceso,
		camara360,
		traccion,
		vidriosElec,
		espejosElec,
		transmision,
		largo,
		alto,
		ancho
	FROM vw_publicacion
	WHERE id = @idPublicacion;
END;
GO

-- View para conseguir las publicaciones de un usuario
CREATE VIEW vw_misPublicaciones AS
SELECT 
	P.IdPublicacion AS id,
	P.NumeroCedula AS cedula,
	P.PrecioColones AS precio,
	V.Placa AS placa,
	V.Marca AS marca,
	V.Modelo AS modelo,
	v.Anio AS anio,
	V.TipoVehiculo AS tipo,
	F.Imagen AS foto
FROM Publicacion AS P
INNER JOIN Vehiculo AS V ON P.Placa = V.Placa
CROSS APPLY (
    SELECT TOP 1 Imagen 
    FROM Fotos AS F 
    WHERE F.IdPublicacion = P.IdPublicacion
	ORDER BY F.EsInterna DESC
) AS F;
GO

-- Procedure para buscar las publicaciones de un usuario
CREATE PROCEDURE sp_misPublicaciones 
	@cedula VARCHAR(12)
AS
BEGIN 
	SELECT 
	id,
	cedula,
	precio,
	placa,
	marca,
	modelo,
	anio,
	tipo,
	foto
	FROM vw_misPublicaciones 
	WHERE cedula = @cedula;
END;
GO


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
