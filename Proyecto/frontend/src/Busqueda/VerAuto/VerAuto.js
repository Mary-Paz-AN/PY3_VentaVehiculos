import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './DetalleVehiculo.module.css';
import Header from '../../Header';
import Footer from '../../Footer';
import { getUsuario } from '../../Usuario/Acceso';

const DetalleVehiculo = () => {
  const { t } = useTranslation();
  const [publicacion, setPublicacion] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const traerVehiculo = async () => {
      const data = await traerPublicacion(id);
      setPublicacion(data || {});
      console.log(data);
    };
    traerVehiculo();
  }, [id]);

  const traerPublicacion = async (id) => {
    try {
      const response = await fetch('/mostrarPublicacionBusqueda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa: id }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error al traer el vehículo:', error);
      return null;
    }
  };

  const manejarReserva = () => {
    if(getUsuario() === null){
      alert('Para reservar un auto debe iniciar sesion');
    }
    else{
      navigate('/reservarAuto',{
        state: {publicacion}
      });
    }
  };

  return (
    <div>
      <Header />
      <div className={`${styles.detalleVehiculo} container`}>
        <div className="row">
          <div className="col-md-8">
            <h2>
              {publicacion.marca} {publicacion.modelo}
            </h2>
            <p>{t('año')}: {publicacion.anio}</p>
            <p>{t('placa')}: {publicacion.placa}</p>
            <p>{t('precio')}: ₡{publicacion.precio?.toLocaleString()}</p>
            <p>{t('precioNegociable')}: {publicacion.negociable ? t('si') : t('no')}</p>
            <p>{t('recibeVehiculo')}: {publicacion.recibeVehiculo ? t('si') : t('no')}</p>

            <h5>{t('fotos')}</h5>
            <div className={styles.fotos}>
              <img
                src="/images/logo.png"
                alt={`${publicacion.marca} ${publicacion.modelo}`}
                className={styles.foto}
              />
            </div>

            <h5>{t('especificaciones')}</h5>
            <p>{t('transmision')}: {publicacion.transmision}</p>
            <p>{t('cantidadPuertas')}: {publicacion.cantidadPuertas}</p>
            <p>{t('dimensiones')}:</p>
            <ul>
              <li>{t('largo')}: {publicacion.largo} m</li>
              <li>{t('anchura')}: {publicacion.ancho} m</li>
              <li>{t('altura')}: {publicacion.alto} m</li>
            </ul>
            <p>{t('asiento')}: {publicacion.asientos}</p>
            <p>{t('motor')}: {publicacion.motor}</p>
            <p>{t('vidrios')}: {publicacion.vidriosElec ? t('si') : t('no')}</p>
            <p>{t('espejos')}: {publicacion.espejosElec ? t('si') : t('no')}</p>
            <p>{t('sensorTrasero')}: {publicacion.sensorTrasero ? t('si') : t('no')}</p>
            <p>{t('sensorDelantero')}: {publicacion.sensorDelantero ? t('si') : t('no')}</p>
            <p>{t('camaraRetro')}: {publicacion.camaraRetroceso ? t('si') : t('no')}</p>
            <p>{t('camara360g')}: {publicacion.camara360 ? t('si') : t('no')}</p>
            <p>{t('sensorLateral')}: {publicacion.sensorLateral ? t('si') : t('no')}</p>
            <p>{t('tablero')}: {publicacion.tablero}</p>
            <p>{t('tapizadoM')}: {publicacion.tapizado}</p>
            <p>{t('sistemaSonido')}: {publicacion.sistemaSonido}</p>
            <p>{t('estadoV')}: {publicacion.estado} / 5</p>
            <p>{t('asociadoLeasing')}: {publicacion.leasing ? t('si') : t('no')}</p>
          </div>

          <div className="col-md-4">
            <div className={`${styles.vendedorInfo} p-3`}>
              <h5>{t('informacionVendedor')}</h5>
              <p>{t('nombre')}: {publicacion.Nombre}</p>
              <p>{t('telefono')}: {publicacion.Telefono}</p>
            </div>
            <button className="btn btn-primary btn-block mt-3" onClick={manejarReserva}>
              {t('resTituloCard')}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleVehiculo;
