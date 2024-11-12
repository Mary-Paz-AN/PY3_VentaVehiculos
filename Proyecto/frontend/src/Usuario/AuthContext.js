import React, { createContext, useState, useContext, useEffect } from 'react';
import { setUsuario, getUsuario } from './Acceso';

// Crea un contexto para cambiar el header cada vez que se inicie o se cierre sesion
const AuthContext = createContext();

//Hook 
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLogIn, setLogIn] = useState(false);

    useEffect(() => {
        //Comprobar si el usuario ya está autenticado
        const user = getUsuario();
        if (user != null) {
            setLogIn(true);
        } 
    }, []);

    const iniciarSesion = (user) => {
        setUsuario(user); 
        setLogIn(true);
    };

    const cerrarSesion = () => {
        setUsuario(null); 
        setLogIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLogIn, iniciarSesion, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};
