<template>
  <div class="row justify-content-between bg-black align-items-center p-2">
    <h1 class="title col-4 pt-2">Boolflix</h1>
    <!-- **** Searchbar **** -->
    <div class="col-5 text-end">
      <input
        type="text"
        placeholder="Cerca un film o serie tv..."
        v-model="searchContent"
        @keyup.enter="$emit('inputSearch', searchContent)"
        class="text-center dg-searchbar"
      />
      <button
        @click="$emit('inputSearch', searchContent)"
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
};
</script>

<style scoped lang="scss">
@import "@/style/varstyles";

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