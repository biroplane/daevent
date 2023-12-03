<script setup lang="ts">
const prismic = usePrismic();
const { data: posts } = useAsyncData("[blog_posts]", () =>
  // prismic.client.getSingle("blog")
  prismic.client.getByType("post")
);

console.log("posts", posts);

useHead({
  title: "POSTS", // page.value?.data.meta_title,
  meta: [
    {
      name: "description",
      content: "The posts ", // page.value?.data.meta_description,
    },
  ],
});

const formatDate = (date: string) => {
  const _d = new Date(date);
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    year: "2-digit",
    month: "long",
    day: "2-digit",
  }).format(_d);
};
</script>

<template>
  <div class="container py-24">
    <ul class="grid md:grid-cols-3 lg:grid-cols-4">
      <li
        v-for="(post, p) in posts?.results"
        :key="p"
        class="px-4 prose border-2 rounded-md shadow-lg"
      >
        <NuxtLink :to="`/blog/${post.uid}`" class="underline text-primary">
          <PrismicImage
            :field="post.data.featured_image"
            class="object-cover aspect-square"
          />
        </NuxtLink>
        <h3>{{ post.data.title }}</h3>
        {{ formatDate(post.first_publication_date) }}
      </li>
    </ul>
    <!-- <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    /> -->
  </div>
</template>
