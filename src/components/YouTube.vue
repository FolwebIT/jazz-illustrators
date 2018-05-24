<template lang="html">
  <v-layout>
    <v-flex>
      <youtube
        :video-id="youtubeId"
        :player-width="400"
        :player-height="331">
      </youtube>
      <span class="Vtitle white--text">{{ title }}</span>
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  props: [
    'youtubeId', 'title', 'url'
  ]
}
</script>

<style lang="css">
</style>
