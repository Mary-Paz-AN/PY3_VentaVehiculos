import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Usuario/AuthContext';
import reportWebVitals from './reportWebVitals';
import './i18n'; 
import './index.css';
import Inicio from './Inicio';
import IniciarSesion from './Usuario/IniciarSesion';
import Registrarse from './Usuario/Registrarse';
import InfoCuenta from './Usuario/InfoCuenta';
import Publicaciones from './Publicaciones/Publicaciones';
import CrearPublicacion from './Publicaciones/CrearPublicacion';
import VerPublicacion from './Publicaciones/VerPublicacion';
import ModificarPublicacion from './Publicaciones/ModificarPublicacion';
import BuscarAutos from './Busqueda/Resultados';
import CompararAutos from './Busqueda/Comparaciones/PaginaComparaciones';
import ReservarAuto from './Reservaciones/PantallaReservacion';
import DetalleVehiculo from './Busqueda/VerAuto/VerAuto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuario/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/usuario/registrarse" element={<Registrarse />} />
          <Route path="/usuario/miCuenta" element={<InfoCuenta />} />
          <Route path="/publicaciones/misPublicaciones" element={<Publicaciones />} />
          <Route path="/publicaciones/crearPublicacion/:plantilla" element={<CrearPublicacion />} />
          <Route path="/publicaciones/verPublicacion/:idPublicacion" element={<VerPublicacion />} />
          <Route path="/publicaciones/modificarPublicacion/:idPublicacion" element={<ModificarPublicacion />} />
          <Route path="/buscarAutos" element={<BuscarAutos />} />
          <Route path="/compararAutos" element={<CompararAutos />} />
          <Route path="/reservarAuto" element={<ReservarAuto />} />
          <Route path="/detalleVehiculo/:id" element={<DetalleVehiculo />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
