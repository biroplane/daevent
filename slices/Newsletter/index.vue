<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.NewsletterSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const email = ref("");
const addTonNewsletter = () => {
  console.log("Adding to newsletter ", email.value);
};
</script>

<template>
  <div class="">
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="w-full px-4 py-12 bg-gradient-to-tr from-primary-300 to-primary-500"
    >
      <form
        class="container flex flex-col items-center max-w-lg gap-4"
        @submit.prevent="addTonNewsletter"
      >
        <h4 class="text-3xl font-bold text-fallow-100">
          Resta in contatto con noi
        </h4>
        <p class="max-w-lg text-neutral-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          perferendis dolor sit magnam aut asperiores excepturi
        </p>
        <label for="email" class="flex w-full">
          <input
            id="email"
            v-model="email"
            type="email"
            class="w-full p-2 border border-r-0 rounded rounded-r-none focus:outline-none border-primary-600"
            placeholder="mario.rossi@esempio.com"
          />
          <button
            type="submit"
            class="px-4 border border-l-0 rounded-r border-primary-600 bg-primary-600"
          >
            ✉️
          </button>
        </label>
      </form>
    </section>
  </div>
</template>
