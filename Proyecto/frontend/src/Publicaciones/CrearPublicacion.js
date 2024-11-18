import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Alert, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { getUsuario } from '../Usuario/Acceso';

const CrearPublicacion = () => {
    const { t } = useTranslation();
    const { plantilla } = useParams();
    const [isPlantilla, setPlantilla] = useState(false);
    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const [data, setData] = useState({
        id: 0,
        cedula: '',
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
        asientos: '',//ma
        tapizado: '',//ma
        sensorTrasero: false,//s
        sensorDelantero: false,//s
        sensorLateral: false,//s
        camaraRetroceso: false,//s
        camara360: false,//s
        traccion: '',//me
        vidriosElec: false,//me
        espejosElec: false,//me
        transmision: '',//me
        largo: 0.0,//d
        alto: 0.0,//d
        ancho: 0.0,//d
        precio: 0.0,
        negociable: false,
        recibeVehiculo: false,
        leasing: false,
        fotosInternas: [],
        fotosExternas: [],
    });

    //Conseguir la cedula del usuario
    useEffect(() => {
        const user = getUsuario();
        
        fetch(`/api/cuenta/informacion/${user}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error: ' + res.statusText);
                }

                return res.json();
            })
            .then((dataFetch) => {
                setData((prevData) => ({
                    ...prevData,  
                    cedula: dataFetch.identificacion,
                }));
                
            })
            .catch((err) => {
                console.error("Hubo un error al cargar los datos, por favor, intente nuevamente.", err);
                setMensaje("Hubo un error al cargar los datos, por favor, intente nuevamente.");
                setShow(true);
            }
        );

    }, []);

    // Carga los datos de la plantilla si es que se usa una
    useEffect(() => {
        if (plantilla === "null" || plantilla.trim() === "") { 
            setPlantilla(false); 
        } else {
            try {
                // Decodifica y parsea la plantilla
                const decodedPlantilla = JSON.parse(decodeURIComponent(plantilla));
                setData((prevData) => ({
                    ...prevData,
                    ...decodedPlantilla,
                }));
    
                setPlantilla(true);
            } catch (error) {
                console.error('Error al decodificar la plantilla:', error);
            }
        }
    }, [plantilla]);

    // Lista para precargar los selects
    const tiposVehiculo = ["Sedán", "Camioneta", "Sedán de lujo", "SUV", "Miniván"];
    const motores = ["Gasolina", "Diesel", "Gas", "Licuado", "Électrico", "Hibrido"];
    const siSonido = ["Estéreo 7.1", "Estandar"];
    const tableros = ["100% táctil", "Análogo", "Ambos"];
    const puertas = ["2", "3", "4", "5"];
    const estados = ["1", "2", "3", "4", "5"];
    const materialesAsiento = ["Tela", "Cuero"];
    const materialesTapizado = ["Tela", "Plástico", "Cuero"]; 
    const tracciones = ["Sencilla", "4x4"];
    const transmisiones = ["Manual", "Automático", "Dual"];

    //Convierte las imagenes a binario
    /*const convertirABinario = (files) => {
        const fileArray = Array.from(files);
    
        return Promise.all(
            fileArray.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(file);
                    reader.onload = () => {
                        const binary = new Uint8Array(reader.result);
                        resolve(binary); // Resuelve con el binario del archivo
                    };
                    reader.onerror = () => reject("Error leyendo el archivo");
                });
            })
        );
    };*/
    

    // Maneja los cambios de los inputs sea checkbox o sleccionador de archivos
    const handleChange = (e) => {
        const { name, type, value, checked, files } = e.target;
        let nuevoValor;
    
        switch (type) {
            case "checkbox":
                nuevoValor = checked;
                break;
            case "file":
                nuevoValor = files ? Array.from(files) : [];
                break;
                
                /* Hace la conversion a binario
                if (files) {
                    convertirABinario(files)
                        .then((binaries) => {
                            setData((prevData) => ({
                                ...prevData,
                                [name]: binaries, 
                            }));
                        })
                        .catch((error) => console.error(error));
                }
                return; */

            default:
                nuevoValor = value;
        }
    
        // Actualizamos el estado para los otros tipos de inputs
        setData((prevData) => ({
            ...prevData,
            [name]: nuevoValor,
        }));
    };
    
    
    
    // Vuelve a mis publicaciones 
    const misPublicaciones = () => {
        navigate('/publicaciones/misPublicaciones');
    };

    //Verifica que los datos cumplan con sus requisitos
    const verificarDatos = () => {
        const errores = [];

        // Validar la placa
        const placa = data.placa;

        if(placa === '') {
            errores.push(t('campoPlaca1'));
        } else {
            let esValida = true;
            // Verificar si ya se publico el carro
            //Se eliminaran guiones y espacios
            const nuevaPlaca = placa.replace(/-/g, " ").replace(/\s+/g, '');
            
            //verificar el largo
            const largo = nuevaPlaca.length;
            if(largo !== 6) {
                errores.push(t('campoPlaca2'));
                esValida = false;
            } else {
                //Seprar las letras y numeros para comprobar el formato
                const letras = nuevaPlaca.slice(0, 2);
                const numeros = nuevaPlaca.slice(3, 5);

                const contieneLetras = /^[a-zA-Z]+$/.test(letras); //true si solo tiene letras
                const contieneNumeros =  /^\d+$/.test(numeros); //true si solo tiene num

                if(!contieneLetras || !contieneNumeros) {
                    errores.push(t('campoPlaca3'));
                    esValida = false;
                }
            }

            //Comprobar validez de la placa y las multas
            if(esValida) {
                console.log('valida');
            }
        }

        // Validar marca
        if(data.marca === '') {
            errores.push(t('campoMarca'));
        }
        
        // Validar modelo
        if(data.modelo === '') {
            errores.push(t('campoModelo'));
        }

        // Validar anio
        const anio = data.anio;

        if(anio === '') {
            errores.push(t('campoAnio1'));
        } else {
            // Verificar el largo
            const largo = anio.length;

            if(largo !== 4) {
                errores.push(t('campoAnio2')); 
            }
            
            // Verificar que solo contenga números
            const contieneNumeros =  /^\d+$/.test(anio);

            if(!contieneNumeros) {
                errores.push(t('campoAnio3')); 
            }
        }

        // Validar tipo
        if(data.tipo === '') {
            errores.push(t('campoTipo'));
        }

        // validar motor
        if(data.motor === '') {
            errores.push(t('campoMotor'));
        }

        // Validar sistemaSonido
        if(data.sistemaSonido === '') {
            errores.push(t('campoSysSonido'));
        }

        // Validar tablero
        if(data.tablero === '') {
            errores.push(t('campoTablero'));
        }

        // Validar cantidad de puertas
        if(data.cantidadPuertas === '') {
            errores.push(t('campoCantidadPuertas'));
        }

        // Validar estado
        if(data.estado === '') {
            errores.push(t('campoEstado'));
        }

        // Validar material asientos
        if(data.asientos === '') {
            errores.push(t('campoAsientos'));
        }

        // Validar material tapizado
        if(data.tapizado === '') {
            errores.push(t('campoTapizado'));
        }

        // Validar traccion
        if(data.traccion === '') {
            errores.push(t('campoTraccion'));
        }

        // Validar transmicion
        if(data.traccion === '') {
            errores.push(t('campoTransmision'));
        }

        // Validar dimensiones
        if(data.largo < 0.1 || data.ancho < 0.1 || data.alto < 0.1) {
            errores.push(t('campoDimensiones'));
        }

        // Validar fotos internas y fotos externas
        const fotosI = data.fotosInternas;
        const fotosE = data.fotosExternas;
    
        if(fotosI.length !== 4 || fotosE.length !== 4) {
            errores.push(t('descripFotos'));
        }

        if (errores.length > 0) {
            console.log(errores);
            setMensaje(errores.join('\n\n'));
            setShow(true); 
            return false; 
        }

        return true; 
    }

    // Guarda los datos
    const registrarAuto = async () => {
        
        if (verificarDatos()) {
            try {
                /*const formData = new FormData();

                // Agregar los datos normales
                formData.append("id", data.cedula);
                formData.append("cedula", data.cedula);
                formData.append("placa", data.placa);
                formData.append("marca", data.marca);
                formData.append("modelo", data.modelo);
                formData.append("anio", data.anio);
                formData.append("tipo", data.tipo);
                formData.append("motor", data.motor);
                formData.append("sistemaSonido", data.sistemaSonido);
                formData.append("tablero", data.tablero);
                formData.append("cantidadPuertas", data.cantidadPuertas);
                formData.append("estado", data.estado);
                formData.append("precio", data.precio);
                formData.append("negociable", data.negociable);
                formData.append("recibeVehiculo", data.recibeVehiculo);
                formData.append("leasing", data.leasing);
                formData.append("asientos", data.asientos);
                formData.append("tapizado", data.tapizado);

                // Agregar los valores booleanos
                formData.append("sensorTrasero", data.sensorTrasero);
                formData.append("sensorDelantero", data.sensorDelantero);
                formData.append("sensorLateral", data.sensorLateral);
                formData.append("camaraRetroceso", data.camaraRetroceso);
                formData.append("camara360", data.camara360);
                formData.append("vidriosElec", data.vidriosElec);
                formData.append("espejosElec", data.espejosElec);

                // Agregar las fotos internas y externas
                data.fotosInternas.forEach((foto, index) => {
                    formData.append(`fotosInternas[${index}]`, foto);
                });
                data.fotosExternas.forEach((foto, index) => {
                    formData.append(`fotosExternas[${index}]`, foto);
                });

                // Agregar datos de dimensiones y mecánica
                formData.append("traccion", data.traccion);
                formData.append("transmision", data.transmision);
                formData.append("largo", data.largo);
                formData.append("alto", data.alto);
                formData.append("ancho", data.ancho);*/

                const link = isPlantilla ? '/api/publicaciones/v3/publicacion' : '/api/publicaciones/v2/publicacion';
                const respuesta = await fetch(link, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(data) 
                });
    
                if (respuesta.ok) {
                    misPublicaciones(); 
                } else {
                    throw new Error(`Error: ${respuesta.status}`);
                }
    
            } catch (error) {
                console.error('Error: Hubo un error al crear la publicación', error);
                setMensaje('Error: Hubo un error al crear la publicación');
                setShow(true);
            }
        }
    }
    

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />
            <Container className="flex-grow-1 d-flex justify-content-center align-items-center" role="main" aria-labelledby="registrar-auto-title">
                <Row className="w-100">
                    <Col md={8} lg={6} className="mx-auto">
                        <Card className="bg-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '800px', width: '100%' }} role="form" aria-describedby="registro-auto-description">
                            <Card.Body className="p-5 d-flex flex-column">
                                <h2 id="registrarAutoTitle" className="fw-bold mb-2 text-center" style={{color: "#1f365d"}}>{t('registrarAuto')}</h2>
                                <p id="registrar-Auto-description" className="text-muted mb-4 text-center">{t('mensajeRegistrarse')}</p>

                                {/* Formulario para el auto */}
                                <Form aria-labelledby="registrar-auto-form">

                                    {/* Placa */}
                                    <Form.Group className="mb-3" controlId="placaInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('placa')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={data.placa}
                                            onChange={handleChange}
                                            placeholder={t('placeHolderPlaca')}
                                            name = "placa"
                                            aria-required="true" 
                                            aria-describedby="placaHelp" />
                                        <Form.Text id="placaHelp" className="text-muted">{t('descripPlaca')}</Form.Text>
                                    </Form.Group>

                                    {/* Marca */}
                                    <Form.Group className="mb-3" controlId="marcaInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('marca')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderMarca')} 
                                            value={data.marca}
                                            onChange={handleChange}
                                            name = "marca"
                                            aria-required="true" 
                                            aria-describedby="marcaHelp" />
                                    </Form.Group>

                                    {/* Modelo */}
                                    <Form.Group className="mb-3" controlId="modeloInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('modelo')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderModelo')} 
                                            value={data.modelo}
                                            onChange={handleChange}
                                            name = "modelo"
                                            aria-required="true" 
                                            aria-describedby="modeloHelp" />
                                    </Form.Group>

                                    {/* Anio */}
                                    <Form.Group className="mb-3" controlId="yearInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('year')}</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder={t('placeHolderYear')} 
                                            value={data.anio}
                                            onChange={handleChange}
                                            name = "anio"
                                            aria-required="true" 
                                            aria-describedby="yearHelp" />
                                    </Form.Group>

                                    {/* Tipo de Vehiculo */}
                                    <Form.Group className="mb-3" controlId="tipoVehiculoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('tipo')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select tipo de carrocería" 
                                            name='tipo'
                                            value={data.tipo}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderTipo')}</option>
                                            {tiposVehiculo.map((tipo, index) => (
                                                <option key={index} value={tipo}>{tipo}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Motor */}
                                    <Form.Group className="mb-3" controlId="motorInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('motor')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del motor" 
                                            name='motor'
                                            value={data.motor}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderMotor')}</option>
                                            {motores.map((motor, index) => (
                                                <option key={index} value={motor}>{motor}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Sistema de sonido */}
                                    <Form.Group className="mb-3" controlId="sistemaSonidoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('sistemaSonido')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select sistema de sonido" 
                                            name='sistemaSonido'
                                            value={data.sistemaSonido}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderSiSonido')}</option>
                                            {siSonido.map((sistema, index) => (
                                                <option key={index} value={sistema}>{sistema}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Tablero */}
                                    <Form.Group className="mb-3" controlId="tableroInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('tablero')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del tablero del vehiculo" 
                                            name='tablero'
                                            value={data.tablero}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHoldeTablero')}</option>
                                            {tableros.map((tablero, index) => (
                                                <option key={index} value={tablero}>{tablero}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Cantidd de puertas */}
                                    <Form.Group className="mb-3" controlId="cantidadPuertasInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('cantidadPuertas')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select de la cantidad de puertas" 
                                            name='cantidadPuertas'
                                            value={data.cantidadPuertas}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderPuertas')}</option>
                                            {puertas.map((puerta, index) => (
                                                <option key={index} value={puerta}>{puerta}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Estado del vehiculo */}
                                    <Form.Group className="mb-3" controlId="estadoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('estadoV')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del estado del vehiculo" 
                                            name='estado'
                                            value={data.estado}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderEstado')}</option>
                                            {estados.map((estado, index) => (
                                                <option key={index} value={estado}>{estado}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Text id="estadoHelp" className="text-muted">{t('descripEstado')}</Form.Text>
                                    </Form.Group>

                                    {/* Material Asientios */}
                                    <Form.Group className="mb-3" controlId="asientoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('asiento')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del material del asiento" 
                                            name='asientos'
                                            value={data.asientos}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderMaterial')}</option>
                                            {materialesAsiento.map((materialAsiento, index) => (
                                                <option key={index} value={materialAsiento}>{materialAsiento}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    
                                    {/* Material Tapizado */}
                                    <Form.Group className="mb-3" controlId="tapizadoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('tapizadoM')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del material del tapizado" 
                                            name='tapizado'
                                            value={data.tapizado}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderMaterial')}</option>
                                            {materialesTapizado.map((material, index) => (
                                                <option key={index} value={material}>{material}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    
                                    {/* Sensor Trasero */}
                                    <Form.Group className="mb-3" controlId="sensorTraseroInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="sensorTrasero"
                                            label={t('sensorTrasero')}
                                            name="sensorTrasero"
                                            checked={data.sensorTrasero}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="sensorTraseroHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    {/* Sensor delantero */}
                                    <Form.Group className="mb-3" controlId="sensorDelanteroInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="sensorDelantero"
                                            label={t('sensorDelantero')}
                                            name="sensorDelantero"
                                            checked={data.sensorDelantero}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="sensorDelanteroHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    {/* Sensor lateral */}
                                    <Form.Group className="mb-3" controlId="sensorLateralInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="sensorLateral"
                                            label={t('sensorLateral')}
                                            name="sensorLateral"
                                            checked={data.sensorLateral}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="sensorLateralHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    
                                    {/* Cámara retroceso */}
                                    <Form.Group className="mb-3" controlId="camaraRetrocesoInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="camaraRetroceso"
                                            label={t('camaraRetro')}
                                            name="camaraRetroceso"
                                            checked={data.camaraRetroceso}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="camaraRetrocesoHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    
                                    {/* Cámara 360 */}
                                    <Form.Group className="mb-3" controlId="camara360Input">
                                        <Form.Check 
                                            type="checkbox"
                                            id="camara360"
                                            label={t('camara360g')}
                                            name="camara360"
                                            checked={data.camara360}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="camara360Help" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    
                                    {/* Traccion */}
                                    <Form.Group className="mb-3" controlId="traccionInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('traccion')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select del tipo de tracción" 
                                            name='traccion'
                                            value={data.traccion}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderTraccion')}</option>
                                            {tracciones.map((traccion, index) => (
                                                <option key={index} value={traccion}>{traccion}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Vidrios Electricos */}
                                    <Form.Group className="mb-3" controlId="vidriosInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="vidriosElec"
                                            label={t('vidrios')}
                                            name="vidriosElec"
                                            checked={data.vidriosElec}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="vidriosHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    

                                    {/* Espejos electricos */}
                                    <Form.Group className="mb-3" controlId="espejosInput">
                                        <Form.Check
                                            type="checkbox"
                                            id="espejosElec"
                                            label={t('espejos')}
                                            name="espejosElec"
                                            checked={data.espejosElec}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="espejosHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    

                                    {/* Transmisión */}
                                    <Form.Group className="mb-3" controlId="transmisionInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('transmision')}</Form.Label>
                                        <Form.Select 
                                            aria-label="Select tipo de transmision" 
                                            name='transmision'
                                            value={data.transmision}
                                            onChange={handleChange}
                                        >
                                            <option value= "" disabled>{t('placeHolderTransmision')}</option>
                                            {transmisiones.map((transmision, index) => (
                                                <option key={index} value={transmision}>{transmision}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <br/>
                                    
                                    {/* Dimensiones */}
                                    <h3 style={{color: "#1f365d"}}>{t('dimensionesVehiculo')}</h3>
                                    <p>{t('descripDimensiones')}</p>
                                    
                                    {/* Largo */}
                                    <Form.Group className="mb-3" controlId="largoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('largo')}</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            step="0.01" 
                                            value={data.largo}
                                            onChange={handleChange}
                                            name = "largo"
                                            aria-required="true" 
                                            aria-describedby="largoHelp" />
                                    </Form.Group>

                                    {/* Alto */}
                                    <Form.Group className="mb-3" controlId="altoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('altura')}</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            step="0.01" 
                                            value={data.alto}
                                            onChange={handleChange}
                                            name = "alto"
                                            aria-required="true" 
                                            aria-describedby="altoHelp" />
                                    </Form.Group>

                                    {/* Ancho */}
                                    <Form.Group className="mb-3" controlId="anchoInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('anchura')}</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            step="0.01" 
                                            value={data.ancho}
                                            onChange={handleChange}
                                            name = "ancho"
                                            aria-required="true" 
                                            aria-describedby="anchoHelp" />
                                    </Form.Group>

                                    <br/>

                                    {/* Precio */}
                                    <Form.Group className="mb-3" controlId="precioInput">
                                        <Form.Label style={{color: "#1f365d"}}>{t('precioColones')}</Form.Label>
                                        <Form.Control 
                                            type="number"
                                            step="0.01"  
                                            value={data.precio}
                                            onChange={handleChange}
                                            name = "precio"
                                            aria-required="true" 
                                            aria-describedby="precioHelp" />
                                        <Form.Text id="precioHelp" className="text-muted">{t('descripPrecio')}</Form.Text>
                                    </Form.Group>

                                    {/* Negociable */}
                                    <Form.Group className="mb-3" controlId="negociableInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="negociable"
                                            label={t('negociable')}
                                            name="negociable"
                                            checked={data.negociable}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="negociableHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    

                                    {/* Acepta Vehiculo */}
                                    <Form.Group className="mb-3" controlId="recibeVehiculoInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="recibeVehiculo"
                                            label={t('recibeVehiculo')}
                                            name="recibeVehiculo"
                                            checked={data.recibeVehiculo}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="recibeVehiculoHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    

                                    {/* Asociado leasing */}
                                    <Form.Group className="mb-3" controlId="leasingInput">
                                        <Form.Check 
                                            type="checkbox"
                                            id="leasing"
                                            label={t('asociadoLeasing')}
                                            name="leasing"
                                            checked={data.leasing}
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="leasingHelp" className="text-muted">{t('descripSiNo')}</Form.Text>
                                    </Form.Group>
                                    
                                    <br/>

                                    {/* Fotos Internas */}
                                    <Form.Group className="mb-3" controlId="fotosInternasInput">
                                        <Form.Label>{t('fotosInternas')}</Form.Label>
                                        <Form.Control
                                            type="file"
                                            multiple
                                            accept="image/*" 
                                            name="fotosInternas" 
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="fotosInternasHelp" className="text-muted">{t('descripFotos')}</Form.Text>
                                    </Form.Group>

                                    {/* Fotos expternas */}
                                    <Form.Group className="mb-3" controlId="fotosExternasInput">
                                        <Form.Label>{t('fotosExternas')}</Form.Label>
                                        <Form.Control
                                            type="file"
                                            multiple
                                            accept="image/*" 
                                            name="fotosExternas" 
                                            onChange={handleChange}
                                        />
                                        <Form.Text id="fotosExternas" className="text-muted">{t('descripFotos')}</Form.Text>
                                    </Form.Group>
                                </Form>

                                <br/>

                                <Button variant="primary" size="lg" className="mb-3" onClick={registrarAuto} aria-label="Registrar Auto">
                                    {t('registrarAuto')}
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

            <div style={{margin: '20px'}}></div>
            <Footer />
        </div>
    );
    
};

export default CrearPublicacion;
