<template>
  <div class="row text-center pt-5">
    <h2 class="text-danger">Film</h2>
    <Card v-for="movie in movies" :key="movie.id" :item="movie" />
    <h2 class="text-danger">SerieTv</h2>
    <Card v-for="serie in serieTv" :key="serie.id" :item="serie" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "MainComponent",
  props: {
    movies: Array,
    serieTv: Array,
  },
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";
</style>