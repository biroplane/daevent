<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GallerySlice>([
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
    class="h-full py-12"
  >
    <div class="py-6 text-center">
      <h2 class="py-4 text-3xl">{{ slice.primary.title }}</h2>
      <PrismicRichText :field="slice.primary.description" class="highlight" />
    </div>

    <Carousel
      :items-to-show="1.5"
      wrap-around
      pause-autoplay-on-hover
      :transition="500"
    >
      <Slide
        v-for="(item, i) in slice.items"
        :key="i"
        class="w-screen h-screen lg:h-[70vh]"
      >
        <div
          class="relative w-full h-full bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + item.image.url + ')' }"
        >
          <PrismicLink
            :field="item.link"
            class="absolute max-w-sm px-8 py-3 text-left bottom-10 left-10 balance"
          >
            <span class="highlight">{{ item.label }}</span>
          </PrismicLink>
        </div>
      </Slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </section>
</template>
