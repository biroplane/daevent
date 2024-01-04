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
    socials.value?.data.social.map((s: any) => ({
      _icon: getIcon(s.icon),
      ...s,
    }))
);
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
