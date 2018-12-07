<template>
  <div class="container-flex game-list">
    <template v-for="(player, idx) in players">
      <GameListItem
        :games="player.games"
        :player-name="player.name"
        :key="`${player.name}-${idx}`"
      />
    </template>
  </div>
</template>

<script>
import GameListItem from './GameListItem.vue'
export default {
  name: 'GameList',
  components: {
    GameListItem
  },
  props: {
    players: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.container-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.game-list {
  margin: 1.25em 0 0 0;
}
</style>
