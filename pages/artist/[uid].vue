<script setup lang="ts">
import { components } from "~/slices";
const prismic = usePrismic();
const route = useRoute();
const { data: artists } = useAsyncData(`[artist-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("artist", route.params.uid as string)
);
console.log("DATA LOADED ", artists.value);
</script>

<template>
  <div class="py-24">
    <div class="">Artist: {{ route.params.uid }}</div>
    <pre>{{ artists }}</pre>
    <SliceZone
      :components="components"
      :slices="artists?.data.slices"
    ></SliceZone>
  </div>
</template>
