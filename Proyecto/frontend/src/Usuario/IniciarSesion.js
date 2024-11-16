import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Alert, Container, Row, Card, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Header from '../Header';
import Footer from '../Footer';

const IniciarSesion = () => {
    const { t } = useTranslation();
    const { iniciarSesion } = useAuth();
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [activeTab, setActiveTab] = useState('usuario');
    const navigate = useNavigate();
    let errores = [];

    const [data, setData] = useState({
        user: '',
        correo: '',
        contra: '',
        contraCorreo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    //Verifica la contraseña
    const verificarContra = (cont) => {
        // Verificar contraseña
        if (cont === '') {
            errores.push(t('campoContra1'));
        } else {
            // Validar el largo
            const largo = cont.length;

            if(largo < 8 || largo > 15) {
                errores.push(t('campoContra2'));
            }

            //Validar los caracteres especiales. Se usara regex
            const regexEspeciales = /[\W_]/;
            const validarEspeciales = regexEspeciales.test(cont);

            if(!validarEspeciales) {
                errores.push(t('campoContra3'));
            }

            //Validar las mayúsculas. Se usara regex
            const regexMayuscula = /[A-Z]/;
            const validarMayuscula = regexMayuscula.test(cont);

            if(!validarMayuscula) {
                errores.push(t('campoContra4'));
            }

            //Validar las minúscula. Se usara regex
            const regexMinuscula = /[a-z]/;
            const validarMinuscula = regexMinuscula.test(cont);

            if(!validarMinuscula) {
                errores.push(t('campoContra5'));
            }
        }

        if (errores.length > 0) {
            return false; 
        }

        return true;
    }

    // Verifica si los datos del lado activo son correctos
    const verificarCorreo = () => {
        // Verificar el correo
        if (data.correo === '') {
            errores.push(t('campoCorreo1'));
        } else {
            // Verificar con regex si posee una @ y si no esta al principio o al final
            const correoRegex = /^[^@]+@[^@]+$/;
            const validarCorreo = correoRegex.test(data.correo);
            if(!validarCorreo) {
                errores.push(t('campoCorreo2'));
            }
        }

        const valiContra = verificarContra(data.contraCorreo);

        if (errores.length > 0 || !valiContra) {
            setMensaje(errores.join('.\n'));
            setShow(true); 
            return false; 
        }

        return true;
    }

    // Verifica los datos del lado de usuario
    const verificarUsuario = () => {
        // Verificar el user
        if (data.user === '') {
            errores.push(t('campoUser1'));
        } else {
            const usu = data.user;
            const largo = usu.length;
            if(largo < 5) {
                errores.push(t('campoUser2'));
            }
        }

        const valiContra = verificarContra(data.contra);

        if (errores.length > 0 || !valiContra) {
            console.log(errores);
            setMensaje(errores.join('\n\n'));
            setShow(true); 
            return false; 
        }

        return true; 
    };

    // Verifica si las credenciales del inicio de sesion son correctas
    const verificarSesion = () => {
        errores = [];

        // Verifica los dato dependiendo de la pestaña activa
        const esValido = activeTab === 'usuario' ? verificarUsuario() : verificarCorreo();

        if (esValido) {
            iniciarSesion(data.user || data.correo);
            navigate('/');
            // Lógica adicional para la API
        }
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            {show && (
                <Alert 
                    variant="warning" 
                    className="textStyle" 
                    onClose={() => setShow(false)} 
                    role="alert"
                    aria-live="assertive"
                    dismissible
                >
                    <Alert.Heading>{t('advertencia')}</Alert.Heading>
                    <p>{mensaje}</p>
                </Alert>
            )}

            <Container className="flex-grow-1 d-flex justify-content-center align-items-center" role="main" aria-labelledby="sign-in-title">
                <Row className="w-100">
                    <Col md={6} lg={4} className="mx-auto">
                        <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '500px' }} role="form" aria-describedby="iniciar-sesion-description">
                            <Card.Body className="p-5 d-flex flex-column">
                                <h2 id="log-in-title" className="fw-bold mb-2 text-center" style={{color: "#1f365d"}}>{t('inicioSesion')}</h2>
                                <p id="log-in-description" className="text-muted mb-4 text-center">{t('mensajeInicioSesion')}</p>

                                {/* Tabs selección inicio de sesión */}
                                <Tabs
                                    id="login-tabs"
                                    activeKey={activeTab}
                                    onSelect={(tab) => setActiveTab(tab)}
                                    className="mb-4"
                                    aria-label="opciones de login"
                                >
                                    <Tab eventKey="usuario" title={t('usuario')} aria-label={t('opcionesLogin')}>

                                        {/* Formulario para el User */}
                                        <Form aria-labelledby="inicio-sesion-usuario-form">
                                            <Form.Group className="mb-3" controlId="usuarioInput">
                                                <Form.Label style={{color: "#1f365d"}}>{t('usuario')}</Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    placeholder={t('placeHolderUsuario')} 
                                                    value={data.user}
                                                    onChange={handleChange}
                                                    name = "user"
                                                    aria-required="true" 
                                                    aria-describedby="usuarioHelp" />
                                                <Form.Text id="usuarioHelp" className="text-muted">{t('descripUser')}</Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="usuarioPasswordInput">
                                                <Form.Label style={{color: "#1f365d"}}>{t('contra')}</Form.Label>
                                                <Form.Control 
                                                    type="password" 
                                                    placeholder={t('placeHolderContra')}
                                                    value={data.contra}
                                                    onChange={handleChange}
                                                    name = "contra"
                                                    aria-required="true" 
                                                    aria-describedby="helpPassword" />
                                                <Form.Text id="passwordHelp" className="text-muted">{t('descripContra')}</Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Tab>

                                    <Tab eventKey="correo" title={t('correo')} aria-label="Inicio sesion con correo">
                                        {/* Formulario para wl correo */}
                                        <Form aria-labelledby="correo-login-form">
                                            <Form.Group className="mb-3" controlId="emailInput">
                                                <Form.Label style={{color: "#1f365d"}}>{t('placeHolderCorreo')}</Form.Label>
                                                <Form.Control 
                                                    type="email" 
                                                    placeholder={t('placeHolderCorreo')} 
                                                    value={data.correo}
                                                    onChange={handleChange}
                                                    name = "correo"
                                                    aria-required="true" 
                                                    aria-describedby="emailHelp" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="correoPasswordInput">
                                                <Form.Label style={{color: "#1f365d"}}>{t('contra')}</Form.Label>
                                                <Form.Control 
                                                    type="password" 
                                                    placeholder={t('placeHolderContra')} 
                                                    value={data.contraCorreo}
                                                    onChange={handleChange}
                                                    name = "contraCorreo"
                                                    aria-required="true" 
                                                    aria-describedby="emailPasswordHelp" />
                                                <Form.Text id="correoPasswordHelp" className="text-muted">{t('descripContra')}</Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Tab>
                                </Tabs>

                                <Button variant="primary" size="lg" className="mb-3" onClick={verificarSesion} aria-label="Login">
                                    {t('inicioSesion')}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default IniciarSesion;
