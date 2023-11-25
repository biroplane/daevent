<script setup lang="ts">
import { isFilled } from "@prismicio/client";
const prismic = usePrismic();
const { data: navigation } = useAsyncData("navigation", () =>
  // prismic.client.getSingle("navigation", {
  //   graphQuery: `
  //   query ExampleAllDocsQuery {
  //     _allDocuments {
  //       edges {
  //         node {
  //           __typename
  //         }
  //       }
  //     }
  //   }`,
  // })
  prismic.client.getSingle("navigation", {
    // graphQuery: `{
    //   navigation {
    //     slices{
    //       ...on navigation_item{
    //         variation{
    //           ...on default{
    //             primary{
    //               label
    //               link
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }`,
  })
);
console.log("Nav", navigation.value);
// const getLink = async (comp: any) => {
//   console.log("ciao", comp);
//   if (!comp.child_link.id) return;
//   const _link = await prismic.client.getByID(comp.child_link.id);

//   console.log("THE LINK", _link);
//   return Promise.resolve(_link);
// };

// navigation.value?.data.slices.forEach( (slice)=>{
//   slice.items.map(s=>)
// })
</script>
<template>
  <ul class="flex w-full gap-4">
    <li
      v-for="(item, i) in navigation?.data.slices"
      :key="i"
      class="relative text-black group"
    >
      <PrismicLink
        v-if="item.variation === 'default'"
        :field="item.primary.link"
      >
        {{ item.primary.label }}
      </PrismicLink>
      <div v-else class="">
        <span class="cursor-pointer">{{ item.primary.label }}</span>

        <ul
          v-if="item.slice_type == 'navigation_item'"
          class="absolute flex-col gap-4 p-6 transition-all -translate-y-4 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:flex"
        >
          <li
            v-for="(ni, n) in item.items"
            :key="n"
            class="transition-colors duration-300 hover:text-primary"
          >
            <PrismicLink
              v-if="isFilled.link(ni.child_link)"
              :field="ni.child_link"
            >
              {{ ni.child_name }}
            </PrismicLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
