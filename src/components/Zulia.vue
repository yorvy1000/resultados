<template>
  <div class="zulia-container">
    <!-- Encabezado -->
    <div class="zulia-header">
      <img src="/images/signos/ZULIA.png" alt="Zulia Logo" class="zulia-logo" />
      <h1>Resultados de Triple Zulia</h1>
    </div>

    <!-- Estado de carga -->
    <div v-if="loading" class="loading">
      <p>Cargando resultados...</p>
    </div>

    <!-- Mensaje de error -->
    <div v-if="error" class="error">
      <p>Error: {{ error }}</p>
    </div>

    <!-- Tabla de resultados -->
    <div v-if="!loading && !error && loterias.length > 0" class="resultados">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Triple A</th>
            <th>Triple B</th>
            <th>Zodiaco Triple C</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sorteo, index) in agrupadosPorSorteo" :key="index">
            <td>{{ formatHora(sorteo.hora_sorteo) }}</td>
            <td>{{ sorteo.tripleA }}</td>
            <td>{{ sorteo.tripleB }}</td>
            <td>{{ sorteo.tripleC }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mensaje si no hay resultados -->
    <div v-if="!loading && !error && loterias.length === 0">
      <p>No hay resultados disponibles.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loterias: [], // Resultados de la lotería
      loading: true, // Estado de carga
      error: null, // Mensaje de error
    };
  },
  computed: {
    agrupadosPorSorteo() {
      const result = [];
      this.loterias.forEach((loteria) => {
        let sorteo = result.find((s) => s.nro_sorteo === loteria.nro_sorteo);
        if (!sorteo) {
          sorteo = {
            nro_sorteo: loteria.nro_sorteo,
            hora_sorteo: loteria.hora_sorteo,
            tripleA: "",
            tripleB: "",
            tripleC: "",
          };
          result.push(sorteo);
        }
        if (loteria.sorteo === "TRIPLE ZULIA A") {
          sorteo.tripleA = loteria.numero_ganador;
        } else if (loteria.sorteo === "TRIPLE ZULIA B") {
          sorteo.tripleB = loteria.numero_ganador;
        } else if (loteria.sorteo === "ZODIACO DEL ZULIA") {
          sorteo.tripleC = loteria.numero_ganador;
        }
      });
      return result;
    },
  },
  methods: {
    async fetchResultados() {
      try {
        this.loading = true;
        this.error = null;

        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];

        const response = await axios.post("http://137.184.233.207:68/api/resultados", {
          fecha: formattedDate,
          loteria: "9",
          producto: "2",
        });

        this.loterias = response.data;
      } catch (error) {
        this.error = error.message || "No se pudo conectar con el servidor.";
        console.error("Detalles del error:", error.response || error.toJSON());
      } finally {
        this.loading = false;
      }
    },
    formatHora(hora) {
      const [hours, minutes] = hora.split(":");
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHour = hours % 12 || 12;
      return `${formattedHour}:${minutes} ${ampm}`;
    },
  },
  mounted() {
    this.fetchResultados();
  },
};
</script>

<style scoped>
.zulia-container {
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

.zulia-header {
  margin-bottom: 20px;
}

.zulia-logo {
  max-width: 150px;
}

.loading,
.error {
  margin: 20px 0;
  font-size: 16px;
  color: #555;
}

.error {
  color: red;
}

.resultados table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.resultados th,
.resultados td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.resultados th {
  background-color: #f4f4f4;
}
</style>
