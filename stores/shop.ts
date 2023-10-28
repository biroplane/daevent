import axios from "axios";
export const useShopStore = defineStore("shop", () => {
  const shop = ref();
  const place = ref();

  const reviews = computed(() => place.value.result?.reviews || []);
  const address = computed(() => place.value.result?.formatted_address);
  const phone = computed(
    () => place.value.result?.international_phone_number || ""
  );
  const location = computed(() => place.value.result?.geometry.location || "");
  const load = async () => {
    const data = await $fetch("/api/shop");
    shop.value = (data as any).shop;
  };
  const loadPlace = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://maps.googleapis.com/maps/api/place/details/json",
        params: {
          key: process.env.GOOGLE_MAPS_API_KEY,
          // libraries: "places",
          place_id: process.env.GOOGLE_PLACE_ID,
          language: "it",
        },
      });

      place.value = data;
      return data;
    } catch (error: any) {
      throw createError({
        statusCode: 400,
        message: error.message,
        data: error,
      });
    }
  };

  return {
    shop,
    load,
    loadPlace,
    place,

    reviews,
    address,
    phone,
    location,
  };
});
