<template>
  <div class="game-list-item">
    <h3>{{ playerName }}</h3>
    <ul
      v-for="game in games"
      :key="game.objectname"
    >
      <li>
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
  border: 1px solid rgba(0,0,0, 0.25);
  border-radius: 10px;
  text-align: left;
  width: 15em;
  padding: 0.5em 1.5em;
  margin: 1em;
}
/* Common across viewport sizes */
h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
