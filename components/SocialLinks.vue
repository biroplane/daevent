<script setup lang="ts">
defineProps({
  horizontal: { type: Boolean, default: false },
});
const socials = [
  {
    link: "https://www.facebook.com",
    name: "Facebook",
    icon: "cib:facebook",
    alt: "Facebook",
  },
  {
    link: "https://www.instagram.com/doncactus_apulia/",
    name: "Instagram",
    icon: "cib:instagram",
    alt: "Facebook",
  },
  {
    link: "https://www.facebook.com",
    name: "Google",
    icon: "cib:google",
    alt: "Facebook",
  },
  {
    link: "https://www.facebook.com",
    name: "TikTok",
    icon: "cib:tiktok",
    alt: "Facebook",
  },
];
</script>
<template>
  <div class="w-full">
    <ul class="grid gap-4 @[280px]:grid-cols-2 @lg:grid-cols-4 @xs:grid-cols-4">
      <li v-for="social in socials" :key="social.link">
        <a class="flex items-baseline gap-2" :href="social.link">
          <Icon :name="social.icon" size="16" />
          <p class="hover:underline">
            {{ social.name }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
