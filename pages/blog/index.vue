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
    month: "long",
    day: "2-digit",
  }).formatToParts(_d);
  return Object.fromEntries(_parts.map((p) => [p.type, p.value]));
};
</script>

<template>
  <div class="container py-24">
    <ul
      class="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <li v-for="(post, p) in posts?.results" :key="p">
        <Card
          :image="(post.data as any).featured_image.url"
          :title="(post.data as any).title"
          :to="`/blog/${post.uid}`"
        >
          <template #footer>
            <div
              class="flex pb-4 transition-opacity opacity-30 group-hover:opacity-100 date_block"
            >
              <div class="day">
                {{ formatDate(post.data.published_date as string).day }}
              </div>
              <div class="">
                <div class="month">
                  {{ formatDate(post.data.published_date as string).month }}
                </div>
                <div class="year">
                  {{ formatDate(post.data.published_date as string).year }}
                </div>
              </div>
            </div>
          </template>
        </Card>
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
  @apply flex gap-2 items-start justify-start  text-primary-300;

  .day {
    @apply font-semibold text-3xl md:text-4xl md:leading-10;
  }
  .month {
    @apply uppercase text-sm md:text-base font-light;
  }
  .year {
    @apply tracking-widest text-[8px] md:text-base md:leading-4 -mt-1;
  }
}
</style>
