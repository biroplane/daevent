<script setup lang="ts">
defineProps<{
  dark?: boolean;
}>();
</script>
<template>
  <img
    :src="dark ? '/logo_250px.png' : '/logo_250px_white.png'"
    class="object-contain max-h-10"
  />
</template>
