<script setup lang="ts">
defineProps<{
  dark?: boolean;
}>();
</script>

<template>
  <NuxtLink to="/" class="py-2">
    <img
      :src="dark ? '/logo_250px_white.png' : '/logo_250px.png'"
      class="object-contain max-h-8"
    />
  </NuxtLink>
</template>
