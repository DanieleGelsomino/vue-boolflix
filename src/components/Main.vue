<template>
  <div
    class="
      row
      text-center
      pt-5
      justify-content-center
      p-5
      dg-bg-overlay
      text-white
    "
  >
    <h2 v-if="movies.length > 0" class="text-start fs-4">Film selezionati</h2>
    <Card v-for="movie in movies" :key="movie.id" :item="movie" />
    <h2 v-if="serieTv.length > 0" class="mt-5 text-start fs-4">
      SerieTv selezionate
    </h2>
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

.dg-bg-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  height: 100%;
}

h2 {
  font-weight: $text-bold;
}
</style>