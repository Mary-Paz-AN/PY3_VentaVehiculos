import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import styles from './BarraComparaciones.module.css';
import basurero from "./imagenes/basurero.png"

const BarraComparaciones = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [compararAutos, setCompararAutos] = useState([]);
  const [autosAgregados, setAutosAgregados] = useState(0);
  const { t } = useTranslation();

  // Función para alternar la expansión de la barra
  const toggleBarra = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para navegar a la página de comparación
  const irAComparacion = () => {
    navigate('/compararAutos', {
      state: {
        autosSeleccionados: compararAutos
      }
    });
  };

  const ingresarAuto = (auto) => {
    if(compararAutos.some(elemento => elemento.id === auto.id)){
      alert(t("alertaComparacionRepetida"));
      return;
    }
    else if(autosAgregados >= 3){
      alert(t("alertaCantidadComparacionesMaxima"));
      return;
    }
    else{
      compararAutos.push(auto);
      setCompararAutos(compararAutos);
      setAutosAgregados(autosAgregados + 1);
    }
    const elemento = document.getElementById("BotonIrComparaciones");
    if(autosAgregados > 0){
      elemento.style.visibility = "visible";
    }
  };

  const eliminarAuto = (id) => {
    const autosActualizados = compararAutos.filter(auto => auto.id !== id);
    setCompararAutos(autosActualizados);
    setAutosAgregados(autosAgregados - 1);
    const elemento = document.getElementById("BotonIrComparaciones");
    if(autosAgregados <= 2){
      elemento.style.visibility = "hidden";
    }
  }

  // Exponer la función al padre
  useImperativeHandle(ref, () => ({
    ingresarAuto,
  }));

  return (
    <div className={`${styles.barraComparaciones} ${isExpanded ? styles.expanded : ''}`}>
      <button className="btn btn-primary barraComparaciones" onClick={toggleBarra}>
        {isExpanded ? t('botonOcultar') : t('botonComparar')}
      </button>

      {isExpanded && (
        <div className={styles.compararContenido}>
          <h5>{t('compararAutos')}</h5>
          <ul className="list-group">
            {compararAutos.map((auto) => (
              <li key={auto.id} class = {styles.autoEnComparacion}>
              {auto.marca} {auto.modelo}
                <button class = {styles.imagenBasurero} onClick={() => eliminarAuto(auto.id)}>
                  <img src={basurero} class = {styles.imagenBasurero}/>
                </button>
              </li>
            ))}
          </ul>
          <button id = "BotonIrComparaciones" class = {styles.botonIrComparaciones} onClick={irAComparacion}>
            {t('irComparacion')}
          </button>
        </div>
      )}
    </div>
  );
});

export default BarraComparaciones;