<template>
  <div
    class="row text-center pt-5 justify-content-center p-5 text-white dg-main"
  >
    <!-- **** Card Film **** -->
    <h2 v-if="movies.length > 0" class="text-start fs-4">Film selezionati</h2>
    <div class="dg-container-card">
      <Card v-for="movie in movies" :key="movie.id" :item="movie" />
    </div>

    <!-- **** Card Serie Tv **** -->
    <h2 v-if="serieTv.length > 0" class="mt-5 text-start fs-4">
      SerieTv selezionate
    </h2>
    <div class="dg-container-card">
      <Card v-for="serie in serieTv" :key="serie.id" :item="serie" />
    </div>
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

h2 {
  font-weight: $text-bold;
}

.dg-container-card {
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 5px;
  height: 100%;
}
</style>