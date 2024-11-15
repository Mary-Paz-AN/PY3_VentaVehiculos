import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './BuscarAutos.module.css';
import BarraFiltroBusquedaAutos from './BarraFiltros';

const BuscarAutos = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div class={styles.containerFluid}>
        <div class={styles.sidebar}>
          <BarraFiltroBusquedaAutos />
        </div>

        {/* Resultados de búsqueda */}
        <div className="col-md-9">
          <div className={styles['results-grid']}>
            {[...Array(9)].map((_, index) => (
              <div key={index} className={`col-md-4 ${styles['result-card']}`}>
                <h6>{t('Auto')} {index + 1}</h6>
                <p>{t('Descripción breve del auto')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuscarAutos;
