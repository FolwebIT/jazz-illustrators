<template>
  <div class="">
    <v-toolbar fixed dark class="header">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer"> </v-toolbar-side-icon>
      <v-avatar size="63px" class="hidden-sm-and-down" >
        <img src="../assets/logo_black.jpg">
      </v-avatar>
      <v-toolbar-title class="barTitle" fixed>
        <router-link to="/" class="home headerLink">
          <span>
            Jazz Illustrators
          </span>
        </router-link>
      </v-toolbar-title>

      <!-- <v-toolbar-items>
        <v-btn
          flat
          dark
          class="headerLink">-
          Browse
        </v-btn>
      </v-toolbar-items> -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down m-auto">
        <v-btn
          flat
          dark
          to="#"
          class="headerLink">
          Home
        </v-btn>

        <v-btn
          flat
          dark
          class="headerLink">
          Events
        </v-btn>

        <v-btn
          flat
          dark
          class="headerLink">
          About Us
        </v-btn>

        <v-btn
          flat
          dark
          class="headerLink">
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      absolute
      hide-overlay
     >
       <v-list class="pa-0">
         <v-list-tile avatar class="listTitle pa-0">
           <v-list-tile-avatar size="55px" class="mt-3">
             <img src="../assets/logo_white.jpg">
           </v-list-tile-avatar>
           <v-list-tile-content class="pa-1" style="">
             <v-list-tile-title class="ml-3 mt-3 pl-1 pr-1" style="font-size: 22px;">Jazz Illustrators</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
       <v-list class="pt-0" >
         <v-divider></v-divider>
         <v-list-tile v-for="item in items" :key="item.title">
           <!-- <v-list-tile-action>
             <v-icon>{{ item.icon }}</v-icon>
           </v-list-tile-action> -->
           <v-list-tile-content>
             <v-list-tile-title class="ml-3">
               <router-link :to="item.href" class="headerLink">
                 <span>
                   {{item.title}}
                 </span>
               </router-link>
             </v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      drawerWasClosed: false,
      items: [
        { title: 'Home', icon: 'dashboard', href: '/#' },
        { title: 'Events', icon: 'dashboard', href: '/#' },
        { title: 'About', icon: 'dashboard', href: '/#' },
        { title: 'Contact', icon: 'question_answer', href: '/#' }
      ]
    }
  },

  watch: {
    drawer (val) {
      if (!val) {
        this.drawerWasClosed = true
        setTimeout(() => {
          this.drawerWasClosed = false
        }, 0)
      }
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawerWasClosed
    }
    // mobileScreen () {
    //   if (window.innerWidth < 993) {
    //     return
    //   }
    // }
  }
}
</script>
<style scoped>
.headerLink, .headerLink:hover{
  text-decoration: none;
}
.headerLink {
  color: white;
}
.headerLink:hover {
  color: #ffffb3 !important;
}
.headerLink:active {
  color: #ffffb3 !important;
}
.home {
  font-family: 'Permanent Marker', cursive !important;
  color: #ffffff !important;
}

.barTitle {
  font-family: 'Great Vibes', cursive !important;
  font-weight: bold;
  font-size: 28px;
  color: #ffffff;
  margin: ;
  height: 55px;
}
.listTitle {
  height: 75px;
}
</style>
