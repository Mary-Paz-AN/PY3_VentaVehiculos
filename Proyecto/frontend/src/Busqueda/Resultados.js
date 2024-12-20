import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
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

  const traerVehiculos = async (datosJSON) => {
    try {
      console.log(datosJSON);
      const response = await fetch("/filtrarAutosBusqueda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosJSON), // Convertir el objeto datosJSON a una cadena JSON
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json(); // Suponiendo que el servidor responde con JSON
      console.log("Vehículos recibidos:", data);
      setAutos(data);

      return data; // Devuelve los datos recibidos si es necesario
    } catch (error) {
      console.error("Error al traer los vehículos:", error);
      return null; // Manejo de errores: devolver null o manejarlo según tu lógica
    }
  };

  const barraRef = useRef(null);

  const handleAgregarAuto = (id, marca, modelo) => {
    const auto = { id, marca, modelo }
    if (barraRef.current) {
      barraRef.current.ingresarAuto(auto);
    }
  };

  return (
    <div class={styles.contenedorPrincipal}>
      <Header />

      <div className={styles.containerFluid}>
        <div className={styles.sidebar}>
          <BarraFiltroBusquedaAutos traerVehiculos={traerVehiculos} />
        </div>

        {/* Resultados de búsqueda */}
        <div className={styles.resultadosAutos}>
          <div className="row">
            {autos.map((auto) => (
              <div key={auto.id} className="col-md-4 mb-4 d-flex justify-content-center">
                <div className={`card ${styles['result-card']}`}>
                  {/* Imagen del vehículo */}
                  <img
                    src="/images/logo.png"
                    alt={`${auto.marca} ${auto.modelo}`}
                    className={`card-img-top ${styles['auto-imagen']}`}
                  />

                  <div className="card-body">
                    {/* Marca y modelo */}
                    <h6 className="card-title">{auto.marca}</h6>
                    <p className="card-text">{auto.modelo}</p>
                    <p><strong className="card-text">₡{auto.precio}</strong></p>

                    {/* Botones Ver y Comparar */}
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => navigate(`/detalleVehiculo/${auto.id}`)}
                    >
                      {t('ver')}
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleAgregarAuto(auto.id, auto.marca, auto.modelo)}
                    >
                      {t('comparar')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <BarraComparaciones ref={barraRef} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuscarAutos;
