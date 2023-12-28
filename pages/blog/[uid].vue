<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(`[post-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("post", route.params.uid as string)
);

useHead({
  title: page.value?.data.title ?? page.value?.data.meta_title,
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
    <PrismicImage
      v-if="isFilled.image(page?.data.featured_image)"
      :field="page?.data.featured_image"
    />
    <div class="container pb-12 prose">
      <h1 class="relative z-10 block p-4 -mt-12 bg-white text-primary-500">
        {{ page?.data.title }}
      </h1>
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
    </div>
  </div>
</template>
