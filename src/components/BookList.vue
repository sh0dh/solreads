<script setup>
import { ref, toRefs } from 'vue'
import BookCard from './BookCard.vue'

const props = defineProps({
  msg: String,
  counter: String
})

const count = ref(0)
const {msg, counter} = toRefs(props)
</script>

<template>
  <div class="grid p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
    <BookCard imageUrl="" bookName="Kafka on the Shore" bookSummary="Wild fantasy book" author="Murakami" category="Weird Fiction"></BookCard>
    <BookCard imageUrl="" bookName="Kafka on the Shore" bookSummary="Wild fantasy book" author="Murakami" category="Weird Fiction"></BookCard>
    <BookCard imageUrl="" bookName="Kafka on the Shore" bookSummary="Wild fantasy book" author="Murakami" category="Weird Fiction"></BookCard>
    <BookCard imageUrl="" bookName="Kafka on the Shore" bookSummary="Wild fantasy book" author="Murakami" category="Weird Fiction"></BookCard>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

