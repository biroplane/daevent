<script setup lang="ts">
const { locales } = useI18n();

// const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <ul class="flex gap-2">
    {{
      $t("msg")
    }}
    <li
      v-for="locale in locales as any[]"
      :key="locale.code"
      @click="$i18n.setLocale(locale.code)"
    >
      {{ locale.name }}
    </li>
  </ul>
</template>
