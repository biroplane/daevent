<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { components } from "~/slices";
const prismic = usePrismic();
const route = useRoute();
const { data: artist } = useAsyncData(`[artist-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("artist", route.params.uid as string, {
    fetchLinks: "category.title",
  })
);
console.log("DATA LOADED ", artist.value);
useHead({
  title: artist.value?.data.name ?? "Pagina dell'artista",
});
const similar = ref([] as any);
onMounted(async () => {
  if (!artist.value?.id) return;
  const _similar = await useAsyncData("similar", () =>
    prismic.client.getAllByType("artist", {
      filters: [prismic.filter.similar(artist.value?.id as string, 10)],
    })
  );

  console.log("Similar", _similar.data.value);
  similar.value = _similar.data.value;
});
</script>

<template>
  <section>
    <div
      class="w-full h-[60vh] overflow-hidden shadow-2xl max-h-[60vh] md:max-h-screen"
    >
      <PrismicImage
        v-if="isFilled.image(artist?.data.image)"
        :field="artist.data.image"
        class="object-cover object-top w-full h-full filter blur-xl"
      />
    </div>
    <div
      class="container relative z-10 grid max-w-5xl grid-cols-8 gap-8 px-8 py-8 bg-white md:-mt-24"
    >
      <div class="sticky z-10 bg-white col-span-full top-12">
        <h1 class="py-4 text-4xl md:text-7xl text-primary-700">
          {{ artist?.data.name }}
        </h1>
      </div>
      <div class="col-span-full md:col-span-6">
        <div class="prose">
          <PrismicRichText
            v-if="isFilled.richText(artist?.data.bio)"
            :field="artist?.data.bio"
          />
        </div>
      </div>
      <div class="col-span-full md:col-span-2">
        <div class="w-full mb-12 aspect-square">
          <PrismicImage
            v-if="isFilled.image(artist?.data.image)"
            :field="artist.data.image"
            class="object-cover object-top w-full h-full"
          />
        </div>
        <div v-if="similar.length" class="mb-12">
          <h3>Skills</h3>

          <ul>
            <li v-for="(sa, s) in similar" :key="s">
              {{ sa.data.name }}
            </li>
          </ul>
        </div>
        <h3>Skills</h3>
        <ul class="flex flex-row gap-4 md:flex-col">
          <li v-for="(skill, s) in artist?.data.skills" :key="s">
            {{ skill.skill }}
          </li>
        </ul>
        <div v-if="isFilled.group(artist?.data.categories)">
          <h3 class="mt-12">Categorie</h3>
          <ul class="flex flex-row gap-4 md:flex-col">
            <li v-for="(category, c) in artist?.data.categories" :key="c">
              <NuxtLink
                class="cursor-pointer"
                :to="`/categorie-portfolio/${(category.category as any).uid}`"
              >
                {{ (category.category as any).data.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div v-if="artist?.tags.length">
          <h3 class="mt-12">Tag</h3>
          <ul class="flex flex-wrap gap-4">
            <li
              v-for="(tag, t) in artist?.tags"
              :key="t"
              class="chips secondary"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <SliceZone
      v-if="artist?.data.slices"
      :components="components"
      :slices="(artist?.data as any).slices ?? []"
    ></SliceZone>
  </section>
</template>
<style lang="postcss" scoped>
h3 {
  @apply text-xl text-primary-700;
}
</style>
