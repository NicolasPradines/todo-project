<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import ListeService from '@/services/ListeService.js'

import { useCoursesList } from '@/stores/allListe'
const coursesStore = useCoursesList()
const { coursesList } = storeToRefs(coursesStore)

const props = defineProps({
  id: {
    required: true,
  },
})

const itemCourse = ref('')
const listeInfo = ref('')

ListeService.getListesInfo(props.id)
  .then((response) => {
    listeInfo.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
//console.log(listeInfo.value.nom)

function addItemAndClear(item) {
  if (item.length === 0) {
    return
  }
  coursesStore.addCourse(item)
  itemCourse.value = ''
}
console.log(coursesList)
//updateListes
</script>

<template>
  <nav id="subnav">
    <RouterLink to="/">Retour aux listes</RouterLink>
  </nav>
  <main>
    <div class="liste-card">
      <img v-bind:src="listeInfo.photoSrc" alt="" />
      <h2>{{ listeInfo.nom }}</h2>
    </div>

    <div class="formList">
      Ajouter un item:
      <form @submit.prevent="addItemAndClear(itemCourse)">
        <input v-model="itemCourse" type="text" /> <button>Ajouter</button>
      </form>
    </div>

    <div v-for="item in coursesList" :key="item.idItem" class="item">
      <div class="content">
        <span :class="{ completed: item.completed }">{{ item.nom }}</span
        >&nbsp;&nbsp;&nbsp;
        <!--<span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        &nbsp;&nbsp;&nbsp;
        <span @click="deleteTodo(todo.id)">&#10060;</span> -->
      </div>
    </div>
  </main>

  <!--
  <i class="fa-solid fa-trash"></i>
  <i class="fa-solid fa-xmark"></i>
  <i class="fa-solid fa-check"></i>
  <i class="fa-regular fa-circle-xmark"></i>
  -->
</template>

<style scoped>
.liste-card {
  padding: 8px 50px 0px 100px;
  width: 100%;
  position: relative;
  max-width: 480px;
  height: 60px;
  cursor: default;
  border: 1px solid #d6d6d6;
  border-radius: 30px;
  margin-bottom: 18px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 800;
}
.liste-card img {
  display: block;
  position: absolute;
  width: 80px;
  border-radius: 50%;
  top: -10px;
  left: -1px;
}

#subnav {
  text-align: center;
}

#subnav a {
  color: #2c3e50;
}
</style>
