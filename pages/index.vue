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
const similar = prismic.filter.similar(page.value?.id as string, 5);
console.log("Similar", similar);

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
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
