<template>
  <div
    class="
      row
      justify-content-between
      dg-bg-navbar
      align-items-center
      p-2
      sticky-top
    "
  >
    <h1 class="title col-4 pt-2">Boolflix</h1>
    <!-- **** Searchbar **** -->
    <div class="col-5 text-end">
      <input
        type="text"
        placeholder="Cerca un film o serie tv..."
        v-model="searchContent"
        @keyup.enter="searchMovieOrSeries"
        class="text-center dg-searchbar"
      />
      <button
        @click="searchMovieOrSeries"
        type="button"
        class="dg-btn text-white"
      >
        Cerca
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchContent: "",
    };
  },

  methods: {
    searchMovieOrSeries() {
      this.$emit("inputSearch", this.searchContent);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";

.dg-bg-navbar {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.title {
  color: $title-red;
  font-weight: 600;
}

.dg-searchbar {
  border: none;
  font-size: $f-size-8;
  padding: 4px 6px;
  &:focus-visible {
    outline-color: black;
  }
}

.dg-btn {
  background-color: $bg-red;
  border: none;
  font-size: $f-size-8;
  padding: 4px 6px;
  &:hover {
    cursor: pointer;
    background-color: rgb(206, 7, 7);
    transform: scale(1.1);
  }
}
</style>