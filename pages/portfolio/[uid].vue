<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: page } = useAsyncData(
  `[portfolio_item-uid-${route.params.uid}]`,
  () =>
    prismic.client.getByUID("portfolio_item", route.params.uid as string, {
      fetchLinks: [
        "artist.name",
        "artist.bio",
        "artist.image",
        "artist.skills",
        "artist.categories",
      ],
    })
);

useHead({
  title: "Portfolio", // page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div class="py-24 prose mx-auto max-w-7xl container">
    <PrismicImage
      v-if="isFilled.image(page?.data.featured_image)"
      :field="page?.data.featured_image"
      class="w-full object-cover"
    />
    <h1>{{ page?.data.title }}</h1>
    <PrismicRichText :field="page?.data.description" />

    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
      class=""
    />
  </div>
</template>
