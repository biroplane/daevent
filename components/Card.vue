<script setup lang="ts">
defineProps<{
  image?: string;
  title?: string;
  to?: string;
}>();
</script>
<template>
  <div
    class="flex flex-col h-full overflow-hidden transition-all scale-100 border border-gray-100 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl outline-0 hover:outline-4"
  >
    <div class="flex-none">
      <img :src="image" class="object-cover w-full h-full aspect-square" />
    </div>
    <div class="flex-grow h-full">
      <slot>
        <h2 class="text-xl balance">{{ title }}</h2>
        <slot name="body"></slot>
      </slot>
    </div>
    <div
      class="flex-none px-4 py-4 border-t bg-gradient-to-tr from-neutral-50 to-neutral-100"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
