------- Creaci�n de la base de datos------------
CREATE DATABASE AutosUsados;
GO

USE AutosUsados;
GO

---------- Creaci�n de las tablas ---------
----- Usuario ---
CREATE TABLE Usuario (
	NumeroCedula INT PRIMARY KEY NOT NULL, 
	Usuario VARCHAR(45) NOT NULL,
	Contrasena VARCHAR(15) NOT NULL,
	TipoIdentificacion VARCHAR(45) NOT NULL,
	Nombre VARCHAR(45) NOT NULL,
	ApellidoUno VARCHAR(45) NOT NULL,
	ApellidoDos VARCHAR(45),
	Nacionalidad VARCHAR(45) NOT NULL,
	FechaNacimiento DATE NOT NULL,
	UNIQUE(Usuario));
GO

----- InformacionContacto ----
CREATE TABLE InformacionContacto (
	NumeroCedula INT PRIMARY KEY NOT NULL,
	CorreoElectronico VARCHAR(45) NOT NULL,
	Telefono VARCHAR(20),
	UNIQUE(CorreoElectronico),
	FOREIGN KEY (NumeroCedula) REFERENCES Usuario(NumeroCedula));
GO

------ Direccion -----
CREATE TABLE Direccion (
	NumeroCedula INT PRIMARY KEY NOT NULL,
	Provincia VARCHAR(30) NOT NULL,
	Canton VARCHAR(30) NOT NULL,
	Distrito VARCHAR(30) NOT NULL,
	FOREIGN KEY (NumeroCedula) REFERENCES Usuario(NumeroCedula));
GO

----- Reservacion ------
CREATE TABLE Reservacion (
	IdReservacion INT PRIMARY KEY NOT NULL,
	IdentificadorUsuario INT NOT NULL,
	IdentificadorEmpresa INT NOT NULL,
	FechaDeVisita DATETIMEOFFSET(2) NOT NULL,
	Lugar VARCHAR(25) NOT NULL,
	FOREIGN KEY (IdentificadorUsuario) REFERENCES InformacionContacto(NumeroCedula),
	FOREIGN KEY (IdentificadorEmpresa) REFERENCES InformacionContacto(NumeroCedula));
GO

------ Pago -----
CREATE TABLE Pago (
	IdPago INT PRIMARY KEY NOT NULL,
	IdReservacion INT NOT NULL,
	Monto INT NOT NULL,
	MetodoPago VARCHAR(30) NOT NULL,
	FechaTransaccion DATETIMEOFFSET(2) DEFAULT GETDATE(),
	FOREIGN KEY (IdReservacion) REFERENCES Reservacion(IdReservacion));
GO

----- Vehiculo -----
CREATE TABLE Vehiculo (
	Placa VARCHAR(6) PRIMARY KEY NOT NULL,
	Marca VARCHAR(30) NOT NULL, 
	Modelo VARCHAR(30) NOT NULL,
	Anio INT NOT NULL,--
	TipoVehiculo VARCHAR(30) NOT NULL,
	Motor VARCHAR(30) NOT NULL,
	SistemaSonido VARCHAR(30) NOT NULL,
	TipoTableroMando VARCHAR(30) NOT NULL,
	CantidadPuertas INT NOT NULL,
	Estado INT NOT NULL);
GO

------ Materiales ------
CREATE TABLE Materiales (
	Placa VARCHAR(6) PRIMARY KEY NOT NULL,
	MaterialAsientos VARCHAR(45) NOT NULL,
	MaterialTapizado VARCHAR(25) NOT NULL, 
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO

------ Sensores ------
CREATE TABLE Sensores (
	Placa VARCHAR(6) PRIMARY KEY NOT NULL,
	ProximidadTraseros BIT NOT NULL,
	ProximidadDelanteros BIT NOT NULL,
	ProximidadLateral BIT NOT NULL,
	CamaraRetroceso BIT NOT NULL,
	Camara360 BIT NOT NULL,
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO

------ Mecanica ------
CREATE TABLE Mecanica (
	Placa VARCHAR(6) PRIMARY KEY NOT NULL,
	Traccion VARCHAR(10) NOT NULL,
	TipoTransmicion VARCHAR(30) NOT NULL,
	VentanasElectricas BIT NOT NULL,
	EspejosElectricos BIT NOT NULL,
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO

------ Dimensiones ------
CREATE TABLE Dimensiones (
	Placa VARCHAR(6) PRIMARY KEY NOT NULL,
	Largo REAL NOT NULL,
	Ancho REAL NOT NULL,
	Alto REAL NOT NULL
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO

------ Fotos ------
CREATE TABLE Fotos (
	ID INT PRIMARY KEY IDENTITY(1, 1) NOT NULL,
	Placa VARCHAR(6) NOT NULL,
	Imagen VARBINARY(MAX) NOT NULL,
	EsInterna BIT NOT NULL, --
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO

----- Publicacion ------
CREATE TABLE Publicacion (
	IdPublicacion INT PRIMARY KEY IDENTITY(1, 1),
	NumeroCedula INT NOT NULL,
	Placa VARCHAR(6) NOT NULL,
	PrecioColones INT NOT NULL,
	PrecioNegociable BIT NOT NULL,
	RecibeVehiculoPago BIT NOT NULL,
	AsociadoALeasing BIT NOT NULL,
	FechaPublicacion DATETIMEOFFSET(2) DEFAULT GETDATE(),
	FechaEdicion DATETIMEOFFSET(2),  -- Solo se agrega cuando se hace un UPDATE
	FOREIGN KEY (NumeroCedula) REFERENCES Usuario(NumeroCedula),
	FOREIGN KEY (Placa) REFERENCES Vehiculo(Placa));
GO
