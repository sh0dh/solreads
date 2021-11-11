<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  imageUrl: String,
  bookName: String,
  bookSummary: String,
  category: String,
  author: String
})

const count = ref(0)
const {imageUrl, bookName, bookSummary, category, author} = toRefs(props)
</script>

<template>
  <div class="p-4 grid gap-4 max-w-sm">
    <div class="card bordered">
  <figure>
    <img src="imageUrl">
  </figure> 
  <div class="card-body">
    <h2 class="card-title">{{ bookName }}
      <div class="badge mx-2 badge-secondary">{{ category }}</div>
    </h2> 
    <p>{{ author }}</p>
    <p>{{ bookSummary }}</p>
    <div class="justify-center card-actions">
      <button class="btn btn-secondary">Review Book</button>
    </div>
  </div>
</div> 
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

