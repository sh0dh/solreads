<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Tabs from './components/Tabs.vue'
import Reviews from './views/Reviews.vue'
import Landing from './views/Landing.vue'
import { ref, toRefs } from 'vue'


const signedIn = ref(false)
const showAvatar = ref(false)
console.log(`Signed in: ${signedIn}`)
</script>

<template>
  <NavBar :showAvatar="showAvatar"></NavBar>
  <Landing v-if="signedIn" :signedIn="signedIn"></Landing>
  <router-view/>
  <!-- <Tabs></Tabs> -->
  <Footer></Footer>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
