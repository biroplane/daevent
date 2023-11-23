<template>
  <div class="fixed z-50 w-full bg-primary-500 bg-opacity-10 backdrop-blur-md">
    <div class="container flex items-center gap-8 py-4 font-thin">
      <Logo dark />
      <MainMenu class="flex-grow" />
      <div class="flex flex-none gap-6">
        <Icon name="mdi:magnify"></Icon>
        <LocaleSelector />
      </div>
    </div>
  </div>
</template>
