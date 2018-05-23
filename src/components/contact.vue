<template lang="html">
  <v-layout row wrap>
    <v-flex class="banner mb-4" hidden-sm-and-down>
      <img :src="require('../assets/stage.jpg')" alt="">
    </v-flex>
    <v-flex class="banner mb-4" hidden-md-and-up>
      <img :src="require('../assets/mobileStage.jpg')" alt="">
    </v-flex>
    <v-flex xs12>
      <h3  class="display-2 homeHead">Contact Us</h3>
    </v-flex>
    <v-flex xs8 class="homeMsg pa-4 white--text">
      <h2>For your bookings, enquiries and appointments contact us on:</h2>
      <p>Phone: +234-703-3599-254</p>
      <p>Contact Address: No 70 Abidjan Street, Wuse zone 3. Abuja.</p>
      <p>Facebook page: Jazz Illustrators</p>
      <p>YouTube: Jazz Illustrators</p>
      <p>Twitter:</p>
      <p>Email: jazzillustrators@gmail.com/ jazzillustrators@yahoo.com</p>
      <p>Website: www.jazzillustrators.com</p>
      <!-- Contact Address: No 70 Abidjan Street, Wuse zone 3. Abuja.
      Facebook page: Jazz Illustrators
      YouTube: Jazz Illustrators
      Instagram: Official Jazz Illustrators
      Twitter:
      Email: jazzillustrators@gmail.com/ jazzillustrators@yahoo.com
      Website: www.jazzillustrators.com -->

    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
