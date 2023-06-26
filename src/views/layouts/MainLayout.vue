<script setup>
import Nav from "./components/Nav.vue";
</script>


<template>
  <div class="layout-wrapper">
    <Nav />
    <main class="py-4">
      <div class="content-container">
      <slot name="router"/>
      </div>
    </main>
  </div>
</template>