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
                    <th>Animalito</th>
                  </tr>
                </thead>
                <tbody>

                  <tr><!-- Inicio -->
                    <td><img src="/images/animal/chance.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td><img src="/images/animal/perro.png" alt="Triple Caliente"></td>
                  </tr> <!-- Fin -->

                  <tr><!-- Inicio -->
                    <td><img src="/images/animal/LogoTerminalito.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td><img src="/images/animal/r80.jpg" alt="Triple Caliente"></td>
                  </tr> <!-- Fin -->


                  <tr><!-- Inicio -->
                    <td><img src="/images/animal/guacharo.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td><img src="/images/animal/66.png" alt="Triple Caliente"></td>
                  </tr> <!-- Fin -->

                  <tr><!-- Inicio -->
                    <td><img src="/images/animal/selva-plus.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td><img src="/images/animal/ballena.png" alt="Triple Caliente"></td>
                  </tr> <!-- Fin -->

                  <tr><!-- Inicio -->
                    <td><img src="/images/animal/granjita.png" alt="Triple Caliente"></td>
                    <td>27-11-2023</td>
                    <td>Lunes</td>
                    <td>07:10 PM</td>
                    <td><img src="/images/animal/07_perico.png" alt="Triple Caliente"></td>
                  </tr> <!-- Fin -->

                  


                </tbody>
              </table>
      </div>
      
      
    </div>
   </div>
</template>
<script>
 
  export default {
    
    data() {
      return {
        currentIndex: 0,
        totalSlides: 1,
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
img, svg {
    vertical-align: middle;
    width: 70px;
    border-radius: 15px;

}
</style>



