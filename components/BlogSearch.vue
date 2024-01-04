<script setup lang="ts">
import { debouncedWatch } from "@vueuse/core";
import type { AllDocumentTypes } from "~/prismicio-types";
// const { locale } = useI18n();
const prismic = usePrismic();
// const showSearch = ref(false);
// const showResults = ref(false);
const results = ref([] as AllDocumentTypes[]);
const searchText = ref("");

// watch(searchText, (txt: string) => {
//   const _search = usePrismicDocuments({
//     filters: prismic.filter.fulltext("document", txt),
//   });
//   results.value = _search.data.value?.results as any;
// });
debouncedWatch(
  searchText,
  async (t: string) => {
    // if (t.length < 2) return;
    const _search = await prismic.client.get({
      filters: [prismic.filter.fulltext("document", t)],
    });
    console.log("Debounced watch", _search.results);
    results.value = _search.results
      .map((s) => {
        let url = "";
        switch (s.type) {
          case "artist":
            url = `/artist/${s.uid}`;
            break;
          case "category":
            url = `/categorie-portfolio/${s.uid}`;
            break;
        }
        return { ...s, url };
      })
      .filter((_s) => _s.uid && _s.url) as any;
  },
  {
    debounce: 500,
  }
);
// const setResults = (e) => {
//   console.log("Set results", e);
// };
</script>

<template>
  <div
    class="relative inline-block px-4 transition-all duration-700 bg-transparent rounded-lg hover:outline hover:outline-1 hover:outline-neutral-50 group hover:bg-neutral-100"
    tabindex="1"
  >
    <div class="flex items-center gap-4 py-2 search_block">
      <input
        v-model="searchText"
        placeholder="cerca"
        type="search"
        class="w-0 py-2 transition-all duration-500 bg-transparent border-b rounded-lg outline-none group-hover:w-64"
      />
      <Icon name="mdi:magnify"></Icon>
    </div>
    <ul
      class="absolute min-w-[18rem] right-0 z-50 flex flex-col max-w-full gap-4 p-4 px-1 py-4 transition-all duration-1000 translate-y-12 bg-white rounded-lg shadow-xl opacity-0 pointer-events-none results"
    >
      <li
        v-for="(result, r) in results"
        :key="r"
        class="px-6 py-2 border-b border-gray-50 hover:bg-gray-100 hover:text-primary hover:border-l-4 hover:border-primary-500 hover:-ml-1"
      >
        <NuxtLink v-if="result.url" :to="result.url">
          {{ result.uid }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss">
input[type="search"]:not(:placeholder-shown) {
  @apply w-64;
}
.search_block:has(input:not(:placeholder-shown)) + .results {
  @apply opacity-100 translate-y-0 pointer-events-auto;
}
</style>
