<template>
  <div class="container-fluid">
    <div id="app">
      <Header @inputSearch="getApi" />
      <Main :movies="movies" :serieTv="series" />
      <Firstpage :movies="movies" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Firstpage from "@/components/Firstpage.vue";
import axios from "axios";
import { apiKey } from "@/apikey";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Firstpage,
  },
  data() {
    return {
      apiUrl: "https://api.themoviedb.org/3/search/",
      apiKey: "apiKey",
      movies: [],
      series: [],
    };
  },

  methods: {
    getApi(research) {
      if (!research == "") {
        const params = {
          query: research,
          api_key: apiKey,
          language: "it-IT",
        };
        // **** chiamata film ****
        axios
          .get(this.apiUrl + "movie", { params })
          .then((response) => {
            this.movies = response.data.results;
            // console.log(this.movies);
          })
          .catch((error) => {
            console.log(error);
          });
        // **** chiamata serie **** tv
        axios
          .get(this.apiUrl + "tv", { params })
          .then((response) => {
            this.series = response.data.results;
            //console.log(this.series);
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
