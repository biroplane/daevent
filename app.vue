<script setup lang="ts">
import { useRouterStore } from "~~/stores/routerStore";
const routerStore = useRouterStore();

useHead({
  titleTemplate: (title) => `${title} | DA Event`,
});
</script>

<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <CookieControl locale="it" /> -->
  </div>
</template>

<style lang="postcss">
body {
  @apply font-body;
}
/* 
*/
html,
body {
  @apply h-screen w-screen overflow-x-hidden;
}
</style>
