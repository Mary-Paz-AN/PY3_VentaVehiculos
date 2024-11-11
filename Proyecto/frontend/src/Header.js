import React from 'react';

function Header({ isLoggedIn }) {
    return (
        <header style={styles.header}>
            <h1>Mi Sitio Web</h1>
            <nav>
                <a href="#home">Inicio</a>
                <a href="#about">Acerca de</a>
                <a href="#contact">Contacto</a>
                {isLoggedIn ? (
                    <>
                        <a href="#profile">Perfil</a>
                        <a href="#logout">Cerrar sesión</a>
                    </>
                ) : (
                    <a href="#login">Iniciar sesión</a>
                )}
            </nav>
        </header>
    );
}

const styles = {
    header: {
        padding: '20px',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center'
    }
};

export default Header;
