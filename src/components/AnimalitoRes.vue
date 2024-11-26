<template>
  <div id="app">
    <div class="tabla-container">
      <div class="loteria-box" v-for="(loteria, index) in loterias" :key="index">
        <div class="loteria-header">
          <img :src="loteria.imagen" alt="Imagen" class="imagen-loteria" />
          <h2>{{ loteria.nombre }}</h2>
        </div>

        <!-- Primera tabla para horarios sin signo -->
        <div class="loteria-info" v-if="loteria.horariosSinSigno.length">
          
          <div class="horarios-adicionales">
            <table>
              <thead>
                <tr>
                  <th>Horario</th>
                  <th>Triple</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(horario, i) in loteria.horariosSinSigno" :key="i">
                  <td>{{ horario.hora }}</td>
                  <td>{{ horario.triple }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Segunda tabla para horarios con signo -->
        <div class="loteria-info" v-if="loteria.horariosConSigno.length">
          <h4 style="padding: 2%;">Astro Zamorano</h4>
          <div class="horarios-adicionales">
            <table>
              <thead>
                <tr>
                  <th>Horario</th>
                  <th>Triple</th>
                  <th>Signo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(horario, i) in loteria.horariosConSigno" :key="i">
                  <td>{{ horario.hora }}</td>
                  <td>{{ horario.triple }}</td>
                  <td>{{ horario.signo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      loterias: [
        {
          nombre: 'Triple Dorado',
          imagen: 'images/signos/DORADO.png',
          horariosSinSigno: [
          { hora: '9:00 AM', triple: '123' },
            { hora: '10:00 AM', triple: '456' },
            { hora: '11:00 AM', triple: '789' },
            { hora: '12:00 PM', triple: '987' },
            { hora: '1:00 PM', triple: '654' },
            { hora: '2:00 PM', triple: '321' },
            { hora: '3:00 PM', triple: '246' },
            { hora: '4:00 PM', triple: '135' },
            { hora: '5:00 PM', triple: '579' },
            { hora: '6:00 PM', triple: '648' },
            { hora: '7:00 PM', triple: '758' }
          ],
          horariosConSigno: []
        },
        {
          nombre: 'Triple Zamorano',
          imagen: 'images/signos/ZAMORANO.png',
          horariosSinSigno: [
            { hora: '12:00 PM', triple: '321' },
            { hora: '4:30 PM', triple: '546' },
            { hora: '7:00 PM', triple: '465' }
          ],
          horariosConSigno: [
            { hora: '9:00 AM', triple: '111', signo: 'Cáncer' },
            { hora: '10:00 AM', triple: '222', signo: 'Leo' },
            { hora: '11:00 AM', triple: '333', signo: 'Virgo' }
          ]
        },
        {
          nombre: 'Triple Caracas',
          imagen: 'images/signos/CARACAS.png',
          horariosSinSigno: [
            { hora: '9:00 AM', triple: '123' },
            { hora: '10:00 AM', triple: '456' },
            { hora: '11:00 AM', triple: '789' }
          ],
          horariosConSigno: []
        },
        {
          nombre: 'Triple Zulia',
          imagen: 'images/signos/ZULIA.png',
          horariosSinSigno: [],
          
          horariosConSigno: [
            { hora: '9:00 AM', triple: '111', signo: 'Cáncer' },
            { hora: '10:00 AM', triple: '222', signo: 'Leo' },
            { hora: '11:00 AM', triple: '333', signo: 'Virgo' }
          ]
        },
        {
          nombre: 'Triple Caliente',
          imagen: 'images/signos/CALIENTE.png',
          horariosSinSigno: [
            { hora: '9:00 AM', triple: '123' },
            { hora: '10:00 AM', triple: '456' },
            { hora: '11:00 AM', triple: '789' }
          ],
          horariosConSigno: []
        },
        {
          nombre: 'Triple Dorado',
          imagen: 'images/signos/DORADO.png',
          horariosSinSigno: [
            { hora: '9:00 AM', triple: '123' },
            { hora: '10:00 AM', triple: '456' },
            { hora: '11:00 AM', triple: '789' }
          ],
          horariosConSigno: []
        }
      ]
    };
  }
}


</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  color: white;
}
.tabla-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.loteria-box {
  background-color: #000;
  color: white;
  border: 2px solid #b0adf3;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;
}
.loteria-box:hover {
  transform: scale(1.05);
}
.loteria-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.loteria-header h2 {
  margin-left: 10px;
  font-size: 25px;
}
.loteria-info p {
  margin: 10px 0;
}
.imagen-loteria {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}
.horarios-adicionales {
  margin-top: 15px;
}
.horarios-adicionales table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}
.horarios-adicionales th,
.horarios-adicionales td {
  border: 1px solid white;
  padding: 8px;
  text-align: center;
}
.horarios-adicionales th {
  background-color: #333;
}
@media (max-width: 768px) {
  .tabla-container {
    flex-direction: column;
  }
  .loteria-box {
    width: 100%;
  }
}
body {
  background-image: url('images/bg/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  margin: 0;
}
</style>

