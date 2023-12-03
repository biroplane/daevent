<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();
const emits = defineEmits<{ (e: "update:modelValue", v: any): void }>();
const route = useRoute();

watch(
  () => route.name,
  (to, from) => {
    console.log("Route changed", to, from);
    if (to !== from) drawer.value = false;
  }
);
const drawer = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("update:modelValue", v);
  },
});
</script>
<template>
  <div
    v-if="drawer"
    class="absolute bg-white top-0 left-0 w-full h-screen z-50 p-6"
  >
    <div class="flex justify-between">
      <Logo />
      <button @click="drawer = false">X</button>
    </div>
    <div class="h-full overflow-y-auto py-12">
      <MainMenu />
    </div>
  </div>
</template>
