<template>
  <div>
    <h3>{{ playerName }}</h3>
    <ul
      v-for="game in games"
      :key="game.objectname"
    >
      <li>{{ game.objectname }}</li>
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
