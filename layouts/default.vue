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
    class="flex justify-center text-sm gap-5 items-center container mx-auto sticky top-10 z-50"
  >
    <div
      class="flex gap-10 rounded-full border border-slate-950 px-6 py-3 font-light items-center navigation shadow-md bg-white"
    >
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink>Portfolio</NuxtLink>
      <NuxtLink>About</NuxtLink>
    </div>
  </div>
  <div class="relative">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation * {
  @apply min-w-20 rounded-full border text-center py-1.5 text-sm border-transparent text-slate-500;
}

.router-link-active {
  @apply border-slate-950 text-slate-950;
}
</style>
