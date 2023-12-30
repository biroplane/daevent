<script setup lang="ts">
import { type Content } from "@prismicio/client";

const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ArtistsGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const artists = ref();
const fetchArtists = async (id: string) =>
  await prismic.client.getAllByType("artist", {
    fetchLinks: "category.title",
    // graphQuery:
    //   props.slice.variation === "byCategory" && route.params.uid
    //     ? categoryQuery
    //     : "",
    filters:
      props.slice.variation === "byCategory" && id
        ? [prismic.filter.at("my.artist.categories.category", id)]
        : [],
    // graphQuery: categoryQuery,
  });
// const { data: artists } = await useAsyncData("allArtistsGrid", fetchArtists);
onMounted(async () => {
  const main = document.querySelector("main");
  console.log("MAIN ", main?.dataset.cid);
  // const { data } = await useAsyncData(
  //   "allArtistsGrid",
  //   await fetchArtists(main?.dataset.cid)
  // );
  const data = await fetchArtists(main?.dataset.cid as string);
  artists.value = data;
});

console.log("Artists ", artists.value, props);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-12"
  >
    <div class="py-6">
      <h2 class="py-6 text-4xl text-primary-500">{{ slice.primary.title }}</h2>
      <PrismicRichText :field="slice.primary.description" />
    </div>
    <ul class="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
      <li v-for="(artist, a) in artists" :key="a">
        <Card
          :image="(artist.data.image as any).url"
          :title="artist.data.name"
          :to="`/artist/${artist.uid}`"
          class=""
        >
          <template #body>
            <div class="flex flex-col items-start justify-between">
              <div v-if="slice.variation === 'default'" class="pt-4">
                <h5 class="font-body text-md">Portfolio</h5>
                <div class="flex flex-wrap gap-2">
                  <div v-for="(category, c) in artist.data.categories" :key="c">
                    <NuxtLink
                      :to="`/categorie-portfolio/${
                        (category.category as any).uid
                      }`"
                      class="chips"
                    >
                      {{ (category.category as any).data.title }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
              <div v-if="slice.variation === 'default'" class="py-4">
                <h5 class="font-body text-md">Skills</h5>
                <ol class="flex flex-wrap gap-3">
                  <li
                    v-for="(skill, s) in artist.data.skills"
                    :key="s"
                    class="chips secondary"
                  >
                    {{ skill.skill }}
                  </li>
                </ol>
              </div>
            </div>
          </template>
        </Card>
      </li>
    </ul>
  </section>
</template>
