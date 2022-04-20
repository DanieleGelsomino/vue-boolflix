<template>
  <div class="row justify-content-center">
    <input
      type="text"
      placeholder="Cerca un film o serie tv ..."
      v-model="searchContent"
      @keyup.enter="$emit('inputSearch', searchContent)"
      class="col-4 text-center mt-3"
    />
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
</style>