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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>  {/* Envuelve la aplicación en BrowserRouter */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuario/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/usuario/registrarse" element={<Registrarse />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
