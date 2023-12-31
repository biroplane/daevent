<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeadingSlice>([
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
    class="w-full py-4 prose-xl max-w-none"
  >
    <Component :is="`h${slice.primary.level || 2}`" class="heading">{{
      slice.primary.label
    }}</Component>
  </section>
</template>
<style lang="postcss">
.heading {
  overflow: hidden;
  text-align: center;
}
.heading:before,
.heading:after {
  background-color: #333;
  opacity: 0.2;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}
.heading:before {
  right: 0.5em;
  margin-left: -50%;
}
.heading:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
