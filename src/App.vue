<template>
  <v-app dark>
     <v-content class="">
      <hpanel />
      <v-container dark fluid class="pa-0 ma-0">
        <router-view />
        <v-footer height="auto" app dark class="" absolute>
          <v-flex hidden-sm-and-down>
            <v-card flat tile class="v-footer" width="100%">
              <v-card-title class="white--text">
                <strong class="subheading title" >Follow us on </strong>
                <v-spacer></v-spacer>

                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    target="_blank"
                    :href="icon.href"
                    icon
                    dark
                    replace
                    class="mx-3"
                  >
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
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
                    <span class="footerTitle body-2" v-text="col.title"></span>

                    <v-divider class="mb-2"></v-divider>
                    <div
                    class="footerchildren"
                      v-for="(child, i) in col.children"
                      :key="i"
                    ><router-link class="childLink white--text" :to="col.href" v-text="child"></router-link>
                  </div>
                  </v-flex>
                  <v-flex
                    xs3
                    text-lg-left text-xl-left text-md-left text-sm-left text-xs-left>
                    <span class="footerTitle body-2">Contact Us</span>
                    <v-divider class="s"></v-divider>
                    <div>
                      <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                      No 70 Abidjan Street, Wuse zone 3. Abuja
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                       jazzillustrators@gmail.com
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                       jazzillustrators@yahoo.com
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                      +234-703-3599-254
                    </div>
                    <!-- <div>
                      <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                      + 01 234 567 89
                    </div> -->
                  </v-flex>
                </v-layout>
              </v-card-text>
            <v-card-actions class="grey justify-center">
              &copy;2018 — <strong>FolwebIT</strong>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex hidden-md-and-up>
          <v-layout row wrap justify-center>
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              flat
              :to="link.href"
            >
              {{ link.title }}
            </v-btn>
            <v-flex xs12 py-3 text-xs-center white--text>
              &copy;2018 — <strong>FolwebIT</strong>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import PageHeader from '@/components/headerPanel.vue'
export default {
  name: 'App',
  data: () => ({
    links: [
      {
        title: 'Home', href: '/'
      },
      {
        title: 'About Us', href: '/about'
      },
      {
        title: 'Team', href: '/team'
      },
      {
        title: 'Services', href: '/services'
      },
      {
        title: 'Contact Us', href: '/contact'
      }
    ],
    icons: [
      {
        icon: 'fab fa-facebook', href: 'http://www.facebook.com/jazz.illustrators'
      },
      {
        icon: 'fab fa-instagram', href: 'http://www.instagram.com/officialjazzillustrators/'
      },
      {
        icon: 'fab fa-youtube', href: 'https://www.youtube.com/channel/UCBThmc8apAh0n93N5YhvAAg/featured'
      },
      {
        icon: 'fab fa-twitter', href: ''
      },
      {
        icon: 'fab fa-linkedin', href: ''
      }
    ],
    rows: [
      {
        title: 'Our Vision',
        href: '/about',
        children: ['Our vision is to encourage recognition and general acceptability of African Jazz music at par with all other kinds of music in the Nigerian Entertainment Industry where a substantial number of Nigerians, Africans and entire world embraces Jazz Music like every other kinds of music. ']
      },
      {
        title: 'Past Events',
        href: '/events',
        children: ['The Gospel Jazz Explosion (G.O.J.E)', 'CANDLE LIGHT SYMPHONY', 'JAZZ SERENATA']
      },
      {
        title: 'Youtube Videos',
        href: '/videos',
        children: ['Synergy', 'Amazing', 'Thank You', 'Wine Light']
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
  color: #ffffb3;
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
.footerTitle {
  font-weight: bold;
  font-style: oblique;
}
.footerchildren {
  font-size: 12px;

}
.childLink {
  text-decoration: none !important;
}
.footer {
  width: 100% !important;
  margin: auto !important;
}
.homeHead {
  /* border: 1px solid #000; */
  /* max-width: 100% !important; */
  width: 80%;

  margin: auto !important;
  font-family: 'Great Vibes', cursive;
  color: #ffffb3;
  text-align: center !important;
}
.homeMsg {
  /* border: 1px solid #000; */
  margin: auto !important;
  text-align: justify !important;
}
.banner {
  width: 95% !important;
  margin: auto;
  margin-top: 10px;
}
.homeHead {
  color: #ffffb3
}
.listhead {
  font-size: 16px;
  font-style: oblique;
  font-weight: 800;
  margin-bottom: 3px !important;
  /* font-family: 'Great Vibes'; */
  color: #ffffb3;
}
ul li {
  /* border: 1px solid #000; */
  list-style:  none;
}
.banner {
  margin: 0 auto;
  border-radius: 10px;
  width: 90% !important;
  height: 450px !important;
}
</style>
