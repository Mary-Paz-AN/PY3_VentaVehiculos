import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Button, Card, Alert } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { getUsuario } from './Usuario/Acceso';
import { useNavigate } from 'react-router-dom';
 
function Inicio() {
  const { t } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 987);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  // Abre la ventana de mis publicaciones
  const crearPublicacion = () => {
    navigate('/publicaciones/crearPublicacion');
  }

  // Verifica si el usuario esta registrado e inicio sesion
  const esUsuarioRegistrado = (tipo) => {
    const usuario = getUsuario();

    if(usuario === null) {
      setShow(true);
    } else {
      //Si es una publicación lo lleva al apartado
      if(tipo === 1) {
        crearPublicacion();
      }

    } 
    
  };

  const irPublicacionesAutos = () =>{
    navigate('/buscarAutos');
  }

  return (
    <div className="App">
      <Header />
        <Carousel className="custom-carousel" role="region" aria-label="Image Carousel" aria-hidden="true">
          <Carousel.Item role="group" aria-roledescription="slide">
            <img
              className="d-block w-100"
              src="/images/Carrusel1.png"
              alt={t('imagen1C')}
            />
            <Carousel.Caption className="carousel-caption-custom" aria-live="polite">
              {isSmallScreen ? (
                <h1>Ventas Mi Cacharrito</h1>
              ) : (
                <><h1>Ventas Mi Cacharrito</h1>
                <p>{t('descriCionC')}</p>
                <Button className='buttonStyle' aria-label={t('verAutosB')}>{t('verAutosB')}</Button></>
              )}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item role="group" aria-roledescription="slide">
            <img
              className="d-block w-100"
              src="/images/Carrusel2.png"
              alt={t('imagen2C')}
            />
            <Carousel.Caption className="carousel-caption-custom" aria-live="polite">
              {isSmallScreen ? (
                <h1>Ventas Mi Cacharrito</h1>
              ) : (
                <><h1>Ventas Mi Cacharrito</h1>
                <p>{t('descriCionC')}</p>
                <Button className='buttonStyle' aria-label={t('verAutosB')}>{t('verAutosB')}</Button></>
              )}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item role="group" aria-roledescription="slide">
            <img
              className="d-block w-100"
              src="/images/Carrusel3.png"
              alt={t('imagen3C')}
            />
            <Carousel.Caption className="carousel-caption-custom" aria-live="polite">
              {isSmallScreen ? (
                <h1>Ventas Mi Cacharrito</h1>
              ) : (
                <><h1>Ventas Mi Cacharrito</h1>
                <p>{t('descriCionC')}</p>
                <Button className='buttonStyle' aria-label={t('verAutosB')}>{t('verAutosB')}</Button></>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Inicio cards para ir a otras sesiones*/}
        <Container className="textStyle">
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                  <Card.Title style={{color: "#1f365d"}}>{t('pubTituloCard')}</Card.Title>
                  <Card.Text>
                    {t('publiTextCard')}
                  </Card.Text>
                  <Button variant="primary" onClick={() => esUsuarioRegistrado(1)} aria-label={t('pubButtonCard')}>{t('pubButtonCard')}</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                  <Card.Title style={{color: "#1f365d"}}>{t('compTituloCard')}</Card.Title>
                  <Card.Text>
                    {t('compTextCard')}
                  </Card.Text>
                  <Button variant="primary" aria-label={t('compButtonCard')} onClick={irPublicacionesAutos}>{t('compButtonCard')}</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <Card style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                  <Card.Title style={{color: "#1f365d"}}>{t('resTituloCard')}</Card.Title>
                  <Card.Text>
                    {t('resTextCard')}
                  </Card.Text>
                  <Button variant="primary" onClick={() => esUsuarioRegistrado(2)} aria-label={t('resButtonCard')}>{t('resButtonCard')}</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>

        {/* Ventana de advertencia */}
        { show && (
          <Alert 
            variant="warning" 
            className="textStyle" 
            onClose={() => setShow(false)} 
            role="alert"
            aria-live="assertive"
              dismissible>
            <Alert.Heading>{t('advertencia')}</Alert.Heading>
            <p>
              {t('advertenciaRegister')}
            </p>
          </Alert>
        )}

        <div style={{margin: '20px'}}></div>
      <Footer />
    </div>
  );
}

export default Inicio;
