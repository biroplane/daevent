<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[category_page]", () =>
  prismic.client.getSingle("category_page")
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
console.log("Carico la route", route.params.uid, posts);
</script>

<template>
  <div class="pt-24">
    Posts => {{ posts }}
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
