<script setup lang="ts">
import { components } from "~~/slices";
const prismic = usePrismic();
const { data: page } = useAsyncData("[portfolio]", () =>
  prismic.client.getSingle("portfolio")
);
// const data = await prismic.client.getAllByType("portfolio_item");
const { data: items } = useAsyncData("portfolioItems", () =>
  prismic.client.getAllByType("portfolio_item")
);
console.log("Portfolio data", items.value);
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
    class="py-24"
  />
</template>
