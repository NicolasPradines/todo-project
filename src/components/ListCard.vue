<script setup>
defineProps({
  liste: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link class="liste-link" :to="{ name: 'details', params: { id: liste.id } }">
    <div class="liste-card">
      <img v-bind:src="liste.photoSrc" alt="" />
      <h2>{{ liste.nom }}</h2>
    </div>
  </router-link>
</template>

<style scoped>
.liste-card:hover {
  /*transform: scale(1.01);*/
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.liste-card {
  padding: 8px 50px 0px 100px;
  width: 100%;
  position: relative;
  max-width: 480px;
  height: 60px;
  cursor: pointer;
  border: 1px solid #d6d6d6;
  border-radius: 30px;
  margin-bottom: 18px;
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

.liste-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
