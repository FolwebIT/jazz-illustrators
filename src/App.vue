<template>
  <v-app dark>

    <hpanel />

    <v-content class="">
      <v-container dark fluid class="pa-0 ma-0">
        <router-view />
      </v-container>
    </v-content>

    <div id="app">
  <!-- <v-app id="inspire"> -->
    <v-footer height="auto"  dark>
      <v-card flat tile class="v-footer" width="100%">
        <v-card-title class="white--text">
          <strong class="subheading title" >Follow us on </strong>
          <v-spacer></v-spacer>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            dark
            class="mx-3"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="">
          <v-layout>
            <v-flex
              text-lg-left text-xl-left text-md-left text-sm-left text-xs-left
              v-for="(col, i) in rows"
              :key="i"
              xs3
              class="mr-3"
            >
              <span class="body-2" v-text="col.title"></span>

              <v-divider class="mb-2"></v-divider>
              <div
                v-for="(child, i) in col.children"
                :key="i"
                v-text="child"
              ></div>
            </v-flex>
            <v-flex
              xs3
              text-lg-left text-xl-left text-md-left text-sm-left text-xs-left>
              <span class="body-2">Contact</span>
              <v-divider class="s"></v-divider>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="grey justify-center">
          &copy;2018 — <strong>FolwebIT</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  <!-- </v-app> -->
</div>
  </v-app>
</template>

<script>
// import PageHeader from '@/components/headerPanel.vue'
export default {
  name: 'App',
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    rows: [
      {
        title: 'Jazz Illustrators',
        children: ['We are poised for promoting African native music and cultural ' +
        'values with the blend of foreign jazz music, however making the African native music recognized all over the world.']
      },
      {
        title: 'Past Events',
        children: ['The Gospel Jazz Explosion (G.O.J.E)', 'CANDLE LIGHT SYMPHONY', 'JAZZ SERENATA', 'Bootstrap Angular']
      },
      {
        title: 'Youtube Videos',
        children: ['video1', 'video1', 'video1', 'video1']
      }
    ]
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  /* text-decoration-style: none */
}
.btn:hover{
  /* border: 1px solid red; */
  text-decoration: none;
}
.v-footer span{
  color: red;
  font-size: 20px !important;
  font-family: '', cursive;
  text-decoration: none !important;
  text-transform: none !important;
}

.title {
  font-weight: bold;
  font-size: 30px !important;
  font-family: 'Great Vibes';
}
</style>
