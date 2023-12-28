<script setup lang="ts">
import { type Content } from "@prismicio/client";

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
  async () => await prismic.client.getAllByType("category")
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-24 prose lg:prose-xl"
  >
    <h2 class="text-center w-full">{{ slice.primary.title }}</h2>
    <ul
      class="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-x-12 list-none"
    >
      <li
        v-for="category in categories"
        :key="category.id"
        class="w-full h-full"
      >
        <NuxtLink
          :to="`/categorie-portfolio/${category.uid}`"
          class="w-full bg-primary flex items-center justify-center py-8 rounded-lg prose transition-all duration-700 hover:brightness-105 hover:shadow-lg shine"
        >
          <h4>{{ category.data.title }}</h4>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
<style scoped>
/* @keyframes blink {
  0% {
    background-position: -200px;
    background-size: 400%;
    opacity: 0;
  }
  100% {
    background-position: 200px;
    background-size: 200%;
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  50% {
    transform: rotateX(8deg) rotateY(12deg) rotateZ(3deg);
  }

  100% {
    transform: rotateX(-2deg) rotateY(-14deg) rotateZ(-3deg);
  }
} */

.shine {
  perspective: 1000px;
  position: relative;
  /* &:hover {
    animation: rotate 4s infinite alternate;
    &:before {
      content: "";
      position: absolute;
      margin: auto 10%;
      width: 80%;

      height: 30%;
      bottom: -30px;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
      filter: blur(10px);
      z-index: -1 !important;
    }
    &:after {
      content: "";
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 42%,
        rgb(133, 166, 145) 44%,
        rgba(255, 255, 255, 1) 47%,
        rgba(255, 255, 255, 0) 100%
      );
      width: 100%;
      opacity: 0.3;
      height: 100%;
      top: 0;
      left: 0;
      animation: blink 2s infinite alternate ease-in-out;
    }
  } */
}
</style>
