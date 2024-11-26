<template>
  <!-- Navigation -->
  <nav class="navbar navbar-dark bg-dark py-1 px-3">
    <div class="container">
      <!-- Ocultar el logo en pantallas pequeñas -->
      <a class="navbar-brand d-none d-md-block" href="/">
        <span class="text-light">Grupo Banklot</span>
      </a>
      <div class="text-light">{{ currentDate }}</div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      currentDate: '',
    };
  },
  mounted() {
    this.getCurrentDate();
  },
  methods: {
    getCurrentDate() {
      const dateObj = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      this.currentDate = dateObj.toLocaleDateString('es-ES', options);
    },
  },
});
</script>

<style scoped>
/* Reducir la altura de la barra de navegación */
.navbar {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 2rem;
  line-height: 2rem;
}
.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgb(0 0 0) !important;
}
</style>
