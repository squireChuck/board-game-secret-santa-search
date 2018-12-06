<template>
  <section>
    <h2>
      Who's in it
    </h2>
    <p>
      {{ participants }}
    </p>
    <h2>
      Who's got it
    </h2>
    <label for="searchField">
      Search for a game in the group's collection
    </label>
    <input
      id="searchField"
      type="text"
      v-model="searchText"
    >
    <p class="message-area">
      {{ searchStatus }}
    </p>
    <template
      v-for="player in playersMatchingGameSearch"
    >
      <GameListItem
        :games="sortedGames(filteredGames(ownedGames(player.games)))"
        :player-name="player.name"
        :key="player.name"
      />
    </template>
  </section>
</template>

<script>
import GameListItem from "./GameListItem.vue";

const orderPlayersByNameAsc = (player1, player2) => {
  const name1 = player1.toLowerCase();
  const name2 = player2.toLowerCase();
  if (name1 < name2) {
    return -1;
  }
  return 1;
};

export default {
  name: "SearchableGameList",
  components: {
    GameListItem
  },
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchText: ""
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
        .sort(orderPlayersByNameAsc);
      const numPlayers = playerNames.length - 1;
      return `This year's participants include ${playerNames
        .slice(0, numPlayers)
        .join(", ")}, and ${playerNames[numPlayers]}.`;
    },
    playersMatchingGameSearch() {
      return this.playersWithFilteredGames(this.playersWithAnyGame);
    },
    playersWithAnyGame() {
      const players = this.players.filter(player => {
        return this.ownedGames(player.games).length > 0;
      });
      return players;
    },
    searchStatus() {
      if (this.searchText === "") {
        return "See below for the full game list!";
      }
      if (this.playersMatchingGameSearch.length === 0) {
        return "Hooray, looks like that'd be a new addition!";
      }
      const names = this.playersMatchingGameSearch
        .map(player => player.name)
        .sort(orderPlayersByNameAsc);
      if (names.length === 1) {
        return `Looks like this person might have something like that: ${
          names[0]
        }`;
      }
      return `Looks like these people might have something like that: ${names.join(
        ", "
      )}`;
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
