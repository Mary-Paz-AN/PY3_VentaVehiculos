import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Header';
import Footer from '../../Footer';
import { useLocation } from 'react-router-dom';

const CompararAutos = () => {
    const { t } = useTranslation();
    const [autos, setAutos] = useState([]);
    const { state } = useLocation();

    // Asegúrate de que autosSeleccionados esté disponible
    const autosSeleccionados = state?.autosSeleccionados || [];

    // Traer vehículos seleccionados al montar el componente
    useEffect(() => {
        const traerVehiculos = async () => {
            const vehiculos = [];
            for (const autoSeleccionado of autosSeleccionados) {
                const vehiculo = await traerVehiculo(autoSeleccionado);
                if (vehiculo) {
                    vehiculos.push(vehiculo);
                }
            }
            console.log(vehiculos);
            setAutos(vehiculos);
        };
        traerVehiculos();
    }, [autosSeleccionados]);

    const traerVehiculo = async (datosJSON) => {
        try {
            const response = await fetch("/consultarVehiculo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ placa: datosJSON.id }),
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al traer los vehículos:", error);
            return null;
        }
    };

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <h2>{t('compararAutos')}</h2>
                <div className="d-flex justify-content-around flex-wrap gap-4">
                    {autos.map((auto, index) => (
                        <div
                            key={index}
                            className="card p-3 border shadow-sm"
                            style={{ width: '30%', minWidth: '250px' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    {auto.marca} {auto.modelo} - {auto.anio}
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>{t('precio')}:</strong> ₡{auto.precio}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('precioNegociable')}:</strong> {auto.negociable ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('recibeVehiculo')}:</strong> {auto.recibeVehiculo ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('motor')}:</strong> {auto.motor}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('transmision')}:</strong> {auto.transmision}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('traccion')}:</strong> {auto.traccion}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('cantidadPuertas')}:</strong> {auto.cantidadPuertas}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('dimensiones')}:</strong>
                                        <ul>
                                            <li>{t('largo')}: {auto.largo} m</li>
                                            <li>{t('anchura')}: {auto.ancho} m</li>
                                            <li>{t('altura')}: {auto.alto} m</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('vidrios')}:</strong> {auto.vidriosElec ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('espejos')}:</strong> {auto.espejosElec ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sensorDelantero')}:</strong> {auto.sensorDelantero ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sensorLateral')}:</strong> {auto.sensorLateral ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('sensorTrasero')}:</strong> {auto.sensorTrasero ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('camaraRetro')}:</strong> {auto.camaraRetroceso ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('camara360g')}:</strong> {auto.camara360 ? t('si') : t('no')}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('asiento')}:</strong> {auto.asientos}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('tapizadoM')}:</strong> {auto.tapizado}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('tablero')}:</strong> {auto.tablero}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('estadoV')}:</strong> {auto.estado}/5
                                    </li>
                                    <li className="list-group-item">
                                        <strong>{t('asociadoLeasing')}:</strong> {auto.leasing ? t('si') : t('no')}
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
