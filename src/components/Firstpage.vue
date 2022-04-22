<template>
  <div v-if="movies.length <= 0">
    <div class="row text-center text-white">
      <div
        class="
          col
          d-flex
          flex-column
          align-items-center
          justify-content-center
          first-page
        "
      >
        <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
        <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
        <h3>
          Vuoi guardare Boolflix? Inizia a cercare i Film e le Serie TV che
          preferisci.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  props: {
    movies: Array,
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";

.first-page {
  margin-top: 100px;
}

h1 {
  font-size: $f-size-30;
  width: 60%;
  font-weight: 600;
}
h2 {
  font-size: $f-size-15;
}

h3 {
  font-size: $f-size-12;
}
</style>