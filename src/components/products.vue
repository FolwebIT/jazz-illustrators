<template lang="html">
  <v-layout colum wrap class="mt-3">
    <v-flex class="banner mb-4" hidden-sm-and-down>
      <img :src="require('../assets/stage.jpg')" alt="">
    </v-flex>
    <v-flex class="mobilePics mb-4" hidden-md-and-up>
      <img :src="require('../assets/mobileStage.jpg')" alt="">
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Our Products</h3>
    </v-flex>
    <v-flex xs10 class="homeMsg pa-4 white--text">
      <!-- <span class="about" > -->
        <p>
          The Jazz Illustrators has designed different packages for different classes
          of people. Jazz Illustrators is positioning to play its music to audience
          at events such as corporate events, weddings and wedding receptions,
          parties, embassy functions, surprise parties, Annual General Meetings,
          marriage proposal, cocktail parties, family and friends hangouts etc.
          Some of which include the following packages
        </p>
        <ul>
          <li class="ml-5">
            <h1 class="listhead body-1">Embassy Jazz Tour </h1> <br>
            <p>
              This is designed to take fusion Jazz {Foreign and African Jazz}
              music from one Embassy to the other. The main objective is to
              promote cultural integration and to create a feel of their home
              country music even while they are officially resident in Nigeria.
              This particular package is opened to every Embassy across Nigeria.
              We are very much opened to discussion about this.
            </p>
          </li>
          <li class="ml-5">
            <h1 class="listhead body-1">Jazz Family Fun Festival </h1> <br>
            <p>
              This is a product for Jazz loving families, who desires a hangout
              with the Jazz Illustrators.  This is one on one live Jazz entertainment
              with the Jazz Illustrators where clients are at liberty to make
              special requests of common Jazz standards or any popular songs.
              Jazz family in this context is not limited to group of people who
              are biologically related, but individuals, Corporate Organizations,
              private individuals, families, friends and jazz loving fans with common
              interest.
            </p>
          </li>
          <li class="ml-5">
            <h1 class="listhead body-1">Eti’do Jazz Serenade </h1> <br>
            <p>
              This simply means “Jazz music” by the “poolside”.
              One cannot over emphasize the satisfaction derivable
              from the coziness of an ambience of a pool side. However,
              it is part of our package to help people climax their
              recreation moment at the pool side by serenading you clients
              with an excellent Jazz music.
              This package is not limited to hotels and bars, but also
              residential apartments and other places that has pool
              inside its premises.
            </p>
          </li>
          <li class="ml-5">
            <h1 class="listhead body-1">GOJA Festival </h1> <br>
            <p>
              Gospel Jazz Festival is a major annual Jazz event that gather the
              largest concert crowd annually across the Federal Capital Territory
              and Nigeria at large reasons not only been that it is a gate free event
              but that the content is very captivating and interesting. It is an
              atmosphere of intense Jam session with fusion of other arts like dance,
              theatre, poetry etc. It is also an event that is meant to be a Tour
              from one state to the other, from one Church to the other.
              This particular package is opened to Churches who
            </p>
          </li>
          <li class="ml-5">
            <h1 class="listhead body-1">Abuja Jazz and Cultural Exhibition (AJACE) </h1> <br>
            <p>
              This is more like a National day of Jazz and Cultural Exhibition.
              This is a unique event with a very uncommon concept of concurrently
              performing a live Jazz and cultural dance on this same platform
              purposely to promote African culture and Nigerian native music.
              It is meant to be an annual event. Further details shall be
              communicated on our website and social media platforms.
              There is a session before and after the concert proper
              that avails a platform for people to display their cultural artifacts,
              materials and art works for sale.

              The concert proper is done in collaboration with art and traditional
              dance steps reflecting the cultural background of some major geopolitical
               zones in Nigeria.
              We tend to create a sync between two extremes Jazz and Cultural Dance
              to perform concurrently on the same platform.
            </p>
          </li>
        </ul>
      <!-- </span> -->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">
.listhead {
  font-weight: 800 !important;
}
</style>
