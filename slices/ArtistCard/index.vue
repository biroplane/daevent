<script setup lang="ts">
import { isFilled, type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ArtistCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const artist = computed(() => (props.slice.primary.artist as any).data);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="prose lg:prose mx-auto w-full md:max-w-none grid lg:grid-cols-3 gap-12 card mb-12"
  >
    <PrismicImage
      v-if="isFilled.image(artist.image)"
      :field="artist?.image"
      class="w-full aspect-square max-h-[45vh] object-cover"
      :class="{ 'lg:-order-first': index % 2 === 0 }"
    />
    <div class="lg:col-span-2">
      <h1>{{ artist.name }}</h1>
      <PrismicRichText
        v-if="isFilled.richText(artist.bio)"
        :field="artist.bio"
        class="max-w-2xl"
      ></PrismicRichText>
      <h4>Le Skill</h4>
      <ul>
        <li v-for="skill in artist.skills" :key="skill">{{ skill.skill }}</li>
      </ul>
      <!-- <ul>
        <li v-for="(category, c) in artist.categories" :key="c">
          {{ category }}
        </li>
      </ul> -->
      <!-- <div class="prose max-w-none">
        <div class="container flex">
          <div class="w-1/5">
            <h1>{{ artist?.data.name }}</h1>
            <ul>
              <li v-for="skill in artist?.data.skills" :key="skill">
                {{ skill.skill }}
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>
