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
      <img src="{{ liste.photoSrc }}" alt="">
      <h2>{{ liste.nom }}</h2>
    </div>
    </router-link>
</template>

<style scoped>
.liste-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.liste-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.liste-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
