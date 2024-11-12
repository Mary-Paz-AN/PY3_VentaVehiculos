import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
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
            advertenciaRegister: "Para continuar, necesitas estar registrado. Regístrate, inicia sesión y vuelve a intentarlo."
        },
    },
    en: {
        translation: {
          barraNavegacion: "Navagation Bar",
          inicio: "Home",
          autos: "Cars",
          publicacion: "Posts",
          reserva: "Reservations",
          inicioSesion: "Login",
          registrarse: "Register",
          menuCuenta: "Account Menu",
          cuenta: "My Account",
          cerrarSesion: "Logout",
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
          advertenciaRegister: "To proceed, you need to be registered. Sign up, log in, and try again."
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
