<script setup>
import { ref, toRefs } from 'vue'
import Search from '../components/Search.vue'
import BookList from '../components/BookList.vue'
import Tabs from '../components/Tabs.vue'

// const props = defineProps({
//   imageUrl: String,
//   bookName: String,
//   bookSummary: String,
//   category: String,
//   author: String
// })

// const count = ref(0)
// const {imageUrl, bookName, bookSummary, category, author} = toRefs(props)
</script>

<template>
  <router-link to="/app">
    <button class="btn btn-square">
      <svg fill="#1DD65F" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z"/></svg>
    </button>
  </router-link>
  <Search></Search>
  <BookList></BookList>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

