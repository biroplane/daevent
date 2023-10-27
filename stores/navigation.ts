export const useNavigationStore = defineStore("navigation", () => {
  const menu = ref([
    { label: "home", route: "/" },
    { label: "artists", route: "/" },
    { label: "promo", route: "/" },
    { label: "music", route: "/" },
    { label: "video", route: "/" },
    { label: "wedding", route: "/" },
    { label: "blog", route: "/" },
    { label: "constacts", route: "/" },
  ]);

  return { menu };
});
