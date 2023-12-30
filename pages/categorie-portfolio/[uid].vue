<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();

const { data: category } = useAsyncData("category", () =>
  prismic.client.getByUID("category", route.params.uid as string)
);

console.log("Category", category.value?.id);

// useHead({
//   title: page.value?.data.meta_title,
//   meta: [
//     {
//       name: "description",
//       content: page.value?.data.meta_description,
//     },
//   ],
// });
</script>

<template>
  <div class="">
    <PrismicImage
      v-if="isFilled.image(category?.data.image)"
      :field="category?.data.image as any"
      class="max-h-[70vh] object-cover w-full object-center"
    />
    <div class="py-24 mx-auto">
      <h1>{{ category?.data.title }}</h1>
      <SliceZone
        :data-cid="category?.id"
        wrapper="main"
        :slices="category?.data.slices ?? []"
        :components="components"
      />
    </div>
  </div>
</template>
