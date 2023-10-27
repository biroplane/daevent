<script setup lang="ts">
const { menu } = useNavigationStore();
</script>
<template>
  <ul class="flex w-full gap-4">
    <li
      v-for="item in menu"
      :key="item.label"
      class="capitalize hover:font-medium"
    >
      <NuxtLink :to="item.route" active-class="font-bold">
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
