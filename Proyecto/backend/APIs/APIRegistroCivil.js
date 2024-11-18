const placas = ['NUR807', 'ZBR578', 'EVL782', 'YNR281', 'IHQ705', 'QLJ161', 'CVV372', 'GZG338', 'FYZ573', 'UXN259'];
const cedulas = ['185907220032', '5193374599', '2733538567', '219501383663', '144929196597', '722979668925', '360676472589', '357701111', '045318978328', '209552199520'];

function esPlacaValida(placa) {
    return placas.includes(placa);
}

function esCedulaValida(cedula) {
    return cedulas.includes(cedula);
}

module.exports = { esPlacaValida, esCedulaValida };