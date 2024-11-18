import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Header';
import Footer from '../../Footer';

const CompararAutos = (autosSeleccionados) => {
    const { t } = useTranslation();
    const [autos, setAutos] = useState([])
    setAutos(autosSeleccionados);

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <h2>{t('Comparar Autos')}</h2>
                <div className="d-flex justify-content-around flex-wrap gap-4">
                    {autos.map((auto) => (
                        <div
                            key={auto.id}
                            className="card p-3 border shadow-sm"
                            style={{ width: '30%', minWidth: '250px' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    {auto.marca} {auto.modelo} - {auto.año}
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>{t('precio')}:</strong> {auto.precio}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('precioNegocible')}:</strong> {auto.negociable ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('vehiculoComoPago')}:</strong> {auto.recibeOtros ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('motor')}:</strong> {auto.motor}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('transmision')}:</strong> {auto.transmision}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('cantidadPuertas')}:</strong> {auto.puertas}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('dimensiones')}:</strong> {t('largo')}: {auto.dimensiones.largo}m, {t('anchura')}: {auto.dimensiones.ancho}m, {t('altura')}: {auto.dimensiones.alto}m
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('vidriosElectricos')}:</strong> {auto.vidriosElectricos ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('espejosElectricos')}:</strong> {auto.espejosElectricos ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sensoresTraseros')}:</strong> {auto.sensoresTraseros ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('camaraRetroceso')}:</strong> {auto.camaraRetroceso ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('camara360')}:</strong> {auto.camara360 ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sensoresLaterales')}:</strong> {auto.sensoresLaterales ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('materialAsientos')}:</strong> {auto.asientos}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sonido')}:</strong> {auto.sonido}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('tablero')}:</strong> {auto.tablero}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('estadoVehiculo')}:</strong> {auto.estado}/5
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('leasing')}:</strong> {auto.leasing ? t('si') : t('no')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CompararAutos;
