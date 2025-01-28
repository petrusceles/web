<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
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
  <SpeedInsights />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
