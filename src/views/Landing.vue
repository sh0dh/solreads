<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  signedIn: Boolean,
  // bookName: String,
  // bookSummary: String,
  // category: String,
  // author: String
})

// const count = ref(0)
const {signedIn} = toRefs(props)
signedIn.value = true
</script>

<template>
  <div class="hero min-h-screen">
    <div class="text-center hero-content">
      <div class="max-w-xl">
        <h1 class="mb-5 text-5xl font-bold">
              Welcome to Reviewooor
            </h1> 
        <p class="mb-5">
              Submit and review your favourite books!
            </p>
        <router-link to="/app">
          <button class="btn btn-primary shadow-lg">Connect</button>
        </router-link>
        <img src="../assets/flutter.gif" class="p-4">
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

