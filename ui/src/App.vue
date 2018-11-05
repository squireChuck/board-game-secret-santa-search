<template>
  <div id="app">
    <GameListing :players="players"/>
  </div>
</template>

<script>
import GameListing from "./components/GameListing.vue";
import players from "./resources/players.json";

export default {
  name: "app",
  components: {
    GameListing
  },
  data() {
    return {
      players
    };
  }
};
</script>
