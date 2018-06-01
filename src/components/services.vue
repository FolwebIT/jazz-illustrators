<template lang="html">
  <v-layout row wrap>
    <v-flex xs>
      <v-flex class="mb-4 mt-3" hidden-sm-and-down>
        <img :src="require('../assets/stage.jpg')" alt="" class="banner">
      </v-flex>
      <v-flex class="banner mb-2" hidden-md-and-up>
        <img :src="require('../assets/mobileStage.jpg')" alt="">
      </v-flex>
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Our Services</h3>
    </v-flex>
    <v-flex xs10 class="homeMsg pa-4 white--text">
      <div class="headerText">
        Our range of services include;
      </div>
      <ul>
        <li class="ml-3">
          <span class="listhead ">Live music entertainment for all kinds of events:</span> <br>
          <p>
           The Jazz Illustrators comprise of experienced and versatile individuals
           in various genre of music. We specialize in live music entertainment
           for different kinds of events, occasions and parties e.g; Wedding and
           reception, birthday parties, Inauguration parties, anniversaries,
           get-togethers, meetings and all kinds of events that requires live
           music entertainment. We are very flexible and considerate about the
           genre of music that suites different kinds, class and categories of audience.
          </p>
        </li>
        <li class="ml-3">
          <span class="listhead ">Artistes backup:</span> <br>
          <p>
           Our range of services also covers music support for
           artistes in various genre of music. From the pool of musical
           experience resident in the band, we give a suitable music backing
           for artistes at major live performances.
          </p>
        </li>
        <li class="ml-3">
          <span class="listhead ">Music training and mentorship program:</span> <br>
          <p>
           The Jazz Illustrators also
           provide an opportunity for training, grooming and mentorship program
           for beginners, intermediate and advance learners in music. Our music
           training centre has all the facilities required to provide a qualitative
           music education
          </p>
        </li>
        <li class="ml-3">
          <span class="listhead ">Seminars and Music Worshops:</span> <br>
          <p>
            The Jazz Illustrators organizes periodical
           live changing music seminar and workshop for every interested candidates
           and upcoming generation to ensure general music orientation, education
           and literacy.
          </p>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">

</style>
