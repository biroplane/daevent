export const useRouterStore = defineStore("routerStore", () => {
  const isNewPage = ref(0);
  return { isNewPage };
});
