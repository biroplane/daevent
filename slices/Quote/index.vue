<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.QuoteSlice>([
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
    class="p-6 bg-primary-100"
  >
    <div class="quote">
      <PrismicRichText
        :field="slice.primary.text"
        class="text-2xl font-bold"
      ></PrismicRichText>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
.quote {
  @apply relative text-center p-4;
  &::before {
    content: "\201C";
    @apply absolute left-24 top-0 text-7xl opacity-20;
  }
  &::after {
    content: "\201E";
    @apply absolute right-24 bottom-0 text-7xl opacity-20;
  }
}
</style>
