<script setup lang="ts">
const drawer = ref(false);
</script>
<template>
  <div class="fixed z-50 w-full bg-white bg-opacity-70 backdrop-blur-md">
    <div class="px-8 lg:container flex items-center justify-between gap-8">
      <div class="lg:hidden -order-first">
        <button
          class="w-14 h-14 aspect-square flex justify-center items-center bg-white hover:bg-primary-50"
          @click="drawer = !drawer"
        >
          <Icon name="jam:menu" size="32" />
        </button>
        <Transition name="slide">
          <AppDrawer v-model="drawer" />
        </Transition>
      </div>
      <Logo class="" />

      <MainMenu class="flex-grow hidden lg:block" />
      <div class="lg:flex flex-none gap-6 hidden">
        <Icon name="mdi:magnify"></Icon>
        <LocaleSelector />
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.slide-enter-active {
  animation: slide 0.3s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
}
.slide-leave-active {
  animation: slide 0.3s reverse cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes slide {
  0% {
    transform: translateX(-100%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
