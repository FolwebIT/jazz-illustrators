<template lang="html">
  <v-layout row wrap pa-3>
    <v-flex >
      <h1 class="white--text">over the years, we have uploaded most of our live event videos to youtube..... </h1>
    </v-flex>
    <v-flex
      class="videos text-xs-center"
      xs4
      v-for="(video, i) in videos"
      :key="i">
      <you-tube :youtubeId="video.id" :title="video.title"/>
    </v-flex>
    <v-layout row wrap>

    </v-layout>
  </v-layout>
</template>

<script>
import YouTube from '@/components/YouTube'
export default {
  data () {
    return {
      videos: [
        {
          title: 'New Dawn', id: 'QkvOS9IbTHo'
        },
        {
          title: 'Amazing Grace', id: 'ZAY7pDSe8lQ'
        },
        {
          title: 'Synergy', id: 'ncbcaLudhyA'
        },
        {
          title: 'Amazing', id: 'FvClW2mLrxs'
        },
        {
          title: 'Thank You - Jazz Illustrators Ft. Francez Ojoh', id: '14vloJICIbQ'
        },
        {
          title: 'Wine Light - Jazz Illustrators @Gospel Jazz Explosion Chapter 2', id: '7SfcQo0-zsI'
        },
        {
          title: 'KILE OLESE', id: '3P5XmnXERKE'
        },
        {
          title: 'Last shepherdess', id: '5tXxQs5YnYQ'
        },
        {
          title: 'SUNRISE', id: 'weoZtJvju_8'
        }
      ]
    }
  },
  components: {
    YouTube
  }
}
</script>

<style lang="css" scoped>
.videos {
  /* border: 1px solid #000 !important; */
}
</style>
