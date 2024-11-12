import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Usuario/AuthContext';
import './i18n';

const Header = () => {
    const { isLogIn, cerrarSesion } = useAuth();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const cambiarIdioma = (lng) => {
        i18n.changeLanguage(lng);
    };

    const iniciarSesion = () => {
        navigate('/usuario/iniciarSesion');
    };

    const registrarse = () => {
        navigate('/usuario/registrarse');
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" aria-label={t('barraNavegacion')}>
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        src='/images/logoPeq.png'
                        alt={t('altLogo')}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='textStyle'>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" aria-label={t('inicio')}>{t('inicio')}</Nav.Link>
                        <Nav.Link href="#home" aria-label={t('autos')}>{t('autos')}</Nav.Link>

                        {isLogIn ? (
                            <>
                                <Nav.Link href="#home" aria-label={t('publicacion')}>{t('publicacion')}</Nav.Link>
                                <Nav.Link href="#home" aria-label={t('reserva')}>{t('reserva')}</Nav.Link>
                                <NavDropdown id="basic-nav-dropdown" title={t('cuenta')} aria-label={t('menuCuenta')} aria-haspopup="true">
                                    <NavDropdown.Item href="#home" aria-label={t('infoCuenta')}>{t('infoCuenta')}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={cerrarSesion} aria-label={t('cerrarSesion')}>{t('cerrarSesion')}</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown id="basic-nav-dropdown" title={t('idioma')} aria-label={t('menuIdioma')} aria-haspopup="true">
                                    <NavDropdown.Item onClick={() => cambiarIdioma('es')} aria-label={t('espanol')}>{t('espanol')}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => cambiarIdioma('en')} aria-label={t('ingles')}>{t('ingles')}</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <NavDropdown id="basic-nav-dropdown" title={t('idioma')} aria-label={t('menuIdioma')} aria-haspopup="true">
                                    <NavDropdown.Item onClick={() => cambiarIdioma('es')} aria-label={t('espanol')}>{t('espanol')}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => cambiarIdioma('en')} aria-label={t('ingles')}>{t('ingles')}</NavDropdown.Item>
                                </NavDropdown>
                                <div style={{margin: '5px'}}></div>
                                <Button aria-label={t('registrarse')} variant="outline-primary" onClick={registrarse}>
                                    {t('registrarse')}
                                </Button>
                                <div style={{margin: '5px'}}></div>
                                <Button aria-label={t('inicioSesion')} variant="outline-success" onClick={iniciarSesion}>
                                    {t('inicioSesion')}
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
