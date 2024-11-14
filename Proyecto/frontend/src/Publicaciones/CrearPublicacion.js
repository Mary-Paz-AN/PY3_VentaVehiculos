import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Alert, Button, ListGroup } from 'react-bootstrap';
//import { getUsuario } from './Acceso';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const CrearPublicacion = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />

            <p>CREAR PUBLICACIONES</p>

            <div style={{margin: '20px'}}></div>
            <Footer />
        </div>
    );
    
};

export default CrearPublicacion;
