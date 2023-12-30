<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";
import { useShopStore } from "~/stores/shop";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GoogleReviewsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const ss = useShopStore();
if (ss.place?.status !== "OK") {
  await ss.loadPlace();
}
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="relative min-h-[50vh] py-24">
      <div class="absolute inset-0 h-full -z-10">
        <PrismicImage
          v-if="isFilled.image(slice.primary.background_image)"
          :field="slice.primary.background_image"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div
        class="w-full h-full max-w-4xl px-12 py-12 mx-auto bg-black bg-opacity-70 backdrop-blur-lg"
      >
        <h5 class="mb-8 text-2xl font-bold text-center text-primary">
          {{ slice.primary.title }}
        </h5>
        <ClientOnly>
          <p class="mx-auto text-sm text-center text-neutral-700">
            <PrismicRichText :field="slice.primary.description" />
          </p>
          <div class="flex gap-8 overflow-x-auto flex-nowrap no-scrollbar">
            <div
              v-for="(review, r) in ss.place.result.reviews"
              :key="r"
              class="flex-grow-0 flex-shrink-0 w-1/3 bg-white basis-1/3 card text-neutral-600"
            >
              <div class="flex items-center gap-4">
                <h6
                  class="w-full py-2 text-lg font-bold text-center capitalize"
                >
                  {{ review.author_name.toLowerCase() }}
                </h6>
              </div>
              <div class="flex items-center justify-center gap-2 mb-4">
                <Icon
                  v-for="rate in review.rating"
                  :key="rate"
                  name="bxs:star"
                  size="16"
                  class="text-yellow-500"
                />
              </div>
              <p
                class="overflow-y-auto text-xs italic leading-6 text-neutral-400 max-h-48 no-scrollbar"
              >
                {{ review.text }}
              </p>
            </div>
          </div>
        </ClientOnly>
        <div class="mt-6 text-center text-white">
          <h6 class="mb-4 text-lg font-bold">Dicci la tua</h6>
          <div>
            <a
              href="https://www.google.com/search?q=daevent+ruvo&sca_esv=577287814&rlz=1C5CHFA_enIT1044IT1044&sxsrf=AM9HkKlEAEIZrs58iTcZouFVd3IulW6vUw%3A1698440362705&ei=qiQ8ZZjXKsrY7_UPmbimwAY&ved=0ahUKEwiY1Pazj5eCAxVK7LsIHRmcCWgQ4dUDCBA&uact=5&oq=daevent+ruvo&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGRhZXZlbnQgcnV2bzIFECEYoAEyBRAhGKABSNo6UO4FWIQ1cAN4AJABAJgB4wGgAe4PqgEGMC4xMS4xuAEDyAEA-AEBwgIKEAAYigUYsAMYQ8ICCRAAGAcYHhiwA8ICFhAuGIoFGMcBGNEDGMgDGLADGEPYAQHCAhcQLhivARjHARjLARiABBjIAxiwA9gBAcICGRAuGIoFGMcBGK8BGJgFGMgDGLADGEPYAQHCAgcQIxiKBRgnwgIEECMYJ8ICDBAjGIoFGBMYgAQYJ8ICDRAuGIoFGMcBGNEDGEPCAgUQABiABMICCxAuGIAEGMcBGNEDwgIHEC4YigUYQ8ICBRAuGIAEwgIHEAAYigUYQ8ICDRAuGIAEGMcBGNEDGArCAgcQABiABBgKwgILEC4YgAQYxwEYrwHCAhwQLhiABBjHARjRAxgKGJcFGNwEGN4EGOAE2AECwgIKEAAYywEYgAQYCsICChAuGMsBGIAEGArCAggQABjLARiABMICEBAuGMsBGIAEGMcBGNEDGArCAhAQLhjLARiABBjHARivARgKwgIEEAAYHsICBhAAGAUYHsICHxAuGMsBGIAEGMcBGK8BGAoYlwUY3AQY3gQY4ATYAQLiAwQYASBBiAYBkAYMugYECAEYCLoGBggCEAEYFA&sclient=gws-wiz-serp#lrd=0x13380988f5c69ae3:0x4fb9a388668b742f,1,,,,"
              class="font-medium underline"
              target="_blank"
              >Scrivi la tua recensione</a
            >
            e condividila con tutti! ♥️
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="postcss"></style>
