const cedulas = ['185907220032', '5193374599', '2733538567', '219501383663', '144929196597', '38546799301', '40838086654', '652625551', '499841714165', '647488470091'];

function poseeProcessoPenal(cedula) {
    return cedulas.includes(cedula);
}

export { poseeProcessoPenal };