import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Alert, Container, Row, Card, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Registrarse = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [cantones, setCantones] = useState([]);
    const navigate = useNavigate();

    const [data, setData] = useState({
        user: '',
        correo: '',
        contra: '',
        tipoIdentificacion: '',
        identificacion: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        nacionalidad: '',
        telefono: '',
        fechaNacimiento: '',
        provincia: '',
        canton: '',
        distrito: ''
    });

    // Las listas para los selects
    const identificacionTipos = ["Cédula Juridica", "Cédula Fisica", "DIMEX", "NITE"];
    const provincias = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón"];
    const sanjose = ["San José", "Aluajelita", "Vázques de Coronado", "Acostas", "Tibás", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Pérez Zeledon", "Escazú", "León Cortes Castro", "Desamparados", "Puriscal", "Tarrazú", "Aserrí", "Mora", "Goicochea", "Santa Ana"];
    const alajuela = ["Alajuela", "San Carlos", "Zarcero", "Sarchi", "Upala", "Los Chiles", "Guatuso", "Río Cuarto", "San Ramón", "Grecia", "San Mateo", "Atenas", "Naranjo", "Palmares", "Orotina", "Poás"];
    const cartago = ["Cartago", "Paraíso", "La Unión", "Jiménez", "Turrialba", "Alvarado", "Oreamundo", "El Guarco"];
    const heredia = ["Heredia", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael", "San Isidro", "Belén", "Flores", "San Pablo", "Sarapiquí"];
    const guanacaste = ["Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carillo", "Cañas", "Abangares", "Tilarán", "Nandayure", "La Cruz", "Hojancha"];
    const puntarenas = ["Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Quepos", "Golfito", "Coto Brus", "Parrita", "Corredores", "Grabito", "Monteverde", "Puerto Jiménez"];
    const limon= ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"];
    
    // Maneja los cambios de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

        if (name === 'provincia') {
            selectCanton(value);
        }
    };

    // Establece la lista de cantones a usar dependiendo de la procincia
    const selectCanton = (provi) => {
        // Quita espacios, tildes y lo pasa a minuscula para evitar errores
        //https://es.stackoverflow.com/questions/62031/eliminar-signos-diacr%C3%ADticos-en-javascript-eliminar-tildes-acentos-ortogr%C3%A1ficos
        const lowerCaseProvi = provi.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');

        switch (lowerCaseProvi) {
            case "sanjose":
                setCantones(sanjose);
                break;

            case "alajuela":
                setCantones(alajuela);
                break;

            case "cartago":
                setCantones(cartago);
                break;

            case "heredia":
                setCantones(heredia);
                break;

            case "guanacaste":
                setCantones(guanacaste);
                break;

            case "puntarenas":
                setCantones(puntarenas);
                break;

            case "limon":
                setCantones(limon);
                break;

            default:
                break;
        }
    };


    // Verifica los datos que da el usuario
    const validarDatos = () => {
        const errores = [];

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

        // Verificar contraseña
        const cont = data.contra;

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

        // Verificar el tipo de identificacion
        const tipoIden = data.tipoIdentificacion;
        if(tipoIden === '') {
            errores.push(t('campoTipoIden'));
        }

        // Verificar identificación
        const iden = data.identificacion;

        if(iden === '') {
            errores.push(t('campoIden1'));
        }  else {
            //Flag para validar identidad y processos penales
            let esValida = true;

            // Se quitan los guiones y espacios para guardar el dato de esa manera
            const nuevoIden = iden.replace(/-/g, " ").replace(/\s+/g, '');

            //Validar que solo posean numeros y no letras
            const soloNum = /^\d+$/.test(nuevoIden);
            if(!soloNum) {
                errores.push(t('campoIden2'));
                esValida = false;
            }

            // Validar el largo dependiendo del tipo
            const largo = nuevoIden.length;

            // Quita espacios, tildes y lo pasa a minuscula para evitar errores
            const lowerTipoIden = tipoIden.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
            
            if(lowerTipoIden === 'cedulafisica') {
                if(largo !== 9) {
                    errores.push(t('idenFisica'));
                    esValida = false;
                } 
            }

            if(lowerTipoIden === 'cedulaJuridica' || lowerTipoIden === 'nite') {
                if(largo !== 10) {
                    errores.push(t('idenJuridicaNITE'));
                    esValida = false;
                } 
            }

            if(lowerTipoIden === 'dimex') {
                if(largo !== 11 && largo !== 12) {
                    errores.push(t('idenDIMEX'));
                    esValida = false;
                } 
            }
            
            if(esValida){
                //Validar identidad
                //Validar processos penales
                console.log('Validar');
            } 
        }

        // Verificar nombre y apellidos
        const nombre = data.nombre;
        const apellido1 = data.apellido1;
        const apellido2 = data.apellido2;
        if(nombre === '' || apellido1 === '' || apellido2 === '') {
            errores.push(t('campoNombreApellidos1'));
        } else {
            // Validar el largo
            const largoNombre = nombre.length;
            const largoApellido1 = apellido1.length;
            const largoApellido2 = apellido2.length;

            if(largoNombre < 2 || largoApellido1 < 2 || largoApellido2 < 2) {
                errores.push(t('campoNombreApellidos2'));
            }
        }

        // Verificar nacionalidad
        const nacionalidad = data.nacionalidad;

        if(nacionalidad === '' || nacionalidad.length < 1) {
            errores.push(t('campoNacionalidad'));
        }

        // Verificar telefono
        const telefono = data.telefono;

        if(telefono === '') {
            errores.push(t('campoTelefono1'));
        } else {
            // Se quitan los guiones y espacios para guardar el dato de esa manera
            const nuevoTelefono = telefono.replace(/-/g, " ").replace(/\s+/g, '');

            //Validar que solo posean numeros y no letras
            const soloNum = /^\d+$/.test(nuevoTelefono);
            if(!soloNum) {
                errores.push(t('campoTelefono2'));
            }
        }

        // Verificar fecha
        const date = data.fechaNacimiento;

        if(date === '') {
            errores.push(t('campoFechaNacimiento1'));
        } else {
            //Validar que la persona sea mayor de edad
            const yearUser = Number(date.substring(0, 4));
            const year = new Date().getFullYear();
            const edad = year - yearUser;

            if(edad < 18) {
                errores.push(t('campoFechaNacimiento2'));
            }
        }

        // Verificar provincia
        if(data.provincia === '' || data.canton === '') {
            errores.push(t('campoProvCan'));
        }

        // Verificar distrito
        const distrito = data.distrito;
        if(distrito === '' || distrito.length < 3) {
            errores.push(t('campoDistrito'));
        }

        if (errores.length > 0) {
            console.log(errores);
            setMensaje(errores.join('\n\n'));
            setShow(true); 
            return false; 
        }

        return true; 
    };

    // Verifica si los datos son correctos y despues crear el usuario
    const anadirUsuario = async () => {

        if (validarDatos()) {
            try {
                const respuesta = await fetch('/api/cuenta/registrarse', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
        
                if (respuesta.ok) {
                    navigate('/usuario/iniciarSesion');
                } else {
                    throw new Error(`Error: ${respuesta.status}`);
                }
                

            } catch (error) {
                console.error('Error:', t('fetchRegistroUsuario'));
                setMensaje(t('fetchRegistroUsuario'));
                setShow(true);
            }
            
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <Container className="flex-grow-1 d-flex justify-content-center align-items-center" role="main" aria-labelledby="registrarse-title">
                <Row className="w-100">
                    <Col md={8} lg={6} className="mx-auto">
                        <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '800px', width: '100%' }} role="form" aria-describedby="registro-description">
                            <Card.Body className="p-5 d-flex flex-column">
                                <h2 id="registrarsetitle" className="fw-bold mb-2 text-center" style={{color: "#1f365d"}}>{t('registrarse')}</h2>
                                <p id="registrarse-description" className="text-muted mb-4 text-center">{t('mensajeRegistrarse')}</p>

                                {/* Formulario para el User */}
                                <Form aria-labelledby="registrar-usuario-form">

                                    {/* Pregunatar por el correo */}
                                    <Form.Group className="mb-3" controlId="emailInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('correo')}</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            value={data.correo}
                                            onChange={handleChange}
                                            placeholder={t('placeHolderCorreo')}
                                            name = "correo"
                                            aria-required="true" 
                                            aria-describedby="emailHelp" />
                                    </Form.Group>

                                    {/* Usuario */}
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

                                    {/* Contraseña */}
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

                                    <br/>

                                    {/* Tipos de identificaciones */}
                                    <Form.Group className="mb-3" controlId="tipoIdendInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('tipoIdentificacion')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select tipo de identificacion" 
                                            name='tipoIdentificacion'
                                            value={data.tipoIdentificacion}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderTipoIden')}</option>
                                            {identificacionTipos.map((tipo, index) => (
                                                <option key={index} value={tipo}>{tipo}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Identificación */}
                                    <Form.Group className="mb-3" controlId="identificacionInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('identificacion')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderIden')}
                                            value={data.identificacion}
                                            onChange={handleChange}
                                            name = "identificacion"
                                            aria-required="true" 
                                            aria-describedby="helpIdentificacion" />
                                        <Form.Text id="identificacionHelp" className="text-muted">{t('descripIdentificacion')}</Form.Text>
                                    </Form.Group>

                                    {/* Nombre */}
                                    <Form.Group className="mb-3" controlId="nombredInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('nombre')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderNombre')}
                                            value={data.nombre}
                                            onChange={handleChange}
                                            name = "nombre"
                                            aria-required="true" 
                                            aria-describedby="helpNombre" />
                                    </Form.Group>

                                    {/* Apellido 1 */}
                                    <Form.Group className="mb-3" controlId="apellido1dInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('apellido1')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderAp1')}
                                            value={data.apellido1}
                                            onChange={handleChange}
                                            name = "apellido1"
                                            aria-required="true" 
                                            aria-describedby="helpApellido1" />
                                    </Form.Group>

                                    {/* Apellido 2 */}
                                    <Form.Group className="mb-3" controlId="apellido2Input">
                                        <Form.Label style={{color: "#1f365d"}}>{t('apellido2')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderAp2')}
                                            value={data.apellido2}
                                            onChange={handleChange}
                                            name = "apellido2"
                                            aria-required="true" 
                                            aria-describedby="helpApellido2" />
                                    </Form.Group>

                                    {/* Nacionalidad */}
                                    <Form.Group className="mb-3" controlId="nacionalidadInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('nacionalidad')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderNac')}
                                            value={data.nacionalidad}
                                            onChange={handleChange}
                                            name = "nacionalidad"
                                            aria-required="true" 
                                            aria-describedby="helpNacionalidad" />
                                    </Form.Group>

                                    {/* Teléfono */}
                                    <Form.Group className="mb-3" controlId="telefonoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('telefono')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderTelefono')}
                                            value={data.telefono}
                                            onChange={handleChange}
                                            name = "telefono"
                                            aria-required="true" 
                                            aria-describedby="helpTelefono" />
                                    </Form.Group>

                                    {/* Fecha Nacimiento */}
                                    <Form.Group className="mb-3" controlId="fechaNacimientoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('fechaNacimiento')}</Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            placeholder={t('placeHolderFechaNac')}
                                            value={data.fechaNacimiento}
                                            onChange={handleChange}
                                            name = "fechaNacimiento"
                                            aria-required="true" 
                                            aria-describedby="helpFechaNacimiento" />
                                    </Form.Group>

                                    <br/>
                                                                          
                                    {/* Provincia */}
                                    <Form.Group className="mb-3" controlId="provinciaInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('provincia')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select provincia" 
                                            name='provincia'
                                            value={data.provincia}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderProvincia')}</option>
                                            {provincias.map((provincia, index) => (
                                                <option key={index} value={provincia}>{provincia}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Text id="provinciaHelp" className="text-muted">{t('desProvincia')}</Form.Text>
                                    </Form.Group>

                                    {/* Cantón */}
                                    <Form.Group className="mb-3" controlId="cantonInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('canton')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select canton" 
                                            name='canton'
                                            value={data.canton}
                                            onChange={handleChange}
                                            disabled={!data.provincia}
                                        >
                                            <option value= "" disabled>{t('placeHolderCanton')}</option>
                                            {cantones.map((canton, index) => (
                                                <option key={index} value={canton}>{canton}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Text id="cantonnHelp" className="text-muted">{t('desCanton')}</Form.Text>
                                    </Form.Group>

                                    {/* Distrito */}
                                    <Form.Group className="mb-3" controlId="distritoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('distrito')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderDistrito')}
                                            value={data.distrito}
                                            onChange={handleChange}
                                            name = "distrito"
                                            aria-required="true" 
                                            aria-describedby="helpDistrito" />
                                        <Form.Text id="distritoHelp" className="text-muted">{t('desDistrito')}</Form.Text>
                                    </Form.Group>
                                </Form>

                                <br/>

                                <Button variant="primary" size="lg" className="mb-3" onClick={anadirUsuario} aria-label="Registrarse">
                                    {t('registrarse')}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

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
            <Footer />
        </div>
    );
};

export default Registrarse;
