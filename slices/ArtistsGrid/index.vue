<script setup lang="ts">
import { type Content } from "@prismicio/client";

const prismic = usePrismic();
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArtistsGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { data: artists } = await useAsyncData(
  "allArtistsGrid",
  async () =>
    await prismic.client.getAllByType("artist", {
      fetchLinks: "category.title",
    })
);
console.log("Artists ", artists.value);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="container py-12"
  >
    <h2 class="py-6 text-4xl text-primary-500">{{ slice.primary.title }}</h2>
    <PrismicRichText :field="slice.primary.description" />
    <ul class="grid grid-cols-4 gap-12">
      <li v-for="(artist, a) in artists" :key="a">
        <Card :image="(artist.data.image as any).url" class="">
          <template #default>
            <div class="flex flex-col items-start justify-between p-4">
              <h2 class="w-full pb-4 text-2xl border-b">
                {{ artist.data.name }}
              </h2>

              <div class="pt-4">
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
              <div class="py-4">
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
          <template #footer>
            <NuxtLink
              :to="`/artist/${artist.uid}`"
              class="px-4 text-sm underline text-neutral-400"
              >Scopri di più <Icon name="ph:arrow-right" size="12"
            /></NuxtLink>
          </template>
        </Card>
      </li>
    </ul>
  </section>
</template>
