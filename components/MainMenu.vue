<script setup lang="ts">
import { components } from "~/slices";
const prismic = usePrismic();
const { data: navigation } = useAsyncData("navigation", () =>
  prismic.client.getSingle("navigation")
);

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
console.log("Nav", navigation.value);
</script>
<template>
  <ul class="flex flex-col w-full gap-8 lg:flex-row">
    <SliceZone
      wrapper="li"
      :slices="navigation?.data.slices ?? []"
      :components="components"
    />
  </ul>
</template>
