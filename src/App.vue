<script setup>
import MainLayout from "@/layouts/MainLayout.vue";</script>

<template>
  <MainLayout>
    <template #router>
      <RouterView class="flex-1" v-slot="{ Component }">
        <Transition name="page">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </template>
  </MainLayout>
</template>


<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
