<template lang="html">
  <div class="mt-3">
    <v-layout row wrap>
      <!-- <v-flex mt-3>
        <p class="white--text">over the years, we have uploaded most of our live event videos to youtube..... </p>

      </v-flex> -->
    </v-layout>
    <v-layout row wrap>

      <!-- <div class="holder"> -->
        <v-flex xs4
          class="videos"
          v-for="(video, i) in videos"
          :key="i">
          <you-tube :url="video.url" :youtubeId="video.id" :title="video.title"/>
        </v-flex>
      <!-- </div> -->
    </v-layout>
  </div>
</template>

<script>
import YouTube from '@/components/YouTube'
export default {
  data () {
    return {
      videos: [
        {
          title: 'New Dawn',
          id: 'QkvOS9IbTHo',
          url: 'https://www.youtube.com/watch?v=QkvOS9IbTHo'
        },
        {
          title: 'Amazing Grace',
          id: 'ZAY7pDSe8lQ',
          url: 'https://www.youtube.com/watch?v=ZAY7pDSe8lQ'
        },
        {
          title: 'Synergy',
          id: 'ncbcaLudhyA',
          url: 'https://www.youtube.com/watch?v=ncbcaLudhyA'
        },
        {
          title: 'Amazing',
          id: 'FvClW2mLrxs',
          url: 'https://www.youtube.com/watch?v=FvClW2mLrxs'
        },
        {
          title: 'Thank You - Jazz Illustrators Ft. Francez Ojoh',
          id: '14vloJICIbQ',
          url: 'https://www.youtube.com/watch?v=14vloJICIbQ'
        },
        {
          title: 'Wine Light - Jazz Illustrators @Gospel Jazz Explosion Chapter 2',
          id: '7SfcQo0-zsI',
          url: 'https://www.youtube.com/watch?v=7SfcQo0-zsI'
        },
        {
          title: 'KILE OLESE',
          id: '3P5XmnXERKE',
          url: 'https://www.youtube.com/watch?v=3P5XmnXERKE'
        },
        {
          title: 'Last shepherdess',
          id: '5tXxQs5YnYQ',
          url: 'https://www.youtube.com/watch?v=5tXxQs5YnYQ'
        },
        {
          title: 'SUNRISE',
          id: 'weoZtJvju_8',
          url: 'https://www.youtube.com/watch?v=weoZtJvju_8'
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
  width: 400px;
  height: 380px;
  display: inline-block;
  margin-right: 25px;
  margin:   auto;
  margin-top: 15px;
  /* border: 1px solid #000 !important; */
}
/* .holder {
  width: 100%;
  margin: auto;
  border: 1px solid red;
} */
</style>
