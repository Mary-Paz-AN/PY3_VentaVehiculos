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
            instagram: "Logo y enlace a Instagram"
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
          instagram: "Logo y link to Instagram"
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
