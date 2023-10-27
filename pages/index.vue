<script setup lang="ts">
import { components } from "~/slices";
const { locale, localeProperties } = useI18n();
const prismic = usePrismic();

const { data: page } = useAsyncData(
  "[homepage]",
  () =>
    prismic.client.getSingle("homepage", { lang: localeProperties.value.iso }),
  { watch: [locale] }
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div class="">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    <div class="h-48"></div>
    {{ locale }}
    Link resolver {{ $prismic.options.linkResolver }}
  </div>
</template>
