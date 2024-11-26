<template>
  <div id="app">
    <!-- Contenedor principal -->
    <div class="tabla-container">
     
      <div class="box loteria-box">
        <Dorado/>
      </div>
      <div class="box loteria-box">
        <Zulia />
      </div> 
      <div class="box loteria-box">
        <Zamorano />
      </div> 
      </div>
  </div>
</template>
<script>

import Zulia from './Zulia.vue'; 
import Zamorano from './Zamorano.vue';  
import Dorado from './Dorado.vue';  


export default {
  name: 'App',
  components: {
    Zulia, Zamorano, Dorado,
  },
};
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

.loteria-item {
    display: flex;
    align-items: center;
}

.imagen-loteria {
    margin-right: 10px; /* Espacio entre la imagen y el encabezado */
    width: 50px; /* Ajusta el tamaño de la imagen si es necesario */
    height: auto;
}
</style>
