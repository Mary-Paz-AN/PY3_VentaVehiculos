const placas = ['FID312', 'ZIY864', 'IYA937', 'WXR339', 'XCR839', 'LJR206', 'PXZ461', 'NPW001', 'GLZ862', 'IKM098'];

function poseeMultas(placa) {
    return placas.includes(placa);
}

module.exports = { poseeMultas };