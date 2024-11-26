<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ 'active': currentIndex === 0 }">
        <!-- Contenido del primer slide -->
        <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Lotería</th>
                    <th>Fecha</th>
                    <th>Día</th>
                    <th>Hora</th>
                    <th>Triple A</th>
                    <th>Triple B</th>
                    <th>Triple C + Signo</th>

                  </tr>
                </thead>
                <tbody>

                  <tr class="delay-1"><!-- Inicio -->
                    <td><img src="/images/caliente.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-2"><!-- Inicio -->
                    <td><img src="/images/caracas.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-3"><!-- Inicio -->
                    <td><img src="/images/zulia.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->



                  <tr class="delay-1"><!-- Inicio -->
                    <td><img src="/images/zamorano.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-2"><!-- Inicio -->
                    <td><img src="/images/activo.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->


                </tbody>
              </table>
      </div>
      <div class="carousel-item" :class="{ 'active': currentIndex === 1 }">
        <!-- Contenido del segundo slide -->
        <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Lotería</th>
                    <th>Fecha</th>
                    <th>Día</th>
                    <th>Hora</th>
                    <th>Triple A</th>
                    <th>Triple B</th>
                    <th>Triple C + Signo</th>

                  </tr>
                </thead>
                <tbody>

                  <tr class="delay-1"><!-- Inicio -->
                    <td><img src="/images/chance.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-2"><!-- Inicio -->
                    <td><img src="/images/tachira.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-3"><!-- Inicio -->
                    <td><img src="/images/ricachona.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->



                  <tr class="delay-1"><!-- Inicio -->
                    <td><img src="/images/zamorano.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->

                  <tr class="delay-2"><!-- Inicio -->
                    <td><img src="/images/activo.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td>512</td>
                    <td>851</td>
                    <td>207 - SAG</td>
                  </tr> <!-- Fin -->


                </tbody>
              </table>
      </div>
      <div class="carousel-item" :class="{ 'active': currentIndex === 2 }">
        <!-- Contenido del tercer slide -->
        <triple-resultado> </triple-resultado> 
      </div>
      
    </div>
   </div>
</template>
<script>
  import TripleResultado from './TripleResultado.vue'; // Asegúrate de tener la ruta correcta hacia tu componente

  export default {
    components: {
      TripleResultado // Registra el componente para poder usarlo en esta plantilla
    },
    data() {
      return {
        currentIndex: 0,
        totalSlides: 3,
        intervalId: null
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
      startCarousel() {
        this.intervalId = setInterval(this.nextSlide, 10000);
      },
      stopCarousel() {
        clearInterval(this.intervalId);
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.handleSlideChange();
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.handleSlideChange();
      },
      handleSlideChange() {
        const tableRows = document.querySelectorAll('.carousel-item.active tbody tr');
        tableRows.forEach((row, index) => {
          row.classList.remove(`delay-${(index % 3) + 1}`);
          setTimeout(() => {
            row.classList.add(`delay-${(index % 3) + 1}`);
          }, 100 * index);
        });
      }
    },
    beforeUnmount() {
      this.stopCarousel();
    }
  };
</script>


<style scoped>
/* Estilos para el carrusel */
.carousel {
  width: 100%;
  margin: 5px auto;
  text-align: center;
}
.carousel-inner {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  perspective: 1200px;
}

.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  display: none;
}

.carousel-item.active {
  display: block;
  transform: rotateY(0deg);
}

button {
  margin-top: 10px;
}


@keyframes slide-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Clases para aplicar la animación en diferentes momentos */
.delay-1 {
  animation: slide-left 2.5s ease-in-out 0s forwards;
}

.delay-2 {
  animation: slide-left 2.5s ease-in-out 0.5s forwards;
}

.delay-3 {
  animation: slide-left 2.5s ease-in-out 0s forwards;
}

</style>