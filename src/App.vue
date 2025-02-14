<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
        <div class="icone"><i class="fa-regular fa-rectangle-list"></i></div>
        <h1 class="logo">
        Listes</h1>
  </header>

  <RouterView />
</template>

<style scoped>

header {
    padding-left: 80px;
    position: relative;
    display:flex;
    align-items: center;
    min-height: 80px;
    margin-bottom: 20px;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1024px) {
  

  .logo {
    margin: 0 2rem 0 0;
  }
  h1{
    font-weight: 600;
    text-align: left;
    padding-left: 10px;
    font-size: 50px;
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
}
</style>
