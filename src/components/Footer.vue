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
  <footer class="footer footer-center">
    <div class="flex flex-col text-center p-10">
      <p>Made with ❤️ using Vue, DaisyUI and Solana</p>
      <p>Icon courtesy: Book by João Miranda from the Noun Project</p>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

