<script setup>
defineProps({
  courses: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div v-for="item in courses" :key="item.idItem" class="item">
    <div class="content">
      <span :class="{ completed: item.completed }">{{ item.nom }}</span
      >&nbsp;&nbsp;&nbsp;
      <!--<span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        &nbsp;&nbsp;&nbsp;
        <span @click="deleteTodo(todo.id)">&#10060;</span> -->
    </div>
  </div>
</template>
