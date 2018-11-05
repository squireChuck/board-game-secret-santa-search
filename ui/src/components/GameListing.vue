<template>
  <div class="container-grid">
    <header id="header-sm">
      <img
        :src="require('../assets/img/santa-hat-icon-32px.png')"
        alt="Santa Hat"
        class="logo"
      >
      <h1>BGS3</h1>
    </header>
    <header id="header-lg">
      <img
        :src="require('../assets/img/santa-hat-icon-48px.png')"
        alt="Santa Hat"
        class="logo"
      >
      <h1>Board Game Secret Santa Search</h1>
    </header>
    <section>
      <h2>
        Game search
      </h2>
      <div>
        {{ participants }}
      </div>
      <label for="searchField">
        Search for a game in the group's collection
      </label>
      <input
        id="searchField"
        type="text"
        v-model="searchText"
      >
      <div class="message-area">
        See below for the full game list!
        /
        Typing...
        /
        Looks like these Jim and Jane might have something like that...
        /
        Hooray, looks like that'd be a new addition!
      </div>
      <div
        v-for="player in playersMatchingGameSearch"
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
    </section>
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
  data() {
    return {
      searchText: "",
      searchTextIsDirty: false,
      userIsTyping: false
    };
  },
  computed: {
    lowerCaseSearch() {
      return this.searchText.toLowerCase();
    },
    participants() {
      if (this.playersWithAnyGame.length < 2) {
        return "Looks like we need some recruits for Secret Santa!";
      }
      const playerNames = this.playersWithAnyGame
        .map(player => player.name)
        .slice()
        .sort((p1, p2) => {
          const name1 = p1.toLowerCase();
          const name2 = p2.toLowerCase();
          if (name1 < name2) {
            return -1;
          }
          return 1;
        });
      const numPlayers = playerNames.length - 1;
      return `This year's participants include ${playerNames
        .slice(0, numPlayers - 1)
        .join(", ")} and ${playerNames[numPlayers]}.`;
    },
    playersMatchingGameSearch() {
      return this.playersWithFilteredGames(this.playersWithAnyGame);
    },
    playersWithAnyGame() {
      const players = this.players.filter(player => {
        return this.ownedGames(player.games).length > 0;
      });
      return players;
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 767px) {
  #header-sm {
    display: show;
  }
  #header-lg {
    display: none;
  }
}
@media (min-width: 768px) {
  #header-sm {
    display: none;
  }
  #header-lg {
    display: show;
  }
}
</style>
