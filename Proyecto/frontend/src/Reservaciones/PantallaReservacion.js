import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ReservarAuto.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import { obtenerTipoCambio } from './TipoCambio';
import { getUsuario } from '../Usuario/Acceso';

const ReservarAuto = () => {
  const { t } = useTranslation();
  const { state } = useLocation();

  const publicacion = state?.publicacion || {};

  // Estados para manejar los datos de reserva
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [monto, setMonto] = useState(2000);
  const [precioDolares, setPrecioDolares] = useState(0);

  const usuario = getUsuario();

  // Opciones de ubicaciones
  const ubicaciones = ['Cartago', 'San José', 'Heredia', 'Alajuela'];

  const manejarReserva = () => {
    if (!fecha || !hora || !ubicacion || !metodoPago) {
      alert(t('Por favor complete todos los campos.'));
      return;
    }

    crearReservacion();
  };

  useEffect(() => {
    const calcularPrecioDolares = async () => {
      try {
        const tipoCambio = await obtenerTipoCambio();
        setPrecioDolares((monto / tipoCambio).toFixed(2));
      } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
      }
    };

    calcularPrecioDolares();
  }, [monto]);

  const crearReservacion = async () => {
    try {
      console.log(publicacion);
      const response = await fetch("/crearReservacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({identificacionUsuario: publicacion.Cedula, identificacionEmpresa: publicacion.Cedula, fechaReserva: fecha, lugar: ubicacion, metodoPago: metodoPago}), // Convertir el objeto datosJSON a una cadena JSON
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json(); // Suponiendo que el servidor responde con JSON
      if(data.respuesta){
        alert("Se ha realizado la reservacion");
      }
      else{
        alert("No se pudo realizar la reservación");
      }
    } catch (error) {
      console.error("Error al traer los vehículos:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className={`${styles.reservarAuto} container`}>
        <h2>{t('Reservar Auto')}</h2>
        <div className={`${styles.vehiculoInfo} mb-4`}>
          <h4>{publicacion.marca} {publicacion.modelo}</h4>
          <p>{t('Precio en colones')}: ₡{publicacion.precio?.toLocaleString()}</p>
          <p>{t('Precio en dólares')}: ${precioDolares}</p>
        </div>

        <div className={`${styles.formularioReserva}`}>
          <h5>{t('Agendar una cita')}</h5>

          <div className="form-group">
            <label>{t('Fecha')}</label>
            <input
              type="date"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>{t('Hora')}</label>
            <input
              type="time"
              className="form-control"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>{t('Ubicación')}</label>
            <select
              className="form-control"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            >
              <option value="">{t('Seleccione una ubicación')}</option>
              {ubicaciones.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{t('Método de Pago')}</label>
            <select
              className="form-control"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
            >
              <option value="">{t('Seleccione un método')}</option>
              <option value="1">{t('SINPE Móvil')}</option>
              <option value="2">{t('PayPal')}</option>
              <option value="3">{t('Tarjeta de Crédito')}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{t('Monto a pagar')}:</label>
            <p>₡{monto.toLocaleString()}</p>
          </div>

          <button className="btn btn-success mt-3" onClick={manejarReserva}>
            {t('Reservar y Agendar')}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservarAuto;
