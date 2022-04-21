<template>
  <div class="row text-center pt-5 movie-list justify-content-center p-5">
    <h2 v-if="movies.length > 0" class="text-danger">Film</h2>
    <Card v-for="movie in movies" :key="movie.id" :item="movie" />
    <h2 v-if="serieTv.length > 0" class="text-danger">SerieTv</h2>
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

.movie-list {
  background-color: rgba(255, 255, 255, 0.495);
  height: 100%;
}
</style>