<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    class="bg-white"
  >
    <div
      class="h-[50vh] lg:h-[70vh] relative overflow-hidden"
      :class="{ 'grid grid-cols-2': slice.variation !== 'center' }"
    >
      <div
        v-if="isFilled.image(slice.primary.image)"
        class="w-full h-full"
        :class="[slice.variation === 'fullImage' ? 'absolute' : null]"
      >
        <PrismicImage
          :field="slice.primary.image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div
        class="flex items-center p-12 z-[1] w-full"
        :class="{
          'col-start-2': slice.primary.reverse,
          'top-0 absolute h-full text-center border':
            slice.variation === 'center',
        }"
      >
        <div
          class="inline-flex flex-col justify-center"
          :class="{
            'items-center w-full h-full': slice.variation === 'center',
          }"
        >
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-sm lg:text-base text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-4xl font-bold lg:text-7xl text-primary-400"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            class="text-base leading-9 text-neutral-500 lg:text-lg balance"
            :class="{ 'max-w-2xl mx-auto': slice.variation === 'center' }"
          >
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <div class="flex mt-12 text-center">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              class="text-white btn cta"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
