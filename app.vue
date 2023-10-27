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
  @apply font-body text-white bg-black;
}
/* 
*/
html,
body {
  @apply h-screen w-screen overflow-x-hidden;
}
</style>
