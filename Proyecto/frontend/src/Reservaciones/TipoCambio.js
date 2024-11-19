const axios = require('axios');

const obtenerTipoCambio = async () => {
  const url = 'https://open.er-api.com/v6/latest/USD'; // API gratuita de Exchange Rates

  try {
    const response = await axios.get(url);
    const tipoCambio = response.data.rates.CRC; // USD a CRC
    return tipoCambio;
  } catch (error) {
    console.error('Error al obtener el tipo de cambio:', error);
    return null;
  }
};

(async () => {
  const tipoCambio = await obtenerTipoCambio();
  console.log('El tipo de cambio del dólar (USD -> CRC) es:', tipoCambio);
})();

module.exports = { obtenerTipoCambio };