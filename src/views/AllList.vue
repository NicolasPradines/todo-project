<script setup>
import { onMounted, ref } from 'vue'
import ListCard from '@/components/ListCard.vue'
import ListeService from '@/services/ListeService.js'




const listes = ref('')

const fetchListes = () => {
  ListeService.getListes().then((response) => {
    listes.value = response.data
  }).catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  fetchListes()
})


</script>

<template>
  <main>
    <ListCard v-for="liste in listes" :key="liste.id" :liste="liste" />
  </main>
</template>
