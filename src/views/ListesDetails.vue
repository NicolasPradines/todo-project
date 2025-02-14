<script setup>
import { onMounted, ref } from 'vue'
import ListeService from '@/services/ListeService.js'


const props = defineProps({
  id: {
    required: true,
  },
})

const listeInfo = ref('')

const fetchListesInfos = () => {
  ListeService.getListesInfo(props.id).then((response) => {
    listeInfo.value  = response.data
    console.log(response.data)
  }).catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  fetchListesInfos()
})


</script>

<template>
     <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
  <main>{{ listeInfo.nom }}
  </main>
  <i class="fa-solid fa-trash"></i>
    <i class="fa-solid fa-xmark"></i>
    <i class="fa-solid fa-check"></i>
    <i class="fa-regular fa-circle-xmark"></i>
</template>
