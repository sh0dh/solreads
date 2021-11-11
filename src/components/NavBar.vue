<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  showAvatar: Boolean,
})

// const count = ref(0)
const {showAvatar} = toRefs(props)
</script>

<template>
  <div class="navbar p-4 shadow-lg text-neutral-content rounded-box">
    <div class="flex-none">
      <button class="btn btn-square">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" fill="#1DD65F" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M99.8,90.68H0.2V11h99.6V90.68z M48.34,17.64H6.84v66.4h41.5V17.64z M43.36,34.239H11.82V30.92h31.54V34.239z M43.36,37.56   v3.32H11.82v-3.32H43.36z M43.36,44.199v3.32H11.82v-3.32H43.36z M43.36,50.84v3.32H11.82v-3.32H43.36z M43.36,57.479v3.32H11.82   v-3.32H43.36z M43.36,64.12v3.319H11.82V64.12H43.36z M43.36,70.76v3.32H11.82v-3.32H43.36z M51.66,17.64v66.4h41.5v-66.4H51.66z    M56.64,34.239V30.92h31.54v3.319H56.64z M56.64,40.88v-3.32h31.54v3.32H56.64z M56.64,47.52v-3.32h31.54v3.32H56.64z M56.64,54.16   v-3.32h31.54v3.32H56.64z M56.64,60.8v-3.32h31.54v3.32H56.64z M56.64,67.439V64.12h31.54v3.319H56.64z M56.64,70.76h31.54v3.32   H56.64V70.76z"/></g></svg>
      </button>
    </div>
    <div class="flex-1 px-2 mx-2">
      <router-link class="text-lg font-bold" to="/">
        Reviewooor!
      </router-link>
    </div>
    <div v-if="$showAvatar" class="flex-none">
      <div class="avatar">
        <div class="rounded-full w-10 h-10 m-1">
          <img src="https://i.pravatar.cc/500?img=32">
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

