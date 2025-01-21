<script setup>
import gsap from "gsap";

const headerNav = ref();

onMounted(() => {
  gsap.from(headerNav.value, {
    duration: 1.5,
    y: -100,
    autoAlpha: 0,
    ease: "elastic.out(1,0.4)",
  });
});
</script>

<template>
  <div
    ref="headerNav"
    class="flex justify-center text-sm gap-5 items-center container mx-auto top-8 z-50 fixed left-1/2 -translate-x-1/2"
  >
    <div
      class="flex gap-5 rounded-full border border-slate-950 font-light items-center navigation shadow-md bg-white px-2 py-2 lg:py-3 lg:px-4 lg:gap-10"
    >
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink>About</NuxtLink>
    </div>
  </div>
  <div class="relative h-full">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation * {
  @apply min-w-20 rounded-full border text-center py-1.5 text-xs border-transparent text-slate-500;
}

.router-link-active {
  @apply border-slate-950 text-slate-950;
}
</style>
