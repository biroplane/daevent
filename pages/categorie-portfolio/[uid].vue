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

const { data: artistByItem } = useAsyncData("artistsByCat", () =>
  prismic.client.getAllByType("artist", {
    filters: [
      prismic.filter.at("my.artist.categories.category", route.params.uid),
    ],
  })
);
console.log("Carico la route", route.params.uid, artistByItem);
</script>

<template>
  <div class="pt-24">
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>
