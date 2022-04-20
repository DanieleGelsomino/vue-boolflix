<template>
  <div class="row">
    <h3>
      {{ item.title || item.name }}
    </h3>
    <h4>
      {{ item.original_title || item.original_name }}
    </h4>
    <p>{{ item.vote_average }} {{ item.original_language }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    item: Object,
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";
</style>

// esempio card chiamata da Api
/*
  backdrop_path: "/rrBtfYvuTAR2BsCVgl31LVSenRh.jpg"
  first_air_date: "2011-07-01"
  genre_ids: Array(4)
  id: 43270
  name: "Blood-C"
  origin_country: Array(1)
  original_language: "ja"
  original_name: "Blood-C"
  overview: "Blood-C si concentra su Saya Kisaragi, una ragazza apparentemente normale che funge da fanciulla del santuario in una città di campagna; in realtà, è un'abile spadaccina incaricata dal padre di sconfiggere l'anziano Bairns, mostri che si nutrono di sangue umano. Man mano che le sue battaglie diventano più disperate e più persone a cui tiene cadono vittima degli Elder Bairns, Saya inizia a trovare difetti nella sua realtà e alla fine scopre una verità inquietante su se stessa, la città e i suoi amici sopravvissuti."
  popularity: 27.555
  poster_path: "/5Mn9uQf5mqZ4ZqsZoi7oCcQslUj.jpg"
  vote_average: 8.1
  vote_count: 135

*/