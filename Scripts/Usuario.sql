USE AutosUsados;
GO

-- Store procedure para iniciar sesion con usuario
CREATE PROCEDURE sp_IniciarSesionUsuario
	@usuario VARCHAR(45),
	@contrasena VARCHAR(15)
AS
BEGIN
    SELECT U.NumeroCedula
    FROM Usuario AS U
    WHERE U.Usuario = @usuario AND U.Contrasena = @contrasena;
END;
GO

--Store procedure par ainicir sesion con correo
CREATE PROCEDURE sp_IniciarSesionCorreo
	@correo VARCHAR(45),
	@contrasena VARCHAR(15)
AS
BEGIN
    SELECT U.NumeroCedula
    FROM Usuario AS U
    INNER JOIN InformacionContacto AS I ON U.NumeroCedula = I.NumeroCedula
    WHERE I.CorreoElectronico = @correo AND U.Contrasena = @contrasena;
END;
GO

-- Store procedure para crear un usuario
CREATE PROCEDURE sp_CrearUsuario
	@cedula VARCHAR(12),
    @usuario VARCHAR(45),
	@contrasena VARCHAR(15),
    @tipoIdentificacion VARCHAR(45),
    @nombre VARCHAR(45),
	@apellido1 VARCHAR(45),
    @apellido2 VARCHAR(45),
    @nacionalidad VARCHAR(45),
	@fechaNacimiento DATE,
    @correo VARCHAR(45),
    @telefono VARCHAR(10),
	@provincia VARCHAR(30),
    @canton VARCHAR(30),
    @distrito VARCHAR(30)
AS
BEGIN
    BEGIN TRY
        -- Insertar a Usuario
        INSERT INTO Usuario (
            NumeroCedula, 
            Usuario, 
            Contrasena, 
            TipoIdentificacion, 
            Nombre, 
            ApellidoUno, 
            ApellidoDos, 
            Nacionalidad, 
            FechaNacimiento
        ) 
        VALUES (
            @cedula,
            @usuario,
            @contrasena,
            @tipoIdentificacion,
            @nombre,
            @apellido1,
            @apellido2,
            @nacionalidad,
            @fechaNacimiento
        );

        -- Insertar a InformacionContacto
        INSERT INTO InformacionContacto (
            NumeroCedula, 
            CorreoElectronico, 
            Telefono
        ) 
        VALUES (
            @cedula,
            @correo,
            @telefono
        );

        -- Insertar a Direccion
        INSERT INTO Direccion (
            NumeroCedula, 
            Provincia, 
            Canton, 
            Distrito
        ) 
        VALUES (
            @cedula,
            @provincia,
            @canton,
            @distrito
        );
    END TRY
    BEGIN CATCH
        -- Si ocurre un error, mostrar el mensaje del porque
        SELECT ERROR_MESSAGE() AS ErrorMensaje;
    END CATCH
END;
GO

-- Store procedure para conseguir toda la información del usuario