<script setup lang="ts">
const drawer = ref(false);
</script>
<template>
  <div class="fixed z-50 w-full bg-white bg-opacity-70 backdrop-blur-md">
    <div class="flex items-center justify-between gap-8 px-8 xl:container">
      <div class="lg:hidden -order-first">
        <button
          class="flex items-center justify-center bg-white w-14 h-14 aspect-square hover:bg-primary-50"
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
      <div class="items-center flex-none hidden gap-6 lg:flex">
        <BlogSearch />
        <LocaleSelector />
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>
