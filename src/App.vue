<template>

    <Header />


    <router-view />


    <Footer />

</template>


<script lang="ts">
import Header from "./components/MyHeader.vue";
import Footer from './components/MyFooter.vue';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
