<template>
  <div class="game-list-item">
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
.game-list-item {
  text-align: left;
  border-right: 1px solid rgba(0,0,0, 0.25);
  padding: 0 20px;
  max-width: 20em;
}
/* Common across viewport sizes */
h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
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
