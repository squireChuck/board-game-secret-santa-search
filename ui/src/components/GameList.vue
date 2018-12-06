<template>
  <div class="container-flex">
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
/* decent change that some of these flex settings should change
   based on viewport size. */
.container-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
