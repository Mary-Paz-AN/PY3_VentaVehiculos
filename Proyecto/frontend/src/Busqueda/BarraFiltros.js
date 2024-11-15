import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BarraFiltroBuscarAuto.module.css';

const BarraFiltroBusquedaAutos = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    marca: '',
    modelo: '',
    año: '',
    placa: '',
    precio: '',
    negociable: false,
    aceptaVehiculos: false,
    fotosInternas: [],
    fotosExternas: [],
    transmisionTipo: '',
    puertas: '',
    dimensiones: { largo: '', ancho: '', alto: '' },
    materialAsientos: '',
    motor: '',
    vidriosElectricos: false,
    espejosElectricos: false,
    sensoresTraseros: false,
    sensoresDelanteros: false,
    camaraRetroceso: false,
    camara360: false,
    sensoresLaterales: false,
    tablero: '',
    tipoTransmision: '',
    tapizado: '',
    sonido: '',
    estadoVehiculo: '',
    leasing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className={styles.barraLateral}>
      <h5 class = {styles.contenedorTitulo}>{t('Filtros')}</h5>

      <div class = {styles.filtros}>
        <label>{t('marca')}</label>
        <input type="text" name="marca" value={filters.marca} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>{t('modelo')}</label>
        <input type="text" name="modelo" value={filters.modelo} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>{t('year')}</label>
        <input type="number" name="año" value={filters.año} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>{t('placa')}</label>
        <input type="text" name="placa" value={filters.placa} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>{t('precio')}</label>
        <input type="number" name="precio" value={filters.precio} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="negociable" checked={filters.negociable} onChange={handleChange} />
          {t('precioNegocible')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="aceptaVehiculos" checked={filters.aceptaVehiculos} onChange={handleChange} />
          {t('vehiculoComoPago')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>{t('fotosInternas')}</label>
        <input type="file" name="fotosInternas" multiple onChange={handleChange} accept="image/*" />
      </div>

      <div class = {styles.filtros}>
        <label>{t('fotosExternas')}</label>
        <input type="file" name="fotosExternas" multiple onChange={handleChange} accept="image/*" />
      </div>

      <div class = {styles.filtros}>
        <label>{t('transmision')}</label>
        <select name="transmisionTipo" value={filters.transmisionTipo} onChange={handleChange}>
          <option value="">{t('seleccionar')}</option>
          <option value="sencillo">{t('tipoTransmision')}</option>
          <option value="4x4">4x4</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('cantidadPuertas')}</label>
        <input type="number" name="puertas" value={filters.puertas} onChange={handleChange} />
      </div>

      <div class = {styles.filtrosDimensiones}>
        <label>{t('dimensiones')}</label>
        <input type="number" placeholder={t('altura')} name="dimensiones.largo" value={filters.dimensiones.largo} onChange={handleChange} />
        <input type="number" placeholder={t('anchura')} name="dimensiones.ancho" value={filters.dimensiones.ancho} onChange={handleChange} />
        <input type="number" placeholder={t('largo')} name="dimensiones.alto" value={filters.dimensiones.alto} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>{t('materialAsientos')}</label>
        <select name="materialAsientos" value={filters.materialAsientos} onChange={handleChange}>
          <option value="">{t('seleccionar')}</option>
          <option value="tela">{t('tela')}</option>
          <option value="cuero">{t('cuero')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('motor')}</label>
        <select name="motor" value={filters.motor} onChange={handleChange}>
          <option value="">{t('seleccionar')}</option>
          <option value="gasolina">{t('gasolina')}</option>
          <option value="diesel">{t('diesel')}</option>
          <option value="gas">{t('gasLicuado')}</option>
          <option value="electrico">{t('electrico')}</option>
          <option value="hibrido">{t('hibrido')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="vidriosElectricos" checked={filters.vidriosElectricos} onChange={handleChange} />
          {t('vidriosElectricos')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="espejosElectricos" checked={filters.espejosElectricos} onChange={handleChange} />
          {t('espejosElectricos')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresTraseros" checked={filters.sensoresTraseros} onChange={handleChange} />
          {t('sensoresTraseros')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresDelanteros" checked={filters.sensoresDelanteros} onChange={handleChange} />
          {t('sensoresDelanteros')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="camaraRetroceso" checked={filters.camaraRetroceso} onChange={handleChange} />
          {t('camaraRetroceso')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="camara360" checked={filters.camara360} onChange={handleChange} />
          {t('camara360')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="sensoresLaterales" checked={filters.sensoresLaterales} onChange={handleChange} />
          {t('sensoresLaterales')}
        </label>
      </div>

      <div class = {styles.filtros}>
        <label>{t('tablero')}</label>
        <select name="tablero" value={filters.tablero} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="tactil">{t('tactil')}</option>
          <option value="analogo">{t('analogo')}</option>
          <option value="ambos">{t('ambos')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('tipoTransmision')}</label>
        <select name="tipoTransmision" value={filters.tipoTransmision} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="manual">{t('manual')}</option>
          <option value="automatico">{t('automatico')}</option>
          <option value="dual">{t('dual')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('tapizado')}</label>
        <select name="tapizado" value={filters.tapizado} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="cuero">{t('cuero')}</option>
          <option value="plastico">{t('plastico')}</option>
          <option value="tela">{t('tela')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('sonido')}</label>
        <select name="sonido" value={filters.sonido} onChange={handleChange}>
          <option value="">{t('seleccione')}</option>
          <option value="estereo">{t('estereo')}</option>
          <option value="estandar">{t('estandar')}</option>
        </select>
      </div>

      <div class = {styles.filtros}>
        <label>{t('estadoVehiculo')}</label>
        <input type="number" name="estadoVehiculo" min="1" max="5" value={filters.estadoVehiculo} onChange={handleChange} />
      </div>

      <div class = {styles.filtros}>
        <label>
          <input type="checkbox" name="leasing" checked={filters.leasing} onChange={handleChange} />
          {t('leasing')}
        </label>
      </div>
    </div>
  );
};

export default BarraFiltroBusquedaAutos;
