import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init( {
  resources: {
    es: {
        translation: {
            barraNavegacion: "Barra de navegación",
            inicio: "Inicio",
            autos: "Autos",
            publicacion: "Publicaciones",
            reserva: "Reservas",
            inicioSesion: "Iniciar Sesion",
            registrarse: "Registrarse",
            menuCuenta: "Menú de la cuenta",
            cuenta: "Mi Cuenta",
            cerrarSesion: "Cerrar Sesion",
            infoCuenta: "Mi informacion",
            menuIdioma: "Menú del idioma",
            idioma: "Idioma",
            espanol: "Español",
            ingles: "Ingles",
            derechos: "Todos los derechos reservados",
            enlaceLegal: "Enlace a la información legal",
            legal: "Legal",
            enlacePolitica: "Enlace a las politicas de privacidad",
            politica: "Politica de Privacidad",
            altLogo: "Logo de la página",
            facebook: "Logo y enlace a Facebook",
            twitter: "Logo y enlace a Twitter",
            instagram: "Logo y enlace a Instagram",
            imagen1C: "Imagen 1 del carrusel",
            imagen2C: "Imagen 2 del carrusel",
            imagen3C: "Imagen 3 del carrusel",
            descriCionC: "Obtén ese cacharrito que te llevará a donde quieras llegar",
            verAutosB: "Ver Autos",
            pubTituloCard: "Buscar Clientes",
            publiTextCard: "¿Estás buscando vender ese cacharrito para obtener uno más nuevo o por motivos financieros? ¡No pierdas la oportunidad de anunciarlo con nosotros! Para publicar tu vehiculo, solo necesitas estar registrado en nuestra página. ¡Hazlo ahora y encuentra a un comprador rápidamente!",
            pubButtonCard: "Crear Publicación",
            compTituloCard: "Comparar Autos",
            compTextCard: "¿No puedes decidir entre dos o tres autos? ¡Compara modelos, características y precios para tomar la mejor decisión! Solo accede a nuestra herramienta de comparación. ¡Hazlo ahora y encuentra el auto ideal para ti!",
            compButtonCard: "Comparar Ahora",
            resTituloCard: "Reservar Cita",
            resTextCard: "¿Encontraste el cacharrito perfecto para tu próxima aventura? ¡Agenda una cita con la empresa o persona que lo tiene y hazlo tuyo! Solo necesitas registrarte para que esto sea posible.",
            resButtonCard: "Reservar Ahora",
            advertencia: "¡Ups! Algo no salió como esperábamos.",
            advertenciaRegister: "Para continuar, necesitas estar registrado. Regístrate, inicia sesión y vuelve a intentarlo.",
            campoUser1: "El campo de Usuario no puede estar vacío.",
            campoUser2: "El usuario debe ser de al menos 5 caracteres.",
            campoCorreo1: "El campo de Correo no puede estar vacío.",
            campoCorreo2: "El correo no es válido.",
            campoContra1: "El campo de Contraseña no puede estar vacío.",
            campoContra2: "La contraseña debe ser de minimo 8 y maximo 15 carcateres.",
            campoContra3: "La contraseña debe tener al menos 1 carcteres especial.",
            campoContra4: "La contraseña debe tener al menos 1 una mayúscula.",
            campoContra5: "La contraseña debe tener al menos 1 una minuscula.",
            opcionesLogin: "Opciones de inicio de sesión",
            mensajeInicioSesion: "Por favor, ingrese su usuario o correo junto con su contraseña.",
            usuario: "Usuario",
            placeHolderUsuario: "Ingrese su usuario",
            descripUser: "El usuario debe contener minimo 5 carcacteres.",
            contra: "Contraseña",
            placeHolderContra: "Ingrese su contraseña",
            descripContra: "La contraseña debe tener entre 8 y 15 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un carácter especial",
            correo: "Correo",
            placeHolderCorreo: "Ingrese su correo",
            mensajeRegistrarse: "Por favor, ingrese todos los datos que se le solicitan.",
            tipoIdentificacion: "Tipo de Identificación",
            placeHolderTipoIden: "Seleccione su tipo de identificación",
            identificacion: "Identificación",
            placeHolderIden: "Ingrese su identificación",
            descripIdentificacion: "Por favor, utilice la cantidad especificada de dígitos para cada tipo de identificación.",
            nombre: "Nombre",
            placeHolderNombre: "Ingrese su nombre",
            apellido1: "Primer Apellido",
            placeHolderAp1: "Ingrese su primer apellido",
            apellido2: "Segundo Apellido",
            placeHolderAp2: "Ingrese su segundo apellido",
            nacionalidad: "Nacionalidad",
            placeHolderNac: "Ingrese su nacionalidad",
            fechaNacimiento: "Fecha de Nacimiento",
            placeHolderFechaNac: "dd/mm/aa",
            provincia: "Provincia",
            placeHolderProvincia: "Seleccione una provincia",
            desProvincia: "Debe ser la provincia que coincida con su dirección.",
            canton: "Cantón",
            placeHolderCanton: "Seleccione un cantón",
            desCanton: "Debe ser el cantón que coincida con su dirección.",
            distrito: "Distrito",
            placeHolderDistrito: "Ingrese un distrito",
            desDistrito: "Debe ser el distrito que coincida con su dirección.",
            campoTipoIden: "El campo de Tipo de Identificación no puede estar vacío.",
            campoIden1: "El campo de Tipo de Identificación no puede estar vacío.",
            campoIden2: "La identificación no puede contener letras.",
            idenFisica: "La cédula física debe contener exactamente 9 dígitos.",
            idenJuridicaNITE: "La cédula física y la NITE deben contener exactamente 10 dígitos.",
            idenDIMEX: "La identificación DIMEX debe tener 11 o 12 dígitos.",
            campoNombreApellidos1: "Los campos de nombre y apellidos no pueden estar vacíos.",
            campoNombreApellidos2: "El nombre y los apellidos deben tener al menos 2 letras.",
            campoNacionalidad: "El campo de Nacionalidad no puede estar vacío y debe tener al menos 1 letra.",
            campoFechaNacimiento1: "El campo de Fecha de Nacimiento no puede estar vacío.",
            campoFechaNacimiento2: "Debe ser mayor de 18 años para registrarse en el sitio.",
            campoProvCan: "Los datos de la dirección no deben estar vacíos.",
            campoDistrito: "El distrito debe tener más de 3 letras.",
            direccionUsuario: "Direccion",
            descripDireccion: "Provincia, Cantón, Distrito",
            misPublicaciones: "Mis Publicaciones",
            noPublicaciones: "Aún no tienes publicaciones",
            descripNoPub: "No tienes publicaciones aún. Presiona 'Crear Publicación' y anuncia tu vehículo.",
            placa: "Placa",
            marca: "Marca",
            modelo: "Modelo",
            tipo: "Tipo",
            motor: "Motor",
            precio: "Precio",
            year: "Año",
            registrarAuto: "Registrar Auto",
            placeHolderPlaca: "Ingrese la placa del vehículo",
            descripPlaca: "Debe contener 3 letras al inicio y 3 números al final",
            placeHolderMarca: "Ingrese la marca del vehículo",
            placeHolderModelo: "Ingrese el modelo del vehículo",
            placeHolderYear: "Ingrese el año de fabricación",
            placeHolderTipo: "Seleccione el tipo de carrocería",
            placeHolderMotor: "Seleccione el tipo de motor",
            sistemaSonido: "Sistema de Sonido",
            placeHolderSiSonido: "Seleccione el sistema de sonido",
            placeHoldeTablero: "Seleccione el tablero de mando",
            cantidadPuertas: "Cantidad de Puertas",
            placeHolderPuertas: "Seleccione la cantidad de puertas",
            estadoV: "Estado del Vehículo",
            placeHolderEstado: "Seleccione el estado del vehículo",
            descripEstado: "1 es excelente y 5 es muy dañado",
            asiento: "Material de los Asientos",
            placeHolderMaterial: "Seleccione el material",
            tapizadoM: "Material del Tapizado",
            descripSiNo: "Si no marca la casilla, se contará como un no",
            sensorTrasero: "¿Tiene sensores traseros?",
            sensorDelantero: "¿Tiene sensores delanteros?",
            sensorLateral: "¿Tiene sensores laterales?",
            camaraRetro: "¿Tiene cámara de retroceso?",
            camara360g: "¿Tiene cámara 360°?",
            traccion: "Tracción",
            placeHolderTraccion: "Seleccione el tipo de tracción",
            vidrios: "¿Tiene vidrios eléctricos?",
            espejos: "¿Tiene espejos eléctricos?",
            transmision: "Transmisión",
            placeHolderTransmision: "Seleccione el tipo de transmisión",
            dimensionesVehiculo: "Dimensiones del Vehículo",
            descripDimensiones: "El formato de las dimensiones es 0.0 en metros",
            largo: "Largo",
            altura: "Altura",
            anchura: "Anchura",
            precioColones: "Precio en colones (₡)",
            placeHolderPrecio: "Ingrese el precio",
            descripPrecio: "El formato debe ser 0.0",
            negociable: "¿Es el precio negociable?",
            recibeVehiculo: "¿Se recibe otro vehículo como parte del pago?",
            asociadoLeasing: "¿El vehículo está asociado a leasing?",
            fotosInternas: "Fotos Internas del Vehículo",
            fotosExternas: "Fotos Externas del Vehículo",
            descripFotos: "Debe cargar 4 fotos del vehículo",
            campoPlaca1: "El campo de la placa no puede estar vacío.",
            campoPlaca2: "La placa debe tener 6 dígitos.",
            campoPlaca3: "El formato de la placa no es válido.",
            campoPlaca4: "La placa ingresada no existe.",
            campoPlaca5: "El vehículo tiene multas o gravámenes pendientes; la publicación no se creará.",
            campoPlaca6: "Ya se ha creado una publicación para este vehículo.",
            campoMarca: "El campo de la marca no puede estar vacío.",
            campoModelo: "El campo del modelo no puede estar vacío.",
            campoAnio1: "El campo del año no puede estar vacío.",
            campoAnio2: "El año debe tener exactamente 4 dígitos.",
            campoAnio3: "El año debe estar compuesto solo por números, no letras.",
            campoTipo: "El campo del tipo de carrocería no puede estar vacío.",
            campoMotor: "El campo del motor no puede estar vacío.",
            campoSysSonido: "El campo de sistemas de sonido no puede estar vacío.",
            campoTablero: "El campo del tablero de mando no debe estar vacío.",
            campoCantidadPuertas: "El campo de la cantidad de puertas no debe estar vacío.",
            campoEstado: "El campo del estado no puede estar vacío.",
            campoAsientos: "El campo del material de los asientos no puede estar vacío.",
            campoTapizado: "El campo del material de tapizado no puede estar vacío.",
            campoTraccion: "El campo del tipo de tracción no puede estar vacío.",
            campoTransmision: "El campo de transmisión no puede estar vacío.",
            campoDimensiones: "Las dimensiones deben ser mayores a 0.0.",
            precioNegocible: "¿El precio es negociable?",
            vehiculoComoPago: "¿Recibe un vehículo como pago?",
            dimensiones: "Dimensiones (metros)",
            seleccionar: "Seleccione",
            tipoTransmisionS: "Sencillo",
            materialAsientos: "Material de asientos",
            tela: "Tela",
            cuero: "Cuero",
            gasolina: "Gasolina",
            diesel: "Diesel",
            gas: "Gas",
            gasLicuado: "Gas licuado",
            electrico: "Eléctrico",
            hibrido: "Híbrido",
            vidriosElectricos: "¿Tiene ventanas eléctricas?",
            espejosElectricos: "Espejos eléctricos",
            electricoVidrio: "Ventanas eléctricas",
            sensoresTraseros: "Sensores de proximidad traseros",
            sensoresDelanteros: "Sensores de proximidad delanteros",
            camaraRetroceso: "Cámara de retroceso",
            camara360: "Cámara 360",
            sensoresLaterales: "Sensores de proximidad lateral",
            tablero: "Tablero de mando",
            tapizado: "Tapizado",
            sonido: "Sistema de sonido",
            estadoVehiculo: "Estado del vehículo (1-5)",
            leasing: "Asociado a leasing",
            seleccione: "Seleccione",
            tactil: "100% táctil",
            analogo: "Análogo",
            ambos: "Ambos",
            manual: "Manual",
            automatico: "Automático",
            dual: "Dual",
            plastico: "Plástico",
            estereo: "Estéreo 7.1",
            estandar: "Estándar",
            filtrar: "Aplicar filtros",
            compararAutos: "Comparar Autos",
            irComparacion: "Ir a Comparar",
            botonComparar: "Comparar",
            botonOcultar: "Ocultar",
            plantillaAuto: "Usar como plantilla",
            foto: "Foto ",
            fotoGrande: "Foto Grande Vehiculo",
            infoGeneral: "General",
            equpamiento: "Equipamiento",
            tabDimensiones: "Dimensiones",
            pago: "Pago",
            cargando: "Cargando el formulario...",
            modificar: "Modificar publicación",
            mensajeModificar: "Modifique los datos que considere necesarios.",
            telefono: "Teléfono",
            placeHolderTelefono: "Ingrese su número de teléfono",
            campoTelefono1: "El campo de teléfono no puede estar vacío.",
            campoTelefono2: "El número de teléfono solo debe contener números.",
            fetchRegistroUsuario: "Hubo un error al registrar al usuario, por favor, intente nuevamente.",
            fetchUsuario: "Usuario o contraseña incorrectos.",
            fetchCorreo: "Correo electrónico o contraseña incorrectos.",
            fetchCuenta: "Hubo un error al cargar los datos, por favor, intente nuevamente.",
            fechaPublicacion: "Fecha de publicación",
            fechaModificacion: "Fecha de modificación", 
            fechaModiMenj: "No se registraron modificaciones", 
            alertaCantidadComparacionesMaxima: "No es posible comparar más de tres autos", 
            alertaCantidadComparacionesMinima: "Es necesario comparar al menos dos autos", 
            alertaComparacionRepetida: "No es posible comparar los mismos autos", 
            campoIdentV: "La identificación no es válida.", 
            campoIdenP: "La persona con esta identificación tiene procesos penales abiertos, por lo que no puede crear una cuenta."
        },
    },
    en: {
        translation: {
          barraNavegacion: "Navagation Bar",
          inicio: "Home",
          autos: "Cars",
          publicacion: "Posts",
          reserva: "Reservations",
          inicioSesion: "LogIn",
          registrarse: "Register",
          menuCuenta: "Account Menu",
          cuenta: "My Account",
          cerrarSesion: "LogOut",
          infoCuenta: "Account Information",
          menuIdioma: "Language Menu",
          idioma: "Language",
          espanol: "Spanish",
          ingles: "English",
          derechos: "All rigths reserve",
          enlaceLegal: "Link to the legal information",
          legal: "Legal",
          enlacePolitica: "Link to the privacy policy",
          politica: "Privacy Policy",
          altLogo: "Website Logo",
          facebook: "Logo y link to Facebook",
          twitter: "Logo y link to Twitter",
          instagram: "Logo y link to Instagram",
          imagen1C: "Image 1 of the carousel",
          imagen2C: "Image 2 of the carousel",
          imagen3C: "Image 3 of the carousel",
          descriCionC: "Get that car that will take you where you want to go",
          verAutosB: "Find Cars",
          pubTituloCard: "Looking for Clients",
          publiTextCard: "Looking to sell that old car to get a new one or for financial reasons? Don't miss the chance to advertise it with us! To post your vehicle, you only need to be registered on our page. Do it now and find a buyer quickly!",
          pubButtonCard: "Create Post",
          compTituloCard: "Compare Cars",
          compTextCard: "Can't decide between two or three cars? Compare models, features, and prices to make the best choice! Just access our comparison tool. Do it now and find the perfect car for you!",
          compButtonCard: "Compare Now",
          resTituloCard: "Schedule Appoinment",
          resTextCard: "Found the perfect car for your next adventure? Schedule an appointment with the seller and make it yours! All you need to do is register to make it happen.",
          resButtonCard: "Schedule Now",
          advertencia: "Oops! Something went wrong.",
          advertenciaRegister: "To proceed, you need to be registered. Sign up, log in, and try again.",
          campoUser1: "The Username field cannot be empty.",
          campoUser2: "The username must be at least 5 characters long.",
          campoCorreo1: "The Email field cannot be empty.",
          campoCorreo2: "The email is not valid.",
          campoContra1: "The Password field cannot be empty.",
          campoContra2: "The password must be between 8 and 15 characters.",
          campoContra3: "The password must contain at least one special character.",
          campoContra4: "The password must contain at least one uppercase letter.",
          campoContra5: "The password must contain at least one lowercase letter.",
          opcionesLogin: "Login Options",
          mensajeInicioSesion: "Please enter your username or email along with your password.",
          usuario: "Username",
          placeHolderUsuario: "Enter your username",
          contra: "Password",
          placeHolderContra: "Enter your password",
          descripContra: "The password must be between 8 and 15 characters, including at least one lowercase letter, one uppercase letter, and one special character.",
          correo: "Email",
          placeHolderCorreo: "Enter your email",
          mensajeRegistrarse: "Plese enter all the information requested.",
          tipoIdentificacion: "Identification Type",
          placeHolderTipoIden: "Select your identification type",
          identificacion: "Identification",
          placeHolderIden: "Enter your identification",
          descripIdentificacion: "Please use the specified number of digits for each identification type.",
          nombre: "First Name",
          placeHolderNombre: "Enter your first name",
          apellido1: "Last Name",
          placeHolderAp1: "Enter your last name",
          apellido2: "Second Last Name",
          placeHolderAp2: "Enter your second last name",
          nacionalidad: "Nationality",
          placeHolderNac: "Enter your nationality",
          fechaNacimiento: "Date of Birth",
          placeHolderFechaNac: "dd/mm/yy",
          provincia: "Province",
          placeHolderProvincia: "Select a province",
          desProvincia: "Must be the province that matches your address.",
          canton: "Canton",
          placeHolderCanton: "Select a canton",
          desCanton: "Must be the canton that matches your address.",
          distrito: "District",
          placeHolderDistrito: "Enter a district",
          desDistrito: "Must be the district that matches your address.",
          campoTipoIden: "The Identification Type field cannot be empty.",
          campoIden1: "The Identification Type field cannot be empty.",
          campoIden2: "The identification cannot contain letters.",
          idenFisica: "The physical ID must contain exactly 9 digits.",
          idenJuridicaNITE: "The physical ID and NITE must contain exactly 10 digits.",
          idenDIMEX: "The DIMEX identification must have 11 or 12 digits.",
          campoNombreApellidos1: "The first name and last name fields cannot be empty.",
          campoNombreApellidos2: "The first name and last names must have at least 2 letters.",
          campoNacionalidad: "The Nationality field cannot be empty and must contain at least 1 letter.",
          campoFechaNacimiento1: "The Date of Birth field cannot be empty.",
          campoFechaNacimiento2: "You must be over 18 years old to register on the site.",
          campoProvCan: "The address information cannot be empty.",
          campoDistrito: "The district must have more than 3 letters.",
          direccionUsuario: "Adress",
          descripDireccion: "Province, Canton, District",
          misPublicaciones: "My Posts",
          noPublicaciones: "Start Publishing",
          descripNoPub: "You don't have any posts yet. Press 'Create Post' to list your vehicle.",
          placa: "License Plate",
          marca: "Brand",
          modelo: "Model",
          tipo: "Type",
          motor: "Engine",
          precio: "Price",
          year: "Year",
          registrarAuto: "Register Car",
          placeHolderPlaca: "Enter the vehicle's license plate",
          descripPlaca: "Must contain 3 letters at the beginning and 3 numbers at the end",
          placeHolderMarca: "Enter the vehicle's brand",
          placeHolderModelo: "Enter the vehicle's model",
          placeHolderYear: "Enter the year of manufacture",
          placeHolderTipo: "Select the type of vehicle bodywork",
          placeHolderMotor: "Select the type of engine",
          sistemaSonido: "Sound System",
          placeHolderSiSonido: "Select the sound system",
          placeHoldeTablero: "Select the dashboard type",
          cantidadPuertas: "Number of Doors",
          placeHolderPuertas: "Select the number of doors",
          estadoV: "Vehicle Condition",
          placeHolderEstado: "Select the vehicle's condition",
          descripEstado: "1 is excellent and 5 is very damaged",
          asiento: "Seat Material",
          placeHolderMaterial: "Select the material",
          tapizadoM: "Upholstery Material",
          descripSiNo: "If unchecked, it will be considered a no",
          sensorTrasero: "Has rear sensors?",
          sensorDelantero: "Has front sensors?",
          sensorLateral: "Has side sensors?",
          camaraRetro: "Has backup camera?",
          camara360g: "Has 360° camera?",
          traccion: "Traction",
          placeHolderTraccion: "Select the traction type",
          vidrios: "Has electric windows?",
          espejos: "Has electric mirrors?",
          transmision: "Transmission",
          placeHolderTransmision: "Select the transmission type",
          dimensionesVehiculo: "Vehicle Dimensions",
          descripDimensiones: "Dimensions format is 0.0 in meters",
          largo: "Length",
          altura: "Height",
          anchura: "Width",
          precioColones: "Price in colones (₡)",
          placeHolderPrecio: "Enter the price",
          descripPrecio: "Format should be 0.0",
          negociable: "Is the price negotiable?",
          recibeVehiculo: "Accepts another vehicle as payment?",
          asociadoLeasing: "Is the vehicle under leasing?",
          fotosInternas: "Internal Photos of the Vehicle",
          fotosExternas: "External Photos of the Vehicle",
          descripFotos: "Must upload 4 photos of the vehicle",
          campoPlaca1: "The license plate field cannot be empty.",
          campoPlaca2: "The license plate must have 6 digits.",
          campoPlaca3: "The license plate format is not valid.",
          campoPlaca4: "The entered license plate does not exist.",
          campoPlaca5: "The vehicle has pending fines or liens; the publication will not be created.",
          campoPlaca6: "A publication for this vehicle has already been created.",
          campoMarca: "The brand field cannot be empty.",
          campoModelo: "The model field cannot be empty.",
          campoAnio1: "The year field cannot be empty.",
          campoAnio2: "The year must have exactly 4 digits.",
          campoAnio3: "The year must consist only of numbers, not letters.",
          campoTipo: "The body type field cannot be empty.",
          campoMotor: "The engine field cannot be empty.",
          campoSysSonido: "The sound system field cannot be empty.",
          campoTablero: "The dashboard field cannot be empty.",
          campoCantidadPuertas: "The number of doors field cannot be empty.",
          campoEstado: "The condition field cannot be empty.",
          campoAsientos: "The seat material field cannot be empty.",
          campoTapizado: "The upholstery material field cannot be empty.",
          campoTraccion: "The drivetrain type field cannot be empty.",
          campoTransmision: "The transmission field cannot be empty.",
          campoDimensiones: "Dimensions must be greater than 0.0.",
          precioNegocible: "The price is negotiable?",
          vehiculoComoPago: "Give vehicle as payment",
          dimensiones: "Dimensions (meters)",
          seleccionar: "Choose",
          tipoTransmisionS: "Simple",
          materialAsientos: "Seat material",
          tela: "Fabric",
          cuero: "Leather",
          gasolina: "Gasoline",
          diesel: "Diesel",
          gas: "Gas",
          gasLicuado: "Liquefied gas",
          electrico: "Electric",
          hibrido: "Hybrid",
          vidriosElectricos: "Does the car have electric windows?",
          espejosElectricos: "Electric mirrors",
          electricoVidrio: "Electric windows.",
          sensoresTraseros: "Rear proximity sensors",
          sensoresDelanteros: "Front proximity sensors",
          camaraRetroceso: "Reversing camera",
          camara360: "360 Camera",
          sensoresLaterales: "Side proximity sensors",
          tablero: "Dashboard",
          tapizado: "Upholstery",
          sonido: "Sound system",
          estadoVehiculo: "Vehicle condition (1-5)",
          leasing: "Associated with leasing",
          seleccione: "Select",
          tactil: "100% touch",
          analogo: "Analog",
          ambos: "Both",
          manual: "Manual",
          automatico: "Automatic",
          dual: "Dual",
          plastico: "Plastic",
          estereo: "Stereo 7.1",
          estandar: "Standard",
          filtrar: "Apply filters",
          compararAutos: "Compare Cars",
          irComparacion: "Go compare",
          botonComparar: "Compare",
          botonOcultar: "Hide",
          foto: "Image ",
          fotoGrande: "Car Big Image",
          infoGeneral: "General",
          equpamiento: "Equipment",
          tabDimensiones: "Dimensions",
          pago: "Payment",
          cargando: "Loading the form...",
          modificar: "Edit Publication",
          mensajeModificar: "Edit the data you deem necessary.",
          telefono: "Phone",
          placeHolderTelefono: "Enter your phone number",
          campoTelefono1: "The phone field cannot be empty.",
          campoTelefono2: "The phone number must contain only numbers.",
          fetchRegistroUsuario: "An error occurred while registering the user. Please try again.",
          fetchUsuario: "Incorrect username or password.",
          fetchCorreo: "Incorrect email or password.",
          fetchCuenta: "An error occurred while loading the data. Please try again.",
          fechaPublicacion: "Publication date",
          fechaModificacion: "Modification Date", 
          fechaModiMenj: "No modifications available", 
          alertaCantidadComparacionesMaxima: "You cannot compare more than three cars", 
          alertaCantidadComparacionesMinima: "You cannot compare fewer than two cars", 
          alertaComparacionRepetida: "You cannot compare the same cars", 
          campoIdentV: "The identification is not valid.", 
          campoIdenP: "The person with this identification has open criminal proceedings and cannot create an account."

      },
    },
  },
  lng: 'es', //Idioma predeterminado
  fallbackLng: 'es', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
