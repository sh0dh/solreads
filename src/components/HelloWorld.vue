<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  msg: String,
  counter: String
})

const count = ref(0)
const {msg, counter} = toRefs(props)
const incCounter = () => {
  console.log(`${msg.value} counter: ${counter.value}`)
  count.value++
}
const decCounter = () => {
  console.log(`${msg.value} counter: ${counter.value}`)
  count.value--
}
</script>

<template>
  <div class="p-4 grid gap-4 max-w-3xl">
    <div class="card border-2 p-4">
      <div class="card-title">
        <p>Counter update: {{ count }}</p>
      </div>
      <div class="card-actions justify-center">
        <button class="btn btn-primary" @click="incCounter">+</button>
        <button class="btn btn-primary" @click="decCounter">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

