<script setup>
import { ref, toRefs } from 'vue'

// const props = defineProps({
//   msg: String,
//   counter: String
// })

const count = ref(0)
// const {msg, counter} = toRefs(props)
</script>

<template>
  <div class="form-control p-4">
    <div class="relative space-x-2">
      <input type="text" placeholder="Add book link" class="input input-primary input-bordered xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/4"> 
      <button class="btn btn-primary p-4">Submit</button>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

