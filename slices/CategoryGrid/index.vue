<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CategoryGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { data: categories } = await useAsyncData(
  "categories",
  async () => await prismic.client.getAllByType("category", { limit: 8 })
);
console.log("Categories", categories.value);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-24"
  >
    <div class="pb-12 mx-auto prose">
      <h2 class="w-full text-center">{{ slice.primary.title }}</h2>
    </div>
    <ul class="grid gap-12 lg:grid-cols-4">
      <li v-for="(item, i) in categories" :key="i" class="">
        <Card
          :image="(item.data as any).image.url"
          :title="(item.data as any).title"
          :to="`/categorie-portfolio/${item.uid}`"
        >
          <template #body>
            <PrismicRichText
              v-if="isFilled.richText(item.data.description)"
              :field="item.data.description"
            />
          </template>
        </Card>
      </li>
    </ul>
  </section>
</template>
<style scoped></style>
