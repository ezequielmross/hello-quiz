<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="welcome">
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1>Welcome</h1>
    </header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/start-quiz">Start Quiz</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
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

.logo {
  display: block;
}

.wrapper {
  display: flex;
  width: 100%;
}
</style>
