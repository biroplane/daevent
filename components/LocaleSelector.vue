<script setup lang="ts">
const { locales, locale: activeLocale } = useI18n();

// const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="relative pl-4 border-l group">
    <div class="flex items-baseline uppercase">
      <span>{{ activeLocale }}</span
      ><Icon name="mdi:caret-down" size="16" />
    </div>
    <div
      class="absolute right-0 hidden w-24 p-2 text-black bg-white group-hover:block"
    >
      <ul class="flex flex-col gap-2 text-right">
        <li
          v-for="locale in locales as any[]"
          :key="locale.code"
          :class="{ 'font-bold': locale.code === activeLocale }"
          class="cursor-pointer"
          @click="$i18n.setLocale(locale.code)"
        >
          {{ locale.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
