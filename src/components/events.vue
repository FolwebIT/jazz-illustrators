<template lang="html">
  <v-layout row wrap>
    <v-flex class="banner mb-4" hidden-sm-and-down>
      <img :src="require('../assets/stage.jpg')" alt="">
    </v-flex>
    <v-flex class="banner mb-4" hidden-md-and-up>
      <img :src="require('../assets/mobileStage.jpg')" alt="">
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Upcoming Events</h3>
    </v-flex>
    <v-flex xs8 class="homeMsg pa-4 white--text">
      <p>
        The Jazz Illustrators has a lot in stock for our fans and music lovers,
        and there’s this slogan our audience normally says to commend the band that
        “the Jazz Illustrators are unpredictable”. Meaning that each time we announce
        an event, we normally come up with a new thing and new ideas.
      </p>
      <ul>
        <li class="ml-5">
          <h1 class="display-1">Jazz Serenata</h1> <br>
          <p>
            This is a quarterly event organized by the Jazz illustrators purposely
            to satisfy the consistent quest for excellent Jazz music by our fans.<br>
            Date for the next edition will be communicated via our website and social
            media platforms.
          </p>
        </li>
        <li class="ml-5">
          <h1 class="display-1">ABUJA JAZZ AND CULTURAL EXHIBITION (A.J.A.C.E)</h1> <br>
          <p>
            <a class="white--text" href="/products">read more about (A.J.A.C.E) on our products page</a>
          </p>
        </li>
      </ul>
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Past Events</h3>
    </v-flex>
    <v-flex xs8 class="homeMsg pa-4 white--text">
      <p>
        The Jazz Illustrators has been opportune to organize well attended
        ticketed and gate free Jazz events in the Federal Capital Territory
        of Nigeria that has carved a niche for the excellent band in the music
        Industry. Few among them include:
      </p>
      <ul>
        <li class="ml-5">
          <h1 class="display-1">The Gospel Jazz Explosion (G.O.J.E) </h1> <br>
          <p>
            which was an historic event that took creativity into another level
            by inventing the idea of live Jazz performance alongside with stage
            acting on the same platform. G.O.J.E announced the birth of the Jazz
            Illustrators on the 30th June, 2013. Other supporting acts include:
            the Summit Theatre, Mike Wonder- Solo Bassist, Magnate Piano,
            Abraham Komolafe, Israel Eliagwu, Enenche Enenche and lots more
          </p>
        </li>
        <li class="ml-5">
          <h1 class="display-1">Candle Light Symphony</h1> <br>
          <p>
            Candle light Symphony is an annual Jazz event for the Christmas season.
            The first edition was a Jazz concert held on the 12th Dec, 2015 to
            commemorate the felicity of the Yuletide season with live performance of
            excellent Christmas songs by the Jazz Illustrators. The concert really
            interpreted the season due to the cozy ambience of the venue Barcelona
            Roof Top Lounge, Wuse 2, Abuja
          </p>
        </li>
        <li class="ml-5">
          <h1 class="display-1">Jazz Serenata</h1> <br>
          <p>
            The Jazz Serenata is a quarterly fusion Jazz event by the Jazz Illustrators
            to cheer the Jazz lovers in the Federal Capital Territory of Nigeria and
            beyond. The first edition came up on the 15th May, 2013 and our audience
            could but quest for more. Supporting acts at this event includes
            Mike Wonder- Nigeria’s best solo bassist, Jazzari- Nigeria’s Lead
            Female Jazz artiste, Funky Professor – Comedy, Wild Buck Crew- Dance,
            Bash Amuneni- Poetry and lots more. The effect of the poolside ambience
            coziness added to the good view.
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
