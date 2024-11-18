const cedulas = ['71905253942', '119591513870', '8783004724', '159152143', '440671851535', '38546799301', '40838086654', '652625551', '499841714165', '647488470091'];

function poseeProcessoPenal(cedula) {
    return cedulas.includes(cedula);
}

export { poseeProcessoPenal };