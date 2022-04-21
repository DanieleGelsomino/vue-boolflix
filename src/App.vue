<template>
  <div class="container-fluid">
    <div id="app">
      <Header @inputSearch="getApi" />
      <Main :movies="movies" :serieTv="series" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: "04bf676ced9ced63e761c6fcbe9c02bc",
      movies: [],
      series: [],
    };
  },

  methods: {
    getApi(research) {
      if (!research == "") {
        const params = {
          query: research,
          api_key: this.apiKey,
          language: "it-IT",
        };
        // **** chiamata film ****
        axios
          .get(this.apiUrl + "movie", { params })
          .then((response) => {
            this.movies = response.data.results;
            console.log(this.movies);
          })
          .catch((error) => {
            console.log(error);
          });
        // **** chiamata serie **** tv
        axios
          .get(this.apiUrl + "tv", { params })
          .then((response) => {
            this.series = response.data.results;
            console.log(this.series);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/style/general";
</style>
