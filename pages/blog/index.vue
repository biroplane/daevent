<script setup lang="ts">
const prismic = usePrismic();
const { locale, localeProperties } = useI18n();
const { data: posts } = useAsyncData(
  "[blog_posts]",
  () =>
    // prismic.client.getSingle("blog")
    prismic.client.getByType("post", {
      orderings: [{ field: "my.post.published_date", direction: "desc" }],
      lang: localeProperties.value.iso,
    }),
  { watch: [locale] }
);

console.log("posts", posts);

useHead({
  title: "Blog", // page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: "The posts ", // page.value?.data.meta_description,
    },
  ],
});

const formatDate = (date: string) => {
  const _d = new Date(date);
  const _parts = new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).formatToParts(_d);
  return Object.fromEntries(_parts.map((p) => [p.type, p.value]));
};
</script>

<template>
  <div class="container py-24">
    <ul class="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <li v-for="(post, p) in posts?.results" :key="p">
        <Card :image="(post.data as any).featured_image.url">
          <template #default>
            <div class="flex gap-4 p-4">
              <div class="w-24 date_block">
                <div class="day">
                  {{ formatDate(post.data.published_date as string).day }}
                </div>
                <div class="month">
                  {{ formatDate(post.data.published_date as string).month }}
                </div>
                <div class="year">
                  {{ formatDate(post.data.published_date as string).year }}
                </div>
              </div>
              <div class="flex items-center justify-center">
                <h2 class="text-lg lg:text-xl balance">
                  {{ post.data.title }}
                </h2>
              </div>
            </div>
          </template>
          <template #footer
            ><NuxtLink
              :to="`/blog/${post.uid}`"
              class="text-sm font-light text-neutral-400"
              >Leggi →</NuxtLink
            ></template
          >
        </Card>
        <!-- <NuxtLink :to="`/blog/${post.uid}`" class="underline text-primary">
        class="px-4 prose border-2 rounded-md shadow-lg"
          <PrismicImage
            :field="post.data.featured_image"
            class="object-cover aspect-square"
          />
        </NuxtLink>

        <div class="flex gap-4">
          <div class="date_block">
            <div class="day">
              {{ formatDate(post.first_publication_date).day }}
            </div>
            <div class="month">
              {{ formatDate(post.first_publication_date).month }}
            </div>
            <div class="year">
              {{ formatDate(post.first_publication_date).year }}
            </div>
          </div>
          <div class="">
            <h2 class="text-3xl">{{ post.data.title }}</h2>
            <NuxtLink
              :to="`/blog/${post.uid}`"
              class="text-sm font-light text-neutral-400"
              >Leggi →</NuxtLink
            >
          </div>
        </div> -->
      </li>
    </ul>
    <!-- <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    /> -->
  </div>
</template>
<style lang="postcss">
.date_block {
  @apply border-r border-neutral-300 p-4 pl-0 flex flex-col items-start justify-start  text-neutral-300;

  .day {
    @apply font-semibold text-3xl md:text-5xl md:leading-10;
  }
  .month {
    @apply uppercase text-base md:text-2xl font-light tracking-[.4rem] md:leading-9;
  }
  .year {
    @apply tracking-widest text-xs md:text-base md:leading-4;
  }
}
</style>
