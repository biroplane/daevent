import axios from "axios";
export default defineEventHandler(async () => {
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

    return data;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      message: error.message,
      data: error,
    });
  }
});
