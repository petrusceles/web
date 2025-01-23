<script setup>
import gsap from "gsap";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Celes's Portfolio`
      : "Celes's Portfolio";
  },
});

const isLoading = ref(true);
const loadingSelector = ref();
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Stop loading after component is mounted
    gsap.to(loadingSelector.value, {
      y: 100,
      duration: 0.5,
      ease: "bounce.in(1.2)",
      autoAlpha: 0,
    });
  }, 500);
});
</script>

<template>
  <!-- <div
    v-if="isLoading"
    ref="loadingSelector"
    class="font-bold fixed top-1/2 left-1/2 z-50 -translate-x-1/2 translate-y-1/2"
  >
    Loading... Please hold on, great things are on their way!
  </div> -->
  <!-- <template v-else> -->
  <NuxtLayout> <NuxtPage /> </NuxtLayout>
  <!-- </template> -->
</template>

<style></style>
