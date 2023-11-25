<script setup lang="ts">
defineProps<{
  dark?: boolean;
}>();
</script>

<template>
  <img
    :src="dark ? '/logo_250px_white.png' : '/logo_250px.png'"
    class="object-contain max-h-10"
  />
</template>
