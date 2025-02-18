<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>


  <RouterView />
</template>

<style >

header {
    padding-left: 80px;
    position: relative;
    display:flex;
    align-items: center;
    min-height: 80px;
    margin-bottom: 20px;
}

.logo {
    margin: 0 2rem 0 0;
  }

h1{
  font-weight: 600;
  text-align: left;
  padding-left: 10px;
  font-size: 30px;
  line-height: 50px;
}
.icone{ 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #97a6ff;
  padding: 0px 0px;
  position: absolute;
  text-align: center;
  left: 0px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  }
  .icone i{
    font-size: 40px;
    color: #fff;
  }
nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}




@media (min-width: 1024px) {
  

 
}
</style>
