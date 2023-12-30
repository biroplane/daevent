export const useSocial = () => {
  const prismic = usePrismic();
  // const socials = ref([]);
  const load = useAsyncData("social", () =>
    prismic.client.getSingle("link_social")
  );

  return { load };
  // onMounted(async () => {
  //   const data = await load();
  //   console.log("Social Loaded ", data);
  // });
};
