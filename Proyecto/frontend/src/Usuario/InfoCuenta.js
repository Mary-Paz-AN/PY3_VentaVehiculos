import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Form } from 'react-bootstrap';
import { getUsuario } from './Acceso';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';

const InfoCuenta = () => {
    const { t } = useTranslation();

    const [data, setData] = useState({
        user: '',
        correo: '',
        tipoIdentificacion: '',
        identificacion: '',
        nombreCompleto: '',
        nacionalidad: '',
        fechaNacimiento: '',
        direccion: ''
    });

    // Carga la información al iniciar ventana
    useEffect(() => {
        fetchInfo();
    }, []);

    // Fetch data from APi
    const fetchInfo = () => {
        const user = getUsuario();
        console.log(user);
        setData((prevData) => ({
            ...prevData,
            user: user,
            correo: 'mary@example.com',
            tipoIdentificacion: 'Cédula Fisica',
            identificacion: '123456789',
            nombreCompleto: 'Mary Paz Álvarez Navarrete',
            nacionalidad: 'Costarricense',
            fechaNacimiento: '2005-10-04',
            direccion: 'Limón, Limón, Limón',
        }));
        
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="flex-grow-1 d-flex justify-content-center align-items-center" role="main" aria-labelledby="myAccount-title">
                <Row className="w-100">
                    <Col md={8} lg={6} className="mx-auto">
                        <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '800px', width: '100%' }} role="form" aria-describedby="iniciar-sesion-description">
                            <Card.Body className="p-5 d-flex flex-column">
                                <h2 id="cuentaTittle" className="fw-bold mb-2 text-center" style={{color: "#1f365d"}}>{t('infoCuenta')}</h2>

                                {/* Formulario info User */}
                                <Form aria-labelledby="myAccount-form">

                                    {/* Pregunatar por el correo */}
                                    <Form.Group className="mb-3" controlId="emailInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('correo')}</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            value={data.correo} 
                                            name = "correo"
                                            aria-required="true" 
                                            aria-describedby="emailInfo" 
                                            readOnly/>
                                    </Form.Group>

                                    {/* Usuario */}
                                    <Form.Group className="mb-3" controlId="usuarioInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('usuario')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.user}
                                            name = "user"
                                            aria-required="true" 
                                            aria-describedby="usuarioInfo" 
                                            readOnly/>
                                    </Form.Group>

                                    <br/>

                                    {/* Tipos de identificaciones */}
                                    <Form.Group className="mb-3" controlId="tipoIdendInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('tipoIdentificacion')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.tipoIdentificacion}
                                            name = "tipoIdentificacion"
                                            aria-required="true" 
                                            aria-describedby="tipoIdentificacionInfo" 
                                            readOnly/>
                                    </Form.Group>

                                    {/* Identificación */}
                                    <Form.Group className="mb-3" controlId="identificacionInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('identificacion')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.identificacion}
                                            name = "identificacion"
                                            aria-required="true" 
                                            aria-describedby="identificacionInfo" 
                                            readOnly/>
                                    </Form.Group>

                                    {/* Nombre Compleo */}
                                    <Form.Group className="mb-3" controlId="nombreCompletoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('nombre')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.nombreCompleto}
                                            name = "nombreCompleto"
                                            aria-required="true" 
                                            aria-describedby="infoNombreCompleto" 
                                            readOnly/>
                                    </Form.Group>

                                    {/* Nacionalidad */}
                                    <Form.Group className="mb-3" controlId="nacionalidadInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('nacionalidad')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.nacionalidad}
                                            name = "nacionalidad"
                                            aria-required="true" 
                                            aria-describedby="infoNacionalidad" 
                                            readOnly/>
                                    </Form.Group>

                                    {/* Fecha Nacimiento */}
                                    <Form.Group className="mb-3" controlId="fechaNacimientoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('fechaNacimiento')}</Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            value={data.fechaNacimiento}
                                            name = "fechaNacimiento"
                                            aria-required="true" 
                                            aria-describedby="infoFechaNacimiento" 
                                            readOnly/>
                                    </Form.Group>

                                    <br/>
                                                                          
                                    {/* Direccion */}
                                    <Form.Group className="mb-3" controlId="direccionInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('direccionUsuario')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.direccion}
                                            name = "direccion"
                                            aria-required="true" 
                                            aria-describedby="infoDireccion" 
                                            readOnly/>
                                        <Form.Text id="direccionHep" className="text-muted">{t('descripDireccion')}</Form.Text>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default InfoCuenta;
