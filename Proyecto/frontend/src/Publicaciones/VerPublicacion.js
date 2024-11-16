import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const VerPublicacion = () => {
    const { t } = useTranslation();
    const { idPublicacion } = useParams(); 
    const navigate = useNavigate();

    const [data, setData] = useState({
        placa: '',
        marca: '',
        modelo: '',
        anio: '',
        tipo: '',
        motor: '',
        sistemaSonido: '',
        tablero: '',
        cantidadPuertas: '',
        estado: '',
        asientos: '',//eq
        tapizado: '',//eq
        sensorTrasero: false,//eq
        sensorDelantero: false,//eq
        sensorLateral: false,//eq
        camaraRetroceso: false,//eq
        camara360: false,//eq
        traccion: '',
        vidriosElec: false,//eq
        espejosElec: false,//eq
        transmision: '',
        largo: 0.0,//d
        alto: 0.0,//d
        ancho: 0.0,//d
        precio: 0.0,//pa
        negociable: false,//pa
        recibeVehiculo: false,//pa
        leasing: false,//pa
        fotosInternas: [],
        fotosExternas: [],
    });

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            placa: 'NUT-879',
            marca: 'Toyota',
            modelo: 'SM-99',
            anio: '2015',
            tipo: 'Sedán',
            motor: 'Diesel',
            sistemaSonido: 'Estándar',
            tablero: 'Ambos',
            cantidadPuertas: '4',
            estado: '2',
            asientos: 'Tela',
            tapizado: 'Plastco',
            sensorTrasero: false,
            sensorDelantero: false,
            sensorLateral: false,
            camaraRetroceso: true,
            camara360: false,
            traccion: '4x4',
            vidriosElec: true,
            espejosElec: true,
            transmision: 'Manual',
            largo: 120.0,
            alto: 60.0,
            ancho: 80.0,
            precio: 10000.0,
            negociable: true,
            recibeVehiculo: false,
            leasing: false,
            fotosInternas: ['/images/car.jpg', '/images/car.jpg', '/images/car.jpg', '/images/Carrusel1.png'],
            fotosExternas: ['/images/car.jpg', '/images/car.jpg', '/images/car.jpg', '/images/Carrusel2.png'],
        }));
    }, [])

    // LLeva al formulario crear una publicacion pero como plantilla
    const publicacionPlantilla = () => {
        const encodedData = encodeURIComponent(JSON.stringify(data));
        navigate(`/publicaciones/crearPublicacion/${encodedData}`);
    }

    
    // Vuelve a mis publicaciones 
    const misPublicaciones = () => {
        console.log(idPublicacion);
        navigate('/publicaciones/misPublicaciones');
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />
            <div style={{margin: '20px'}}></div>

            <Container style={{flex: '1'}}>
                {/* Titulo que sera la marca junto al modelo */}
                <Row className="justify-content-center mb-4">
                    <h1 className="text-center" style={{ color: "#1f365d" }}>{data.marca} {data.modelo}</h1>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-start">
                        <Button variant="primary" onClick={misPublicaciones}>⭠</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="success" onClick={publicacionPlantilla}>{t('plantillaAuto')}</Button>
                    </Col>
                    <div style={{margin: '10px'}}></div>
                </Row>

                <Row>
                    <Col xs={12} md={8}> 
                        <h1>HOLA</h1>
                    </Col>

                    <Col xs={6} md={4}>
                        <h1>HOLA</h1>
                    </Col>
                </Row>

            </Container>

            <div style={{margin: '20px'}}></div>
            <Footer />
        </div>
    );
    
};

export default VerPublicacion;
