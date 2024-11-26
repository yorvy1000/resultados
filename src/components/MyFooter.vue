<template>
  <footer class="bg-dark py-2 fixed-bottom">
    <div class="container px-2 text-center text-white">
      <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="small-text m-0 text-center">GRUPO BANKLOT © | TODOS LOS DERECHOS RESERVADOS</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      domain: '',
      yourPhoneNumber: 'tunumerodetelefono' // Reemplaza con tu número de teléfono
    };
  },
  mounted() {
    // Obtenemos el nombre del dominio actual
    this.domain = window.location.origin;

    const scriptPopper = document.createElement('script');
    scriptPopper.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(scriptPopper);
  }
}
</script>

<style scoped>
/* Estilos específicos del componente Footer */
.small-text {
  font-size: 14px; /* Tamaño predeterminado para pantallas grandes */
}

@media (max-width: 576px) {
  /* Estilos para dispositivos móviles (ancho máximo de 576px) */
  .small-text {
    font-size: 10px; /* Ajusta este valor para pantallas móviles */
  }
}
</style>
