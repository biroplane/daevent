<script setup lang="ts">
import { type Content } from "@prismicio/client";
const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { data: testimonials } = await useAsyncData(
  "testimonials",
  async () =>
    await prismic.client.getAllByType("testimonial", {
      limit: props.slice.primary.count || 12,
    })
);

console.log("DATA ", testimonials);

const { longDate } = useFilters();
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="prose max-w-none"
  >
    <div class="container">
      <h2 class="text-4xl text-center">Testimonials</h2>
      <PrismicRichText :field="slice.primary.description" class="text-center" />
      <ol class="grid gap-12 p-0 mx-0 list-none md:grid-cols-3">
        <li
          v-for="(testimonial, t) in testimonials"
          :key="t"
          class="flex flex-col h-full px-8 pt-8 prose bg-gray-100 rounded-md"
        >
          <h2 v-if="testimonial.data.title" class="text-primary">
            {{ testimonial.data.title }}
          </h2>
          <PrismicRichText
            :field="testimonial.data.body"
            class="flex-grow overflow-y-auto text-xs max-h-72 no-scrollbar text-neutral-500"
          />
          <div class="flex items-center gap-4 pt-4">
            <Icon name="streamline-emojis:ring-1" size="32" />
            <div class="flex flex-col">
              <h5 class="font-bold">
                {{ testimonial.data.author }}
              </h5>
              <span
                v-if="testimonial.data.date"
                class="text-xs text-neutral-400"
                >{{ longDate(testimonial.data.date) }}</span
              >
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
