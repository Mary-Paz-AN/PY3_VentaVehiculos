import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: {
        translation: {
            inicio: "Inicio",
            autos: "Autos",
            publicacion: "Publicaciones",
            reserva: "Reservas",
            inicioSesion: "Iniciar Sesion",
            registrarse: "Registrarse",
            cuenta: "Mi Cuenta",
            cerrarSesion: "Cerrar Sesion",
            infoCuenta: "Mi informacion",
            idioma: "Idioma",
            espanol: "Español",
            ingles: "Ingles",
            derechos: "Todos los derechos reservados",
            legal: "Legal",
            politica: "Politica de Privacidad"
        },
    },
    en: {
        translation: {
            inicio: "Home",
            autos: "Cars",
            publicacion: "Posts",
            reserva: "Reservations",
            inicioSesion: "Login",
            registrarse: "Register",
            cuenta: "My Account",
            cerrarSesion: "Logout",
            infoCuenta: "Account Information",
            idioma: "Language",
            espanol: "Spanish",
            ingles: "English",
            derechos: "All rigths reserve",
            legal: "Legal",
            politica: "Privacy Policy"
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
