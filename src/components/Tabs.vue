<script setup>
// import { ref, toRefs } from 'vue'

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
  <div class="grid grid-flow-col auto-cols-max justify-center tabs tabs-boxed p-4">
    <router-link class="tab" to="/add-review">Add Reviews</router-link>
    <router-link class="tab" to="/submit-book">Submit Books</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
a {
  color: #42b983;
}

.router-link-exact-active {
  color: #42b983;
}
</style>

