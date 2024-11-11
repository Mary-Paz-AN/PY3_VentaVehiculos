// Tratarlas como variables globales

const usuario = { user: null };

const setUsuario = (userDado) => {
    usuario.user = userDado;
};

const getUsuario = () => {
    return usuario.user;
};

module.exports = { setUsuario, getUsuario };