import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ReservarAuto.module.css';
import Header from '../Header';
import Footer from '../Footer';

const ReservarAuto = ({ vehiculo }) => {
  const { t } = useTranslation();

  // Estados para manejar los datos de reserva
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [monto, setMonto] = useState(2000);

  // Opciones de ubicaciones
  const ubicaciones = ['Cartago', 'San José', 'Heredia', 'Alajuela'];

  const manejarReserva = () => {
    if (!fecha || !hora || !ubicacion || !metodoPago) {
      alert(t('Por favor complete todos los campos.'));
      return;
    }

    // Aquí iría la lógica para registrar la reserva
    alert(t('¡Reserva completada!'));
  };

  const precioDolares = (vehiculo.precio / tipoCambio).toFixed(2);

  return (
    <div className={`${styles.reservarAuto} container`}>
      <Header/>
      <h2>{t('Reservar Auto')}</h2>
      <div className={`${styles.vehiculoInfo} mb-4`}>
        <h4>{vehiculo.marca} {vehiculo.modelo}</h4>
        <p>{t('Precio en colones')}: ₡{vehiculo.precio.toLocaleString()}</p>
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
            <option value="sinpe">{t('SINPE Móvil')}</option>
            <option value="paypal">{t('PayPal')}</option>
            <option value="tarjeta">{t('Tarjeta de Crédito')}</option>
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
      <Footer/>
    </div>
  );
};

export default ReservarAuto;
