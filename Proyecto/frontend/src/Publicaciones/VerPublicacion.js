import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ListGroup, Carousel, Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './AutoImage.css';

const VerPublicacion = () => {
    const { t } = useTranslation();
    const { idPublicacion } = useParams(); 
    const [imagenGrande, setImagenGrande] = useState('');
    const [grupoFotos, setGrupoFotos] = useState([]);
    const [fotos, setFotos] = useState([]);
    const [key, setKey] = useState('infoGeneral');
    const navigate = useNavigate();

    const [data, setData] = useState({});

    // Función para unir las fotos
    const unirFotos = (internas, externas) => {
        const resultado = [];
        let j = 0;

        for (let i = 0; i < 8; i++) {

            if(i < 4) {
                resultado.push(internas[i]);
            } else {
                resultado.push(externas[j]);
                j++;
            }
            
        }

        return resultado;
    };

    //Crea una lista con la lista de las externas y internas
    const crearGrupo = (internas, externas) => {
        const resultado = [];

        resultado.push(internas);
        resultado.push(externas);

        return resultado;
    };

    useEffect(() => {
        const nuevaData = {
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
            tapizado: 'Plástico',
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
            fechaPublicacion: '2024-10-04 12:30:89',
            fechaModificacion: '2024-10-04 12:30:89',
            fotosInternas: ['/images/car.jpg', '/images/car.jpg', '/images/car.jpg', '/images/Carrusel1.png'], 
            fotosExternas: ['/images/car.jpg', '/images/car.jpg', '/images/car.jpg', '/images/Carrusel2.png'],
        };
    
        setData(nuevaData);
        setImagenGrande(nuevaData.fotosExternas[0]); 

        // Crear un solo arreglo de fotos
        const fotosUnidas = unirFotos(nuevaData.fotosInternas, nuevaData.fotosExternas);
        setFotos(fotosUnidas);

        // Dividir las fotos en grupo de 4
        const grupo = crearGrupo(nuevaData.fotosInternas, nuevaData.fotosExternas);
        setGrupoFotos(grupo)
    
    }, []); 
    

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

    // Cambia la imagen que se ve
    const cambiarImagenGrande = (nuevaImagen) => {
        setImagenGrande(nuevaImagen);
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
                        <Row className="largeImage d-flex justify-content-center">
                            <img src={imagenGrande} alt={t('fotoGrande')}/>
                        </Row>

                        {/* Carrusel para las fotos pequeñas */}
                        <Row className='smallImages'>
                            <Carousel
                                interval={null} 
                                controls={fotos.length > 4} 
                                indicators={false} 
                            >
                                {grupoFotos.map((grupo, index) => (
                                    <Carousel.Item key={index}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            {grupo.map((foto, subIndex) => (
                                                <img
                                                    key={subIndex}
                                                    src={foto}
                                                    alt={`${t('foto')} ${index * 4 + subIndex + 1}`}
                                                    onClick={() => cambiarImagenGrande(foto)}
                                                    style={{ width: '23%' }} 
                                                />
                                            ))}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Row>

                    </Col>

                    <Col xs={12} md={4}>
                        <Tabs
                            id={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            aria-label="opciones de información"
                        >
                            {/* Información General */}
                            <Tab eventKey="infoGeneral" title={t('infoGeneral')} aria-label='tab de informacion general'>
                                <ListGroup variant="flush" >
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('placa')}</span>
                                        <span className="datoInfo">{data.placa}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('year')}</span>
                                        <span className="datoInfo">{data.anio}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('tipo')}</span>
                                        <span className="datoInfo">{data.tipo}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('motor')}</span>
                                        <span className="datoInfo">{data.motor}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('traccion')}</span>
                                        <span className="datoInfo">{data.traccion}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('transmision')}</span>
                                        <span className="datoInfo">{data.transmision}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('sistemaSonido')}</span>
                                        <span className="datoInfo">{data.sistemaSonido}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('tablero')}</span>
                                        <span className="datoInfo">{data.tablero}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('cantidadPuertas')}</span>
                                        <span className="datoInfo">{data.cantidadPuertas}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('estadoV')}</span>
                                        <span className="datoInfo">{data.estado}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('fechaPublicacion')}</span>
                                        <span className="datoInfo">{data.fechaPublicacion}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('fechaModificacion')}</span>
                                        <span className="datoInfo">{data.fechaModificacion ? data.fechaModificacion : t('fechaModiMenj')}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Tab>

                            {/* Equipamiento */}
                            <Tab eventKey="equpamiento" title={t('equpamiento')} aria-label='tab de informacion sobre el equpamiento'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('asiento')}</span>
                                        <span className="datoInfo">{data.asientos}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('tapizadoM')}</span>
                                        <span className="datoInfo">{data.tapizado}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('sensoresTraseros')}</span>
                                        <span className="datoInfo">{data.sensorTrasero ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('sensoresDelanteros')}</span>
                                        <span className="datoInfo">{data.sensorDelantero ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('sensoresLaterales')}</span>
                                        <span className="datoInfo">{data.sensorLateral ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('camaraRetroceso')}</span>
                                        <span className="datoInfo">{data.camaraRetroceso ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('camara360')}</span>
                                        <span className="datoInfo">{data.camara360 ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('electricoVidrio')}</span>
                                        <span className="datoInfo">{data.vidriosElec ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('espejosElectricos')}</span>
                                        <span className="datoInfo">{data.espejosElec ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Tab>

                            {/* Dimensiones del vehiculo*/}
                            <Tab eventKey="dimensiones" title={t('tabDimensiones')} aria-label='tab de informacion sobre las dimensiones'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('largo')}</span>
                                        <span className="datoInfo">{data.largo}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('altura')}</span>
                                        <span className="datoInfo">{data.alto}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('anchura')}</span>
                                        <span className="datoInfo">{data.ancho}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Tab>

                            {/* Información sobre el pago del vehiculo */}
                            <Tab eventKey="pago" title={t('pago')} aria-label='tab de informacion sobre el pago'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('precioColones')}</span>
                                        <span className="datoInfo">{data.precio}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('precioNegocible')}</span>
                                        <span className="datoInfo">{data.negociable ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('vehiculoComoPago')}</span>
                                        <span className="datoInfo">{data.recibeVehiculo ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                        <span className="tituloInfo">{t('leasing')}</span>
                                        <span className="datoInfo">{data.leasing ? "✓" : "X"}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

            </Container>

            <div style={{margin: '20px'}}></div>
            <Footer />
        </div>
    );
    
};

export default VerPublicacion;
