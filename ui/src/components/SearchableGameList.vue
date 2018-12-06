<template>
  <div>
    <section>
      <h2>
        Who's in it
      </h2>
      <p>
        {{ participants }}
      </p>
    </section>
    <section v-if="hasEnoughParticipants">
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
      <p
        class="message-area"
        v-if="hasPlayersMatchingSearch"
      >
        <span class="matching-players">{{ stringOfPlayerNames(playersNamesMatchingGameSearch) }}</span>
        might have that.
      </p>
      <p
        class="message-area"
        v-else
      >
        <span
          class="no-matching-players"
          v-if="hasSearchText && !hasPlayersMatchingSearch"
        >Horray!</span>
        {{ searchStatus }}
      </p>
      <GameList :players="playersMatchingGameSearch" />
    </section>
  </div>
</template>

<script>
import GameList from "./GameList.vue";

/* Helper functions. */
const gameIsOwned = game => {
  const isNumeric = str => !isNaN(str);
  const toNumber = str => +str;
  return isNumeric(game.own) && toNumber(game.own) > 0;
}

const filterOwnedGames = (text, games) => {
  return games.filter(game =>
    game.objectname.toLowerCase().includes(text)
    && gameIsOwned(game)
  );
}

const orderPlayersByNameAsc = (player1, player2) => {
  const name1 = player1.toLowerCase();
  const name2 = player2.toLowerCase();
  if (name1 < name2) {
    return -1;
  }
  return 1;
};

const sortGames = games => {
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

export default {
  name: "SearchableGameList",
  components: {
    GameList
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
    hasEnoughParticipants() {
      return this.playersWithAnyGame.length >= 2;
    },
    hasPlayersMatchingSearch(){
      return this.hasSearchText && this.playersMatchingGameSearch.length > 0;
    },
    hasSearchText() {
      return this.searchText !== ""
    },
    lowerCaseSearch() {
      return this.searchText.toLowerCase();
    },
    participants() {
      if (!this.hasEnoughParticipants) {
        return "Looks like we need some recruits for Secret Santa!";
      }
      const playerNames = this.playersWithAnyGame
        .map(player => player.name)
        .slice()
        .sort(orderPlayersByNameAsc);
      return `This year's participants are ${this.stringOfPlayerNames(playerNames)}.`;
    },
    playersMatchingGameSearch() {
      const hasFilteredGames = player =>
        filterOwnedGames(this.lowerCaseSearch, player.games).length > 0;
      return this.playersWithAnyGame
        .filter(hasFilteredGames)
        .map(player => ({
          name: player.name,
          games: sortGames(filterOwnedGames(this.lowerCaseSearch, player.games))
        }))
    },
    playersNamesMatchingGameSearch() {
      return this.playersMatchingGameSearch.map(player => player.name);
    },
    playersWithAnyGame() {
      const players = this.players.filter(player => {
        return player.games.filter(gameIsOwned).length > 0;
      });
      return players;
    },
    searchStatus() {
      if (!this.hasSearchText) {
        return "See below for the full game list!";
      }
      if (!this.hasPlayersMatchingSearch) {
        return "Looks like that'd be a new addition";
      }
      return '';
    },
  },
  methods: {
    stringOfPlayerNames(listOfNames) {
      const numPlayers = listOfNames.length;
      if (numPlayers === 0) {
        return ''
      } else if (numPlayers === 1) {
        return listOfNames[0]
      }
      return `${listOfNames
        .slice(0, numPlayers - 1)
        .join(", ")} and ${listOfNames[numPlayers - 1]}`
    }
  }
};
</script>

<style scoped>
.matching-players {
  text-decoration: underline;
  text-decoration-color: red;
}
.no-matching-players {
  text-decoration: underline;
  text-decoration-color: green;
}

</style>
