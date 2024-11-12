import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './i18n'; 
import './index.css';
import App from './App';
import IniciarSesion from './Usuario/IniciarSesion';
import Registrarse from './Usuario/Registrarse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Envuelve la aplicación en BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/usuario/iniciarSesion" element={<IniciarSesion />} />
        <Route path="/usuario/registrarse" element={<Registrarse />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
