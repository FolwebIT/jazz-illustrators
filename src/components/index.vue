<template lang="html">
  <v-layout row wrap>
    <v-flex class="" hidden-sm-and-down>
      <v-carousel :interval="8000" class="carousel mb-3 mt-3" hidden-sm-and-down>
        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" size="100px"></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex class="carousel mb-2" hidden-md-and-up>
      <v-carousel hide-controls class="" hide-delimiters>
        <v-carousel-item v-for="(item,i) in mobilePix" :src="item.src" :key="i" size="100px"></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-layout colum wrap class="mt-3">
      <v-flex>
        <h3 absolute class="display-2 homeHead">{{msg}}</h3>
      </v-flex>
      <v-flex xs10 class="homeMsg pa-4 white--text">
        <span class="Welcome" >
          <p>
            The Jazz Illustrators is the Nigeria’s number one Jazz music entertainment
            premium band. We specialize in the fusion Jazz genre - an interplay of Western
            Jazz music, African music, Naija Pop music, Gospel and Contemporary music,
            African rhyJazz Illustrators is known for excellence, originality, creativity,
            competence, artistic performance, and synergy. Our style of music can
            be described as a fusion Jazz music which allows all kinds of genre of
            music, expression and improvisation. We can proudly say we don’t sound
            like anyone but just been unique for our kind of music.thms and sometimes with fusion of other arts like traditional
            dance steps, poetry, theatre arts etc.

            Our music is all encompassing. It meets the need of all categories of persons,
            corporate organizations and private individuals, all kind of events, ceremonies
            and parties. <br>
            The band consists of multi-talented individuals in their various musical careers
            with high level of creativity, experience, skills and burning passion for
            excellent music.
          </p>
          <p>
            We are poised for promoting African native music and cultural
            values with the blend of foreign jazz music, however making the
            African native music recognized all over the world. Our interpretation of
            music is unconventional but unique in such that all kinds of audience can
            find their expression......
          </p>
        </span>

        <v-divider class="my-3"></v-divider>
        <div class="more">
          <v-btn class="mb-3" large color="red darken-4" :to="{ name: 'about' }">Read more</v-btn>
          <v-btn large color="grey" class="mb-3">Past Events</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-3 mb-3 ml-5 mr-5">
      <v-flex  class=" cardFlex mr-2 ml-2 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2013</h1> -->
          <v-card-media
            :src="require('../assets/stage.jpg')"
            height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-1">Candle Light Symphony</h3>
              <div class="cardtext">
                <p>Candle light Symphony is an annual Jazz event for the Christmas season.
                The first edition was a Jazz concert held on the 12th Dec, 2015 to
                commemorate the felicity of the Yuletide season with live performance of
                excellent Christmas songs by the Jazz Illustrators.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <!-- <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex  class=" cardFlex mr-2 ml-2 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            clas
            :src="require('../assets/2016.jpg')"
             height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-1">GOJE 2016</h3>
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
            <!-- <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex  class=" cardFlex mr-2 ml-2 hidden-sm-and-down">
        <v-card class="cards">
          <!-- <h1>GOJE 2017</h1> -->
          <v-card-media
            :src="require('../assets/2017.jpg')"
            height="280px">
          </v-card-media>

          <v-card-title primary-title>
            <v-flex text-lg-center text-md-center text-sm-center text-xl-center text-xs-center>
              <h3 class="headline mb-1">Jazz Serenata</h3>
              <div class="cardtext">
                <p>The Jazz Serenata is a quarterly fusion Jazz event by the Jazz Illustrators
                to cheer the Jazz lovers in the Federal Capital Territory of Nigeria and
                beyond. The first edition came up on the 15th May, 2013 and our audience
                could but quest for more.
                </p>
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <!-- <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import pic2 from '../assets/logo_white.jpg'
import pic3 from '../assets/edit2.jpg'
import pic4 from '../assets/edit.jpg'
import pic5 from '../assets/edit1.jpg'
import pic6 from '../assets/stage.jpg'
import mobile from '../assets/mobile.jpg'
import mobile1 from '../assets/mobile1.jpeg'
// import mobile2 from '../assets/mobile2.jpg'
// import mobile3 from '../assets/mobile3.jpg'
import mobile4 from '../assets/mobile4.jpg'
import mobilelogo from '../assets/mobile_logo.jpg'

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
      mobilePix: [
        {
          src: mobilelogo
        },
        {
          src: mobile1
        },
        {
          src: mobile
        },
        {
          src: mobile4
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
.carousel {
  width: 90% !important;
  height: 450px !important;
  margin: auto;
  border-radius: 15px
  /* margin-top: 10px; */
}
.homeHead {
  font-family: 'Great Vibes', cursive;
  color: #ffffb3;
  text-align: center !important;
}
.homeMsg {
  margin: auto;
  text-align: justify !important;
}
.more {
  text-align: center;
  margin: 0 auto !important;
}
.cards {

  /* border: 4px solid #ffffb3; */
  border-radius: 10px;
  border-style:ridge;
}
.cardFlex {
  width: 200PX !important;
  /* margin: 0 auto; */
}
.cardtext {
  text-align: justify;
  /* border: 1px solid #000; */
}
</style>
