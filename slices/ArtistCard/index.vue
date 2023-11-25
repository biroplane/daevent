<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArtistCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="grid grid-cols-2 py-12">
      <div class="mx-auto">
        <PrismicImage
          :field="slice.primary.image"
          class="object-cover rounded-lg aspect-9/16 max-h-96"
        />
      </div>
      <div class="p-12 xl:prose-2xl">
        <h2 class="text-primary">{{ slice.primary.title }}</h2>
        <PrismicRichText :field="slice.primary.body" />

        <ul>
          <h5>Skills</h5>
          <li v-for="(item, i) in slice.items" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
