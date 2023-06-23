<script setup>
import Nav from "@/layouts/components/Nav.vue";
</script>


<template>
  <div class="layout-wrapper">
    <Nav />
    <main class="py-4 lg:py-8">
      <slot name="router"/>
    </main>
  </div>
</template>