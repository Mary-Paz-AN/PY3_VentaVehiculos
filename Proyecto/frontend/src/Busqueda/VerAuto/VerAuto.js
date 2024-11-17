import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './DetalleVehiculo.module.css';

const DetalleVehiculo = ({ vehiculo, vendedor }) => {
  const { t } = useTranslation();

  const manejarReserva = () => {
    alert(t('Reserva realizada con éxito.'));
    // Aquí se podría redirigir a otra página o enviar datos al backend
  };

  return (
    <div className={`${styles.detalleVehiculo} container`}>
      <div className="row">
        <div className="col-md-8">
          <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
          <p>{t('Año')}: {vehiculo.año}</p>
          <p>{t('Placa')}: {vehiculo.placa}</p>
          <p>{t('Precio en colones')}: ₡{vehiculo.precio.toLocaleString()}</p>
          <p>{t('Precio negociable')}: {vehiculo.negociable ? t('Sí') : t('No')}</p>
          <p>{t('Acepta vehículos como parte de pago')}: {vehiculo.aceptaVehiculos ? t('Sí') : t('No')}</p>
          
          <h5>{t('Fotos')}</h5>
          <div className={styles.fotos}>
            {vehiculo.fotosInternas.map((foto, index) => (
              <img key={index} src={foto} alt={`${t('Foto interna')} ${index + 1}`} className={styles.foto} />
            ))}
            {vehiculo.fotosExternas.map((foto, index) => (
              <img key={index} src={foto} alt={`${t('Foto externa')} ${index + 1}`} className={styles.foto} />
            ))}
          </div>

          <h5>{t('Especificaciones')}</h5>
          <p>{t('Transmisión')}: {vehiculo.transmisionTipo}</p>
          <p>{t('Cantidad de puertas')}: {vehiculo.puertas}</p>
          <p>{t('Dimensiones')}:</p>
          <ul>
            <li>{t('Largo')}: {vehiculo.dimensiones.largo} m</li>
            <li>{t('Ancho')}: {vehiculo.dimensiones.ancho} m</li>
            <li>{t('Alto')}: {vehiculo.dimensiones.alto} m</li>
          </ul>
          <p>{t('Material de los asientos')}: {vehiculo.materialAsientos}</p>
          <p>{t('Motor')}: {vehiculo.motor}</p>
          <p>{t('Vidrios eléctricos')}: {vehiculo.vidriosElectricos ? t('Sí') : t('No')}</p>
          <p>{t('Espejos eléctricos')}: {vehiculo.espejosElectricos ? t('Sí') : t('No')}</p>
          <p>{t('Sensores traseros')}: {vehiculo.sensoresTraseros ? t('Sí') : t('No')}</p>
          <p>{t('Sensores delanteros')}: {vehiculo.sensoresDelanteros ? t('Sí') : t('No')}</p>
          <p>{t('Cámara de retroceso')}: {vehiculo.camaraRetroceso ? t('Sí') : t('No')}</p>
          <p>{t('Cámara 360')}: {vehiculo.camara360 ? t('Sí') : t('No')}</p>
          <p>{t('Sensores laterales')}: {vehiculo.sensoresLaterales ? t('Sí') : t('No')}</p>
          <p>{t('Tablero de mando')}: {vehiculo.tablero}</p>
          <p>{t('Tipo de transmisión')}: {vehiculo.tipoTransmision}</p>
          <p>{t('Tapizado')}: {vehiculo.tapizado}</p>
          <p>{t('Sistema de sonido')}: {vehiculo.sonido}</p>
          <p>{t('Estado del vehículo')}: {vehiculo.estadoVehiculo} / 5</p>
          <p>{t('Asociado a leasing')}: {vehiculo.leasing ? t('Sí') : t('No')}</p>
        </div>

        <div className="col-md-4">
          <div className={`${styles.vendedorInfo} p-3`}>
            <h5>{t('Información del vendedor')}</h5>
            <p>{t('Nombre')}: {vendedor.nombre}</p>
            <p>{t('Teléfono')}: {vendedor.telefono}</p>
          </div>
          <button className="btn btn-primary btn-block mt-3" onClick={manejarReserva}>
            {t('Reservar')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleVehiculo;
