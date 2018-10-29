<template>
  <div>
    <h1>Game listing</h1>
    <input type="text" v-model="searchText">
    <div
      v-for="player in playersWithFilteredGames(players)"
      :key="player.name"
    >
      <h3>{{ player.name }}</h3>
      <ul
        v-for="game in sortedGames(filteredGames(ownedGames(player.games)))"
        :key="game.objectname"
      >
        <li>{{ game.objectname }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameListing",
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  computed: {
    lowerCaseSearch() {
      return this.searchText.toLowerCase();
    }
  },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    filteredGames(games) {
      return games.filter(game =>
        game.objectname.toLowerCase().includes(this.lowerCaseSearch)
      );
    },
    playersWithFilteredGames(players) {
      const hasFilteredGames = player =>
        this.filteredGames(player.games).length > 0;
      return players.filter(hasFilteredGames);
    },
    ownedGames(games) {
      const isNumeric = str => !isNaN(str);
      const toNumber = str => +str;
      return games.filter(
        game => isNumeric(game.own) && toNumber(game.own) > 0
      );
    },
    sortedGames(games) {
      const orderAlphaAsc = (game1, game2) => {
        const name1 = game1.objectname.toLowerCase();
        const name2 = game2.objectname.toLowerCase();
        if (name1 < name2) {
          return -1;
        } else if (name1 === name2) {
          return 0;
        }
        return 1;
      };
      return games.slice().sort(orderAlphaAsc);
    }
  }
};
</script>
