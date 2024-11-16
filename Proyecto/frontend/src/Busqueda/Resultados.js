import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './BuscarAutos.module.css';
import BarraFiltroBusquedaAutos from './BarraFiltros';
import BarraComparaciones from './BarraComparaciones';

const BuscarAutos = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [autos, setAutos] = useState([]);

  const traerVehiculos = () => {
    // Implementación de la función para traer los vehículos
  };

  const barraRef = useRef();

  const handleAgregarAuto = (id, marca, modelo) => {
    const auto = {id, marca, modelo}
    if (barraRef.current) {
      barraRef.current.ingresarAuto(auto);
    }
  };

  return (
    <div class = {styles.contenedorPrincipal}>
      <Header />

      <div className={styles.containerFluid}>
        <div className={styles.sidebar}>
          <BarraFiltroBusquedaAutos onSearch={() => traerVehiculos()} />
        </div>

        {/* Resultados de búsqueda */}
        <div class={styles.resultadosAutos}>
          <div className="row">
            {autos.map((auto) => (
              <div key={auto.id} className="col-md-4 mb-4">
                <div className={`card ${styles['result-card']}`}>
                  {/* Imagen del vehículo */}
                  <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} className={`card-img-top ${styles['auto-imagen']}`} />

                  <div className="card-body">
                    {/* Marca y modelo */}
                    <h6 className="card-title">{auto.marca} {auto.modelo}</h6>
                    <p className="card-text">{t('Descripción breve del auto')}</p>

                    {/* Botones Ver y Comparar */}
                    <button className="btn btn-primary mr-2" onClick={() => navigate(`/ver-auto/${auto.id}`)}>
                      {t('ver')}
                    </button>
                    <button className="btn btn-secondary" onClick={() => handleAgregarAuto(auto.id, auto.marca, auto.modelo)}>
                      {t('comparar')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BarraComparaciones/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuscarAutos;
