<script setup>
import gsap from "gsap";

const headerNav = ref();

// const isLoading = useLoading();
// const loadingPieceSelector = ref();
// const loadingOuterSelector = ref();

// const loadingSelector = ref();

// const loadingPieceAnimation = ref();
// const loadingOuterAnimation = ref();

// watch(isLoading, (val, oldVal) => {
//   if (!val && oldVal) {
//     loadingOuterAnimation.value?.kill();
//     loadingPieceAnimation.value?.kill();
//     gsap.to("loading-selector", {
//       y: -100,
//       duration: 0.75,
//       ease: "back.out",
//       autoAlpha: 0,
//     });
//   }
// });

// onPrehydrate(() => {
//   gsap.to(".loading-piece-selector", {
//     rotate: "-180deg",
//     repeat: -1,
//     duration: 2,
//     ease: "back.inOut(1.7)",
//   });
//   gsap.to(".loading-outer-selector", {
//     rotate: "360deg",
//     repeat: -1,
//     duration: 3,
//     ease: "power3.inOut",
//   });
// });

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
  <!-- <div
    class="font-bold fixed flex items-center justify-center bg-white loading-selector"
    style="z-index: 999; width: 100vw; height: 100vh"
  >
    <div
      style="height: 1px"
      class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
    ></div>
    <div
      style="height: 1px"
      class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
    ></div>
    <div
      class="w-32 h-32 rounded-full bg-slate-950/10 relative loading-outer-selector"
      ref="loadingOuterSelector"
    >
      <div
        class="h-full w-full rounded-full border border-slate-400 translate-x-1/3 -z-10 relative"
      >
        <div
          ref="loadingPieceSelector"
          class="w-[70%] h-[25%] rounded-full border loading-piece-selector border-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        ></div>
      </div>
    </div>
  </div> -->
  <div
    ref="headerNav"
    class="flex justify-center text-sm gap-5 items-center container mx-auto top-8 z-50 fixed left-1/2 -translate-x-1/2"
  >
    <div
      class="flex gap-5 rounded-full border border-slate-400 font-light items-center navigation shadow-md bg-white px-2 py-2 lg:py-3 lg:px-4 lg:gap-10"
    >
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </div>
  <div class="flex justify-center">
    <slot></slot>
  </div>
</template>

<style scoped>
.navigation * {
  @apply min-w-20 rounded-full border text-center py-1.5 text-xs border-transparent text-slate-500;
}

.router-link-active {
  @apply border-slate-400 text-slate-950;
}
</style>
