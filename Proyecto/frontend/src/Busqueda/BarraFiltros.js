import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BarraFiltroBuscarAuto.module.css';

const BarraFiltroBusquedaAutos = ({ traerVehiculos }) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    marca: null,
    modelo: null,
    anio: null,
    precioMin: null,
    precioMax: null,
    negociable: null,
    aceptaVehiculos: null,
    tipoTransmision: null,
    puertas: null,
    largoMin: null,
    largoMax: null,
    anchoMin: null,
    anchoMax: null,
    altoMin: null,
    altoMax: null,
    materialAsientos: null,
    motor: null,
    vidriosElectricos: null,
    espejosElectricos: null,
    sensoresTraseros: null,
    sensoresDelanteros: null,
    camaraRetroceso: null,
    camara360: null,
    sensoresLaterales: null,
    tablero: null,
    tapizado: null,
    sonido: null,
    estadoVehiculo: null,
    leasing: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const enviarFiltros = () => {
    traerVehiculos(filters);
  };

  return (
    <div className={styles.barraLateral}>
      <h5 className={styles.contenedorTitulo}>{t('Filtros')}</h5>

      {/* Marca */}
      <div className={styles.filtros}>
        <label>{t('marca')}</label>
        <input type="text" name="marca" value={filters.marca} onChange={handleChange} />
      </div>

      {/* Modelo */}
      <div className={styles.filtros}>
        <label>{t('modelo')}</label>
        <input type="text" name="modelo" value={filters.modelo} onChange={handleChange} />
      </div>

      {/* Año */}
      <div className={styles.filtros}>
        <label>{t('year')}</label>
        <input type="number" name="anio" value={filters.anio} onChange={handleChange} />
      </div>

      {/* Precio Min */}
      <div className={styles.filtros}>
        <label>{t('precioMin')}</label>
        <input type="number" name="precioMin" value={filters.precioMin} onChange={handleChange} />
      </div>

      {/* Precio Max */}
      <div className={styles.filtros}>
        <label>{t('precioMax')}</label>
        <input type="number" name="precioMax" value={filters.precioMax} onChange={handleChange} />
      </div>

      {/* Negociable */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="negociable" checked={filters.negociable} onChange={handleChange} />
          {t('precioNegocible')}
        </label>
      </div>

      {/* Acepta Vehículos */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="aceptaVehiculos" checked={filters.aceptaVehiculos} onChange={handleChange} />
          {t('vehiculoComoPago')}
        </label>
      </div>

      {/* Transmisión */}
      <div class={styles.filtros}>
        <label>{t('tipoTransmision')}</label>
        <select name="tipoTransmision" value={filters.tipoTransmision} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="Manual">{t('manual')}</option>
          <option value="Automático">{t('automatico')}</option>
          <option value="Dual">{t('dual')}</option>
        </select>
      </div>

      {/* Puertas */}
      <div className={styles.filtros}>
        <label>{t('cantidadPuertas')}</label>
        <input type="number" name="puertas" value={filters.puertas} onChange={handleChange} />
      </div>

      {/* Largo Mín */}
      <div className={styles.filtros}>
        <label>{t('largoMin')}</label>
        <input type="number" name="largoMin" value={filters.largoMin} onChange={handleChange} />
      </div>

      {/* Largo Máx */}
      <div className={styles.filtros}>
        <label>{t('largoMax')}</label>
        <input type="number" name="largoMax" value={filters.largoMax} onChange={handleChange} />
      </div>

      {/* Ancho Mín */}
      <div className={styles.filtros}>
        <label>{t('anchoMin')}</label>
        <input type="number" name="anchoMin" value={filters.anchoMin} onChange={handleChange} />
      </div>

      {/* Ancho Máx */}
      <div className={styles.filtros}>
        <label>{t('anchoMax')}</label>
        <input type="number" name="anchoMax" value={filters.anchoMax} onChange={handleChange} />
      </div>

      {/* Alto Mín */}
      <div className={styles.filtros}>
        <label>{t('altoMin')}</label>
        <input type="number" name="altoMin" value={filters.altoMin} onChange={handleChange} />
      </div>

      {/* Alto Máx */}
      <div className={styles.filtros}>
        <label>{t('altoMax')}</label>
        <input type="number" name="altoMax" value={filters.altoMax} onChange={handleChange} />
      </div>

      {/* Material Asientos */}
      <div class={styles.filtros}>
        <label>{t('materialAsientos')}</label>
        <select name="materialAsientos" value={filters.materialAsientos} onChange={handleChange}>
          <option value="">{t('seleccionar')}</option>
          <option value="Tela">{t('tela')}</option>
          <option value="Cuero">{t('cuero')}</option>
        </select>
      </div>

      {/* Motor */}
      <div class={styles.filtros}>
        <label>{t('motor')}</label>
        <select name="motor" value={filters.motor} onChange={handleChange}>
          <option value="">{t('seleccionar')}</option>
          <option value="Gasolina">{t('gasolina')}</option>
          <option value="Diesel">{t('diesel')}</option>
          <option value="Gas">Gas</option>
          <option value="Licuado">{t('gasLicuado')}</option>
          <option value="Électrico">{t('electrico')}</option>
          <option value="Hibrido">{t('hibrido')}</option>
        </select>
      </div>

      {/* Vidrios Eléctricos */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="vidriosElectricos" checked={filters.vidriosElectricos} onChange={handleChange} />
          {t('vidrios')}
        </label>
      </div>

      {/* Espejos Eléctricos */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="espejosElectricos" checked={filters.espejosElectricos} onChange={handleChange} />
          {t('espejos')}
        </label>
      </div>

      {/* Sensores Traseros */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresTraseros" checked={filters.sensoresTraseros} onChange={handleChange} />
          {t('sensoresTraseros')}
        </label>
      </div>

      {/* Sensores Delanteros */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresDelanteros" checked={filters.sensoresDelanteros} onChange={handleChange} />
          {t('sensoresDelanteros')}
        </label>
      </div>

      {/* Cámara de Retroceso */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="camaraRetroceso" checked={filters.camaraRetroceso} onChange={handleChange} />
          {t('camaraRetroceso')}
        </label>
      </div>

      {/* Cámara 360 */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="camara360" checked={filters.camara360} onChange={handleChange} />
          {t('camara360')}
        </label>
      </div>

      {/* Sensores Laterales */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresLaterales" checked={filters.sensoresLaterales} onChange={handleChange} />
          {t('sensoresLaterales')}
        </label>
      </div>

      {/* Tablero */}
      <div class={styles.filtros}>
        <label>{t('tablero')}</label>
        <select name="tablero" value={filters.tablero} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="100% táctil">{t('tactil')}</option>
          <option value="Análogo">{t('analogo')}</option>
          <option value="Ambos">{t('ambos')}</option>
        </select>
      </div>

      {/* Tapizado */}
      <div class={styles.filtros}>
        <label>{t('tapizado')}</label>
        <select name="tapizado" value={filters.tapizado} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="Cuero">{t('cuero')}</option>
          <option value="Plástico">{t('plastico')}</option>
          <option value="teTelala">{t('tela')}</option>
        </select>
      </div>

      {/* Sonido */}
      <div class={styles.filtros}>
        <label>{t('sonido')}</label>
        <select name="sonido" value={filters.sonido} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="Estéreo 7.1">{t('estereo')}</option>
          <option value="Estandar">{t('estandar')}</option>
        </select>
      </div>

      {/* Estado Vehículo */}
      <div class={styles.filtros}>
        <label>{t('estadoVehiculo')}</label>
        <select name="estadoVehiculo" value={filters.estadoVehiculo} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Leasing */}
      <div className={styles.filtros}>
        <label>
          <input type="checkbox" name="leasing" checked={filters.leasing} onChange={handleChange} />
          {t('leasing')}
        </label>
      </div>

      <div class={styles.filtros}>
        <button onClick={enviarFiltros} class={styles.botonFiltrar}>{t('filtrar')}</button>
      </div>
    </div>
  );
};

export default BarraFiltroBusquedaAutos;