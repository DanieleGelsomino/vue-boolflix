<template>
  <div
    @mouseover="isOver"
    @mouseleave="isLeave"
    class="dg-card align-items-center text-white"
  >
    <div v-if="!cardOver">
      <img
        v-if="item.poster_path"
        :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`"
        :alt="item.title || item.name"
      />
      <span v-else class="text-black pt-5">No Image</span>
    </div>
    <div v-else>
      <div class="text text-black">
        <h3 class="title">
          Titolo:
          {{ item.title || item.name }}
        </h3>
        <h4 class="original-title">
          Titolo Originale:
          {{ item.original_title || item.original_name }}
        </h4>
        <p class="info">
          Voto: {{ item.vote_average }}{{ item.original_language }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    item: Object,
  },
  data() {
    return {
      cardOver: false,
    };
  },

  methods: {
    //card over controls
    isOver() {
      this.cardOver = true;
    },
    isLeave() {
      this.cardOver = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";

.dg-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 20%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: $f-size-8;
  }
  .original-title {
    font-size: $f-size-8;
  }
  .info {
    font-size: $f-size-7;
    line-height: 12px;
  }
}
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