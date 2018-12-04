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
