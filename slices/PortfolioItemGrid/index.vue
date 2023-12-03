<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PortfolioItemGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const prismic = usePrismic();
const { data: items } = useAsyncData("portfolioItems", () =>
  prismic.client.getAllByType("portfolio_item", {
    graphQuery: `{

  allPortfolio_items {
    edges {
      node {
        title
        description
        
      }
    }
  }

    }`,
  })
);
console.log("Items", items);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container"
  >
    <div class="container prose text-center">
      <h2 class="">{{ slice.primary.title }}</h2>
      <PrismicRichText :field="slice.primary.description" />
    </div>

    <div class="container py-24">
      <ul class="grid lg:grid-cols-3 gap-12">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="p-6 border-t-2 shadow-lg bg-neutral-50 border-primary"
        >
          <NuxtLink :to="`/portfolio/${item.uid}`" class="prose">
            <PrismicImage
              v-if="isFilled.image(item.data.featured_image)"
              :field="item.data.featured_image"
            />
            <h3 class="">{{ item.data.title }}</h3>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
