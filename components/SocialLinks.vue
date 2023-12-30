<script setup lang="ts">
const prismic = usePrismic();
defineProps({
  horizontal: { type: Boolean, default: false },
  short: { type: Boolean, default: false },
});

const { data: socials } = await useAsyncData("socials", () =>
  prismic.client.getSingle("link_social")
);
const getIcon = (icon: string) => {
  let _icon;
  switch (icon) {
    case "Facebook":
      _icon = "cib:facebook";
      break;
    case "Instagram":
      _icon = "cib:instagram";
      break;
    case "YouTube":
      _icon = "cib:youtube";
      break;
    case "SoundCloud":
      _icon = "cib:soundcloud";
      break;

    default:
      icon = "";
      break;
  }

  return _icon;
};
const _socials = computed(
  () =>
    socials.value?.data.social.map((s) => ({ _icon: getIcon(s.icon), ...s }))
);
console.log("Socials", socials);
// const socials = [
//   {
//     link: "https://www.facebook.com",
//     name: "Facebook",
//     icon: "cib:facebook",
//     alt: "Facebook",
//   },
//   {
//     link: "https://www.instagram.com/doncactus_apulia/",
//     name: "Instagram",
//     icon: "cib:instagram",
//     alt: "Facebook",
//   },
//   {
//     link: "https://www.facebook.com",
//     name: "Google",
//     icon: "cib:google",
//     alt: "Facebook",
//   },
//   {
//     link: "https://www.facebook.com",
//     name: "TikTok",
//     icon: "cib:tiktok",
//     alt: "Facebook",
//   },
// ];
</script>
<template>
  <div class="w-full py-2">
    <ul
      class="gap-4 @[280px]:grid-cols-2 @lg:grid-cols-4 @xs:grid-cols-4"
      :class="[{ grid: !short }, { flex: short }]"
    >
      <li v-for="(social, s) in _socials" :key="s">
        <PrismicLink class="flex items-center gap-2" :field="social.link">
          <Icon :name="social._icon as string" size="20" />
          <p class="hover:underline" :class="{ hidden: short }">
            {{ social.icon }}
          </p>
        </PrismicLink>
      </li>
    </ul>
  </div>
</template>
