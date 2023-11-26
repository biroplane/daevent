<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(
  `[portfolio_category-uid-${route.params.uid}]`,
  () =>
    prismic.client.getByUID("portfolio_category", route.params.uid as string, {
      fetchLinks: "items.portfolio_item",
    })
);

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <div class="pt-24">
    <pre>{{ page?.data.items }}</pre>
    <ul>
      <li v-for="(item, i) in page?.data.items" :key="i">
        {{ item.portfolio_item }}
      </li>
    </ul>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
      class="py-24"
    />
  </div>
</template>
