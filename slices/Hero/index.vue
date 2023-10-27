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
    class="bg-black"
  >
    <div class="grid grid-cols-2 h-[50vh] lg:h-[70vh] relative">
      <div
        class="w-full h-full"
        :class="[slice.variation === 'fullImage' ? 'absolute' : null]"
      >
        <div v-if="isFilled.image(slice.primary.image)" class="w-full h-full">
          <PrismicImage
            :field="slice.primary.image"
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div
        class="flex items-center p-12"
        :class="{
          'z-[1] col-start-2': slice.variation == 'fullImage',
        }"
      >
        <div class="flex flex-col justify-center">
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
            class="text-base text-neutral-500 lg:text-2xl"
          >
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <div class="flex mt-12 text-center">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              class="btn cta"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="grid grid-cols-2 gap-x-8">
      <div
        :class="[
          slice.variation != 'imageRight' ? 'order-first' : '-order-first',
        ]"
        class="overflow-hidden"
      >
        <div
          v-if="isFilled.image(slice.primary.image)"
          class="w-full h-full overflow-hidden max-h-[50vh]"
        >
          <PrismicImage
            :field="slice.primary.image"
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>
      <div
        :class="[
          slice.variation == 'imageRight' ? 'order-first' : '-order-first',
        ]"
        class="flex items-center"
      >
        <div class="flex flex-col">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            class="text-sm text-neutral-500"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            class="mb-4 text-4xl font-bold text-primary-700"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div v-if="isFilled.richText(slice.primary.description)" class="">
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <div class="flex text-center">
            <PrismicLink
              v-if="isFilled.link(slice.primary.callToActionLink)"
              class="px-12 py-3 capitalize rounded-full bg-light-green text-sand md:mt-12"
              :field="slice.primary.callToActionLink"
            >
              {{ slice.primary.callToActionLabel || "Scopri" }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style></style>
