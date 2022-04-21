<template>
  <div
    @mouseover="isOver"
    @mouseleave="isLeave"
    class="dg-card align-items-center text-white"
  >
    <div v-if="!cardOver">
      <!-- **** Poster **** -->
      <img
        v-if="item.poster_path"
        :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`"
        :alt="item.title || item.name"
      />
      <span v-else class="text-white no-img">Copertina non disponibile</span>
    </div>
    <div v-else>
      <!-- **** Titolo + Titolo originale + Voto + Lingua **** -->
      <div class="text text-white pt-3 ps-2 pe-1">
        <!-- **** Titolo **** -->
        <h3 class="title">
          <span>Titolo:</span>
          {{ item.title || item.name }}
        </h3>
        <!-- **** Titolo originale **** -->
        <h4 class="original-title">
          <span>Titolo Originale:</span>
          {{ item.original_title || item.original_name }}
        </h4>
        <!-- ***** Voto con stelle **** -->
        <p class="vote">
          Voto:
          <!-- **** Stelle piene **** -->
          <i
            :key="'star' + index"
            v-for="(star, index) in getStars(item)"
            class="fa-solid fa-star stars"
          ></i>
          <!-- **** Stelle vuote **** -->
          <i
            :key="'emptystar' + index"
            v-for="(emptystar, index) in 5 - getStars(item)"
            class="fa-regular fa-star"
          ></i>
        </p>
        <!-- **** Icona bandiera **** -->
        <p class="language d-flex align-items-center">
          Lingua:
          <country-flag
            v-if="item.original_language == 'en'"
            country="gb"
            size="small"
          />
          <country-flag
            v-if="item.original_language == 'ja'"
            country="jp"
            size="small"
          />
          <country-flag
            v-if="item.original_language"
            :country="item.original_language"
            size="small"
          />
          <country-flag v-else country="gb" size="small" />
        </p>
        <p class="overview-title">
          Panoramica:
          <span v-if="item.overview" class="overview-text ms-1">{{
            item.overview
          }}</span>
          <span v-else class="overview-text text-capitalize"
            >Non disponibile <i class="fa-regular fa-face-frown ms-1"></i
          ></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
export default {
  name: "CardComponent",
  props: {
    item: Object,
  },
  components: {
    CountryFlag,
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
  position: relative;
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border: 2px solid rgba($color: #fff, $alpha: 0.2);
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
    span {
      font-weight: 600;
    }
    .title {
      font-size: $f-size-8;
    }
    .original-title {
      font-size: $f-size-8;
    }
    .vote,
    .language,
    .overview-title {
      font-size: $f-size-7;
      font-weight: 600;
      line-height: 11px;
      .stars {
        color: gold;
      }
    }
    .overview-title {
      overflow: scroll;
      height: 100px;
      .overview-text {
        font-size: $f-size-6;
        font-weight: 400;
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