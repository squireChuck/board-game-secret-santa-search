<template>
  <div>
    <h3>{{ playerName }}</h3>
    <ul
      v-for="game in games"
      :key="game.objectname"
    >
      <li class="game-name">
        {{ game.objectname }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GameListItem",
  props: {
    playerName: {
      type: String,
      required: true
    },
    games: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Common across viewport sizes */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.game-name {
  max-width: 15em;
}

@media (min-width: 44em) {
  .game-name {
    max-width: 40em;
  }
}
</style>
