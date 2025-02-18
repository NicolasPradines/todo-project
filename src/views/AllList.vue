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
  <header>
        <div class="icone"><i class="fa-regular fa-rectangle-list"></i></div>
        <h1 class="logo">
        Listes</h1>
  </header>
  <main>
    <ListCard v-for="liste in listes" :key="liste.id" :liste="liste" />
  </main>
</template>
