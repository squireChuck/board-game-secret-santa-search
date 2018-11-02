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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
