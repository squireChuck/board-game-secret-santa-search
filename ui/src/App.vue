<template>
  <div id="app">
    <GameListing :players="players"/>
  </div>
</template>

<script>
import GameListing from "./components/GameListing.vue";

const testPlayers = [
  {
    name: "jane",
    games: [
      {
        objectname: "7 Wonders",
        own: "1"
      },
      {
        objectname: "Carcassonne",
        own: "1"
      },
      {
        objectname: "Ticket to Ride: Europe",
        own: "1"
      }
    ]
  },
  {
    name: "jim",
    games: [
      {
        objectname: "Catan",
        own: "1"
      },
      {
        objectname: "Ticket to Ride: Europe",
        own: "1"
      }
    ]
  },
  {
    name: "joanne",
    games: [
      {
        objectname: "7 Wonders",
        own: "1"
      },
      {
        objectname: "Catan",
        own: "1"
      }
    ]
  },
  {
    name: "john",
    games: [
      {
        objectname: "Dominion",
        own: "1"
      }
    ]
  }
];

export default {
  name: "app",
  components: {
    GameListing
  },
  data() {
    return {
      players: testPlayers
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
