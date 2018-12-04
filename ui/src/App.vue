<template>
  <div id="app" class="container-grid page">
    <TheHeader />
    <SearchableGameList :players="players"/>
  </div>
</template>

<script>
import SearchableGameList from "./components/SearchableGameList.vue";
import TheHeader from "./components/TheHeader.vue";
import players from "./resources/players.json";

export default {
  name: "app",
  components: {
    SearchableGameList,
    TheHeader
  },
  computed: {
    players() {
      return players;
    }
  }
};
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-template-rows: 2.5em 1fr;
}

/* 40em - 640px */
@media (min-width: 40em) {
  .container-grid {
    display: grid;
    grid-template-rows: 3.5em 1fr;
  }
}
/* 50em - 800px */
@media (min-width: 50em) {
  .container-grid {
    display: grid;
    grid-template-rows: 4em 1fr;
  }
}
</style>
