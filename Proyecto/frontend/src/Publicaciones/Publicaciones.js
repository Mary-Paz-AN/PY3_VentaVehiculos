import 'bootstrap/dist/css/bootstrap.min.css';
//import React, { useState, useEffect } from 'react';
//import { Container, Row, Card, Col, Form } from 'react-bootstrap';
//import { getUsuario } from './Acceso';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';

const Publicaciones = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
                {t('publicaciones')}
            <Footer />
        </div>
    );
};

export default Publicaciones;
