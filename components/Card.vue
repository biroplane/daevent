<script setup lang="ts">
defineProps<{
  image?: string;
  title?: string;
  to?: string;
}>();
</script>
<template>
  <div
    class="flex flex-col h-full overflow-hidden transition-all scale-100 border border-gray-100 shadow-xl group rounded-xl hover:scale-105 hover:shadow-2xl"
  >
    <div class="flex-none">
      <img
        :src="image ? image : '/logo_250px.png'"
        class="w-full h-full aspect-square"
        :class="image ? 'object-cover' : 'object-contain p-12'"
      />
    </div>
    <div class="flex-grow h-full p-4">
      <NuxtLink
        :to="to"
        class="transition-colors delay-150 group-hover:text-primary-800"
      >
        <div class="flex items-baseline justify-between">
          <h2
            class="w-full pb-4 text-2xl balance"
            :class="{ 'border-b': $slots.body }"
          >
            {{ title }}
          </h2>
          <Icon
            v-if="to"
            name="teenyicons:arrow-right-solid"
            class="flex-none text-gray-300 opacity-0 group-hover:opacity-100 animate-bounce"
            size="16"
          />
        </div>
      </NuxtLink>
      <slot name="body"></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="flex-none px-4 py-4 border-t bg-gradient-to-tr from-neutral-50 to-neutral-100"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
