<script setup>
import gsap from "gsap";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Celes's Portfolio`
      : "Celes's Portfolio";
  },
});


// onPrehydrate(() => {
//   console.log("<OUNTEDD 1");
// });
</script>

<template>
  <!-- <template v-else> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- </template> -->
  <!-- <NuxtLoadingIndicator /> -->
</template>

<style></style>
