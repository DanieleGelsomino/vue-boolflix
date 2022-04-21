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
      <span v-else class="text-white no-img">Immagine non disponibile</span>
    </div>
    <div v-else>
      <div class="text text-white pt-3 ps-2 pe-1">
        <h3 class="title">
          <span>Titolo:</span>
          {{ item.title || item.name }}
        </h3>
        <h4 class="original-title">
          <span>Titolo Originale:</span>
          {{ item.original_title || item.original_name }}
        </h4>
        <p class="info">
          Voto:
          <i
            :key="'star' + index"
            v-for="(star, index) in getStars(item)"
            class="fa-solid fa-star stars"
          ></i>
          <i
            :key="'emptystar' + index"
            v-for="(emptystar, index) in 5 - getStars(item)"
            class="fa-regular fa-star"
          ></i>
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
    isOver() {
      this.cardOver = true;
    },
    isLeave() {
      this.cardOver = false;
    },

    getStars(item) {
      return Math.ceil(item.vote_average / 2);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";

.dg-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 20%;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border: 2px solid gray;
  }

  .no-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: $f-size-7;
  }
  .text {
    text-align: start;
    .title {
      font-size: $f-size-8;
    }
    .original-title {
      font-size: $f-size-8;
    }
    .info {
      font-size: $f-size-7;
      line-height: 12px;
      .stars {
        color: gold;
      }
    }
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