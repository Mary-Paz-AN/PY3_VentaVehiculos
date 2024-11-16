import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Alert, Button, ListGroup } from 'react-bootstrap';
//import { getUsuario } from './Acceso';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Publicaciones = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [publicaciones, SetPublicaciones] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
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

    // Carga la información al iniciar ventana
    useEffect(() => {
        fetchData();
    }, []);

    // Verifica si existen publicaciones hechas por el usuario
    useEffect(() => {
        const noVacio = publicaciones.length > 0 && publicaciones.every(item => Object.keys(item).length > 0);
        setShow(!noVacio);
    }, [publicaciones]);

    // Consigue las publicaicones hechas por el usuario
    const fetchData = () => {
        //Logica API
        const data = [
            {
                id: 1,
                placa: 'NUT-879',
                marcaModelo: 'Toyota SM-99',
                tipo: 'Sedán',
                motor: 'Diesel',
                year: '2015',
                precio: '10000',
                foto:'/images/car.jpg'
            },
            {
                id: 2,
                placa: 'NUT-879',
                marcaModelo: 'Toyota SM-99',
                tipo: 'Sedán',
                motor: 'Diesel',
                year: '2015',
                precio: '10000',
                foto:'/images/car.jpg'
            },
            {
                id: 3,
                placa: 'NUT-879',
                marcaModelo: 'Toyota SM-99',
                tipo: 'Sedán',
                motor: 'Diesel',
                year: '2015',
                precio: '10000',
                foto:'/images/car.jpg'
            },
            {
                id: 4,
                placa: 'NUT-879',
                marcaModelo: 'Toyota SM-99',
                tipo: 'Sedán',
                motor: 'Diesel',
                year: '2015',
                precio: '10000',
                foto:'/images/car.jpg'
            }
        ];

        SetPublicaciones(data);
    };

    // Navega al formulario para crear una publicacion
    const crearPublicacion = () => {
        navigate(`/publicaciones/crearPublicacion/${null}`);
    }

    // Navega a la ventana para ver la info de la publicaciones
    const verPublicacion = (idPublicacion) => {
        navigate(`/publicaciones/verPublicacion/${idPublicacion}`);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />

            <div style={{margin: '20px'}}></div>

            <Container style={{flex: '1'}}>
                <Row className="justify-content-center mb-4">
                    <h1 className="text-center" style={{ color: "#1f365d" }}>{t('misPublicaciones')}</h1>
                </Row>
    
                <Row>
                    {isSmallScreen ? (
                        <><Col style={{maxWidth: '5px'}}></Col>
                        <Col className="d-flex justify-content-center">
                            <Button variant="success" onClick={crearPublicacion}>{t('pubButtonCard')}</Button>
                        </Col>
                        <Col style={{maxWidth: '5px'}}></Col>
                        <div style={{margin: '10px'}}></div></>
                    ) : (
                        <><Col ></Col>
                        <Col></Col>
                        <Col className="d-flex justify-content-end mb-4">
                            <Button variant="success" onClick={crearPublicacion}>{t('pubButtonCard')}</Button>
                        </Col></>
                    )}
                </Row>

    
                <Row className="g-4">
                    {/* Ventana de advertencia */}
                    {show ? (
                        <Alert 
                            variant="primary" 
                            className="textStyle" 
                            onClose={() => setShow(false)} 
                            role="alert"
                            aria-live="assertive"
                            dismissible>
                            <Alert.Heading>{t('noPublicaciones')}</Alert.Heading>
                            <p>
                                {t('descripNoPub')}
                            </p>
                        </Alert>
                    ) : (
                        publicaciones.map((publicacion, index) => (
                            <Col xs={12} sm={6} md={3} key={index}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={publicacion.foto} />
                                    <Card.Body>
                                        <Card.Title>{publicacion.marcaModelo}</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{t('placa')}: {publicacion.placa}</ListGroup.Item>
                                            <ListGroup.Item>{t('motor')}: {publicacion.motor}</ListGroup.Item>
                                            <ListGroup.Item>{t('tipo')}: {publicacion.tipo}</ListGroup.Item>
                                            <ListGroup.Item>{t('year')}: {publicacion.year}</ListGroup.Item>
                                            <ListGroup.Item>{t('precio')}: {publicacion.precio}</ListGroup.Item>
                                        </ListGroup>
                                        <br/>
                                        <Container>
                                            <Row className="justify-content-center g-3">
                                                <Col xs={12} md={4} className="text-center">
                                                    <Button onClick={() => verPublicacion(publicacion.id)} variant="primary" style={{ width: '100%' }}>⌕</Button>
                                                </Col>
                                                <Col xs={12} md={4} className="text-center">
                                                    <Button variant="success" style={{ width: '100%' }}>✎</Button>{/** */}
                                                </Col>
                                                <Col xs={12} md={4} className="text-center">
                                                    <Button variant="danger" style={{ width: '100%' }}>🗑</Button>{/** */}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>

            <div style={{margin: '20px'}}></div>
            <Footer />
        </div>
    );
    
};

export default Publicaciones;
