<template>
  <div class="loteria-item">
    <img src="/images/signos/DORADO.png" alt="Imagen" class="imagen-loteria" />
    <h3>Triple Dorado</h3>
  </div>
  <div class="loteria-info" v-if="loterias.length > 0">
    <div class="horarios-adicionales">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Triple Dorado </th>
            <th>Terminal Dorado </th>
          </tr>
        </thead>
        <tbody>
          <!-- Iterar sobre los loterías agrupadas por sorteo -->
          <tr v-for="(sorteo, index) in agrupadosPorSorteo" :key="index">
            <td>{{ formatHora(sorteo.hora_sorteo) }}</td>
            <td>{{ sorteo.tripleA }}</td>
            <td>{{ sorteo.tripleA.slice(-2) }}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      token: null,  // Guardar el token recibido
      loterias: [],  // Almacena los resultados de las loterías

    };
  },
  computed: {
    // Computada para agrupar los resultados por 'nro_sorteo'
    agrupadosPorSorteo() {
      const result = [];

      this.loterias.forEach(loteria => {
        // Buscar si el sorteo ya está en la lista
        let sorteo = result.find(s => s.nro_sorteo === loteria.nro_sorteo);

        if (!sorteo) {
          // Si no está, lo agregamos
          sorteo = {
            nro_sorteo: loteria.nro_sorteo,
            hora_sorteo: loteria.hora_sorteo,
            tripleA: '',
            tripleC: ''
          };
          result.push(sorteo);
        }

        // Asignar los valores a las columnas correspondientes
        if (loteria.sorteo === 'TRIPLE DORADO') {
          sorteo.tripleA = loteria.numero_ganador;
        } else if (loteria.sorteo === 'ASTRO ZAMORANO') {
          sorteo.tripleC = loteria.numero_ganador;
        }
      });

      return result;
    }
  },
  methods: {
    // Método para autenticarse y obtener el token
    async autenticar() {
      try {
        const response = await axios.post('https://apiresultados.banklot.com.ve/api/auth/registroConsulta', {
          username: 'Uc8gTnst46',
          contrasena: 'Sy73d5@7g'
        });

        // Si la autenticación es exitosa, guardar el token
        this.token = response.data.token;

        // Después de autenticar, hacer la consulta de los resultados
        this.consultarResultados();

      } catch (error) {
        console.error('Error de autenticación:', error.message);
      }
    },

    // Método para consultar los resultados
    async consultarResultados() {
      if (!this.token) {
        console.error('Token no encontrado. Es necesario autenticarse primero.');
        return;
      }

      try {
        // Obtener la fecha actual y formatearla como YYYY-MM-DD
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Obtiene la fecha en formato 'YYYY-MM-DD'

        const response = await axios.post('https://apiresultados.banklot.com.ve/api/result/getResultTP', {
          fecha: formattedDate, // Enviar la fecha actual
          loteria: '10', // Código de la lotería ZAMORANO
          producto: '1' // Código de producto para Triple ZAMORANO
        }, {
          headers: {
            'x-access-token': this.token,
            'Content-Type': 'application/json'
          }
        });

        // Verificar si la respuesta contiene datos
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          this.loterias = response.data;  // Guardar los resultados en el estado
        } else {
          console.error('No se encontraron resultados en la respuesta.');
          this.loterias = [];  // No hay resultados
        }

      } catch (error) {
        console.error('Error al consultar resultados:', error.message);
        this.loterias = [];  // Si ocurre un error, limpiar los resultados
      }
    },

    // Método para formatear la hora de 'HH:mm:ss' a 'HH:mm am/pm'
    formatHora(hora) {
      const [hours, minutes] = hora.split(':');
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHour = hours % 12 || 12;  // Convierte el formato de 24 horas a 12 horas
      return `${formattedHour}:${minutes} ${ampm}`;
    }
  },
  mounted() {
    this.autenticar(); // Intentar autenticarse al montar el componente
  }
};
</script>

<style scoped></style>
