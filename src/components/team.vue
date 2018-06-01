<template lang="html">
  <v-layout row wrap text-xs-center>
    <v-flex class="mb-4 mt-3" hidden-sm-and-down>
      <img :src="require('../assets/logo_white.jpg')" alt="" class="banner">
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Our Team</h3>
    </v-flex>
    <v-flex xs10 class="profile white--text">
      <div class="headerText">
        Since 2013, Jazz Illustrators has had a number of several talented
        musicians. Gboyega Aliu, Doxa Usen, Ndiana Akpan, Lenard Daniel were all
        very innovative, dedicated and skillful members of the Jazz illustrators.
        However, the team as this moment, comprised of the following members
        who are lifting the banner of the band;
      </div>
      <div class="clear">
        <img src="../assets/theos.jpg" class="profilePix" height="100" width="100">
        <span class="listhead ">Theophany Adaji</span> <br>
          Theophany Adaji {tp~bazz} is an in dept lover of God, he has a strong
          obsession for Bass guitars and music "good music". He started his musical
          career as a drummer at Ecwa Church Headquarters Bida in Niger state under
          the supervision of his Father Mr Philip Adaji who lead the team. He is a
          Multi instrumentalist, a composer, Music Director and instructor, he's
          also a producer.
          He is at present the Bassist and musicians Director at The Summit Bible church
          head quarters and the bassist of the Jazz illustrator's. He has shared
          stage with great Music Stars and legends like Dr Ron Kenoly, David Hunter,
          Kenny kore, infinity, Asu Ekiye, Nathaniel Bassy, Fade Sax, Frank Edwards,
          Samsong, Favour Johnson, Lekan Agboola, Dunsin Oyekan.
          He believes in the possibility of creativity in music without limitations
          and loves to share his principles and philosophies where ever he goes.
          He is a graduate of Building technology, and is currently a furthering
          in Environmental science at the national open university.
          He is working at present on his Bass solo Album(s) that would give
          birth to another generation of bass players world wide.
      </div>

      <div class="clear">
      <img src="../assets/gbenga_profile.jpg" class="profilePix" height="100" width="100">
      <span class="listhead ">Dr. Onifade Emmanuel Olugbenga </span> <br>
        Dr Onifade Emmanuel Olugbenga popular known as Dr GbengaStrings was born
        about 3 decades ago. He is a Medical Doctor and also a talented
        multi -instrumentalist with electric guitar as his major instrument.
        He started playing in church at the age of 12 when he was first
        introduced to Keyboard while growing up as a young boy in the city of
        Ilorin. He however switched to playing bass guitar and was also learning
        the electric guitar. He started playing lead guitar in the year 1998,
        professionally since 2002 and featured along side with great instrumentalists
        like Fade Sax (his brother), Timothy Jackson (bassist), Mike Wonder (bassist),
        Dunsin Oyekan (bassist) and many more. He also featured in several live concerts
        including 'Tribute to Bass and Sax', Gospel Jazz Explosion, Jazz Serenata,
        Jazz Excellent, Candle Light Symphony, and many more.
      </div>

      <div class="clear">
      <img src="../assets/fade_profile_pix.jpg" class="profilePix" height="100" width="100">
      <span class="listhead ">Onifade Oluseyi </span> <br>
        Onifade Oluseyi also known as Fade De Great(Fade sax) is a multi- talented
        fusion Jazz musician. His dexterity, diligence and earnest passion for
        excellent music has taking across all the 36 states in Nigeria and abroad.
        Fade De Great is a stickler for excellence, a mentor and discipler to many,
        a music producer, song/music writer and a faithful lover of God the source
        of all knowledge and understanding.
        He is the founder of the the Jazz Illustrators(Nigeria's finest fusion jazz band),
        he also the proprietor of Aeon Sax Academy where heros are been made.
        Some of the music legends that has influenced and impacted his life includes:
        Gerald Albright, Kirk Whallum, Mike Aremu, Jerry Omole, Charley Parker, Norman
        Brown, George Benson, Frank Gambale, Fela Kuti and many more.
        Fade sax is known for creativity. His style of music contains a fusion of genres
        like Swing, trad jazz, smooth jazz, blues, Naija Contemporaries, ballad,
        funk and all kinds of grooves.
        He has been able to organized as a leader of the Jazz band, a number of
        Jazz concerts/events like Jazz Explosion 2013, Candle Light Symphony,
        Jazz Excellento, Jazz Serenata, and many more live performances.
        He is currently working on his album project, tours and lots more.
        He is happily marries to One wife - Jumoke Olasupo and blessed with 3
        children - Lekan, Divine and King David.
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.profilePix {
  float: left;
  position: relative;
  margin: 10px 15px 0 0;
  /* width: 100px; */
  /* height: 100px; */
}
.listhead {
  font-size: 20px;
  font-style: oblique;
  font-weight: 800;
  margin-bottom: 3px !important;
  /* font-family: 'Great Vibes'; */
  color: #ffffb3;
}
.clear {
  content: "";
  clear: both;
  display: table;
  text-align: justify;
  margin-top: 20px;
  /* border: 1px solid red !important; */
}
.profile {
  margin: 0 auto;
  margin-top: 10px !important;
}
.headerText{
  margin-top: 20px;
  text-align: justify;
}
</style>
