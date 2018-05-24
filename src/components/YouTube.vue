<template lang="html">
  <v-layout>
    <v-flex hidden-md-and-up>
      <youtube
        :video-id="youtubeId"
        :player-width="300"
        :player-height="331">
      </youtube>
      <a target="_blank" :href="url" class="Vtitle white--text">{{ title }}</a>
      <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
    </v-flex>
    <v-flex hidden-sm-and-down>
      <youtube
        :video-id="youtubeId"
        :player-width="450"
        :player-height="331">
      </youtube>
      <a target="_blank" :href="url" class="Vtitle white--text">{{ title }}</a>
      <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
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

<style lang="css" scoped>
.Vtitle {
  text-align: left !important;
  float: left;
  margin: 0 auto 0 15px;
  text-decoration: none;
  font-size: 17px
}
</style>
