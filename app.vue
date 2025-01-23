<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Celes's Portfolio`
      : "Celes's Portfolio";
  },
});
</script>

<template>
  <Analytics />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
