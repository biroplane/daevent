export const useNavigationStore = defineStore("navigation", () => {
  const menu = ref([
    { label: "home", route: "/" },
    {
      label: "Dj e artisti nozze",
      route: "/",
      childrens: [
        { label: "Deejay", route: "/" },
        { label: "Animazione", route: "/" },
        { label: "Brasile", route: "/" },
        { label: "Cuba", route: "/" },
      ],
    },
    { label: "promo", route: "/" },
    { label: "music", route: "/" },
    { label: "video", route: "/" },
    { label: "wedding", route: "/" },
    { label: "blog", route: "/" },
    {
      label: "constacts",
      route: "/",
      childrens: [{ label: "Privacy", route: "/" }],
    },
  ]);

  return { menu };
});
