const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la API de Banklot
const API_BASE_URL = 'https://apiresultados.banklot.com.ve'; // URL e IP de la API de Banklot
const USERNAME = 'Uc8gTnst46'; // Usuario proporcionado
const PASSWORD = 'Sy73d5@7g'; // Contraseña proporcionada

let token = null;

// Función para autenticar y obtener el token
async function autenticar(reintentos = 3) {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/registroConsulta`, {
      username: USERNAME,
      contrasena: PASSWORD,
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    token = response.data.token;
    console.log('Token recibido:', token);
    return true; // Autenticación exitosa
  } catch (error) {
    console.error('Error al autenticar:', error.response?.data || error.message);

    if (reintentos > 0) {
      console.log(`Reintentando autenticación... (${3 - reintentos} de 3)`);
      return await autenticar(reintentos - 1); // Intenta nuevamente
    }

    return false; // Autenticación fallida tras reintentos
  }
}

// Ruta para consultar resultados
app.post('/api/resultados', async (req, res) => {
  const { fecha, loteria, producto } = req.body;

  // Autenticar si no hay token
  if (!token) {
    console.log('Token no disponible, procediendo a autenticar...');
    const authSuccess = await autenticar();
    if (!authSuccess) {
      return res.status(401).json({ message: 'No se pudo autenticar con la API' });
    }
  }

  try {
    // Realizar consulta a la API de resultados
    const response = await axios.post(`${API_BASE_URL}/api/result/getResultTP`, {
      fecha,
      loteria,
      producto,
    }, {
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json(response.data); // Respuesta exitosa
  } catch (error) {
    console.error('Error al consultar resultados:', error.response?.data || error.message);

    // Verifica si el error es por token expirado o no autorizado
    if (error.response?.status === 401 || error.response?.data?.message.includes('token')) {
      console.log('Token expirado o inválido, reautenticando...');
      token = null; // Resetea el token
      const authSuccess = await autenticar();
      if (authSuccess) {
        // Reintentar la solicitud tras reautenticación
        return await app._router.handle(req, res);
      }
    }

    res.status(500).json({ message: 'Error al consultar resultados', error: error.message });
  }
});

// Iniciar el servidor en el puerto 68
const PORT = 68;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://137.184.233.207:${PORT}`);
});
