<template lang="html">
  <div>
    <v-layout row wrap>
      <v-flex class="carousel hidden-sm-and-down">
        <v-carousel hide-controls class="" hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" size="100px"></v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-flex xs12 class="carousel hidden-md-and-up">
        <v-carousel hide-controls class="" xs6 hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" size="100px"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3">
      <v-flex>
        <h3 absolute class="display-3 homeHead">{{msg}}</h3>
      </v-flex>
    </v-layout>

    <v-layout row class="mt-4">
      <v-flex xs10 offset-xs3 class="homeMsg pa-4">
        <!-- <v-jumbotron scrollable color="grey" class="homeJum" width="auto"> -->
            <!-- <v-layout align-center> -->
              <!-- <v-flex text-xs-left scrollable> -->
                <span class="Welcome" >
                  <p>
                    The Jazz Illustrators is a Nigerian based outstanding musical band which
                    originated from  the Federal Capital Territory of Nigeria, and it’s made
                    up of multi-talented individuals in their various musical careers with a
                    burning passion for excellent music. The band came in to existence in 2013
                    with just few passionate friends alongside the convener (Fade De Great).
                    Our first appearance was the Gospel Jazz Explosion, an event that initiated
                    the idea of live gospel jazz performance with stage acting.
                  </p>
                  <p>
                    Jazz Illustrators is known for excellence, originality, creativity,
                    competence, artistic performance, and synergy. Our style of music can
                    be described as a fusion Jazz music which allows all kinds of genre of
                    music, expression and improvisation. We can proudly say we don’t sound
                    like anyone but just been unique for our kind of music.
                  </p>
                  <p>
                    We are poised for promoting African native music and cultural
                    values with the blend of foreign jazz music, however making the
                    African native music recognized all over the world. Our interpretation of
                    music is unconventional but unique in such that all kinds of audience can
                    find their expression.
                  </p>
                </span>

        <v-divider class="my-3"></v-divider>
        <!-- <div class="more"> -->
          <v-btn large color="red darken-4" class="mb-3">Read more</v-btn>
          <v-btn large color="grey" class="mb-3">Past Events</v-btn>
        <!-- </div> -->
      </v-flex>
    </v-layout>

    <v-layout class="mt-5">
      <v-flex xs6 sm6 class="mr-5 ml-5 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2013</h1> -->
          <v-card-media
            :src="require('../assets/stage.jpg')"
            height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2013</h3>
              <div class="cardtext">
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm6 class="mr-5 ml-5 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            clas
            :src="require('../assets/2016.jpg')"
             height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2013</h3>
              <div class="cardtext">
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="mr-5 ml-5 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            :src="require('../assets/2017.jpg')"
            height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2013</h3>
              <div class="cardtext">
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="d-block mt-4">
      <v-flex class="xs10 mb-3 hidden-md-and-up smallScreen">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            :src="require('../assets/2017.jpg')"
            height="200px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2013</h3>
              <div class="cardtext">
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="xs10 mb-3 hidden-md-and-up smallScreen">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            :src="require('../assets/2016.jpg')"
            height="200px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2016</h3>
              <div>
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 class="xs10 mb-2 hidden-md-and-up smallScreen">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            :src="require('../assets/2017.jpg')"
            height="200px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-0">GOJE 2017</h3>
              <div class="cardtext">
                <p>which was an historic event that took creativity into another
                  level by inventing the idea of live Jazz performance alongside
                  with stage acting on the same platform. It is an annual Jazz
                  event now in the month of November.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import pic1 from '../assets/logo_black.jpg'
import pic2 from '../assets/logo_white.jpg'
import pic3 from '../assets/edit2.jpg'
import pic4 from '../assets/edit.jpg'
import pic5 from '../assets/lion1.jpeg'
import pic6 from '../assets/stage.jpg'
export default {
  data () {
    return {
      msg: 'Welcome to Jazz Illustrators',
      items: [
        {
          src: pic2
        },
        {
          src: pic3
        },
        {
          src: pic4
        },
        {
          src: pic5
        },
        {
          src: pic6
        }
      ],
      cardItems: {
        goje2013: '../assets/stage.jpg'
      }
    }
  }
}
</script>

<style lang="css">
.homeMsg {
  border: 4px solid #ffffb3;
  border-radius: 10px;
  border-style:ridge;
  margin: auto !important;
  color: white;
  /* text-align: justify; */
}
.smallScreen{
  margin: auto;
}
.homeHead {
  font-family: 'Great Vibes', cursive;
  color: white;
  text-align: center !important;
}
.cards {
  margin: 0 auto;
  border: 4px solid #ffffb3;
  border-radius: 10px;
  border-style:ridge;
}
.card h3 {
  font-family: 'Berkshire+Swash', cursive !important;
  margin: auto;
}
.cardtext {
  text-align: left !important;
  font-family: 'Berkshire+Swash', cursive !important;
  margin-top: 5px;
  /* border: 1px solid red */
}
.Welcome {
  text-align: justify;
  margin: 0 auto !important;
}
.carousel {
  margin: 0 auto;
  /* border: 4px solid red; */
}
</style>
