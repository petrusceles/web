<script setup>
import gsap from "gsap";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Celes's Portfolio`
      : "Celes's Portfolio";
  },
});

const isLoading = useLoading();
const loadingPieceSelector = ref();
const loadingOuterSelector = ref();

const loadingSelector = ref();

const loadingPieceAnimation = ref();
const loadingOuterAnimation = ref();

watch(isLoading, (val, oldVal) => {
  if (!val && oldVal) {
    loadingOuterAnimation.value?.kill();
    loadingPieceAnimation.value?.kill();
    gsap.to(loadingSelector.value, {
      y: -100,
      duration: 0.75,
      ease: "back.out",
      autoAlpha: 0,
    });
  }
});
onMounted(() => {
  // loadingAnimation.value = gsap.timeline()

  loadingPieceAnimation.value = gsap.to(loadingPieceSelector.value, {
    rotate: "-180deg",
    repeat: -1,
    duration: 2,
    ease: "back.inOut(1.7)",
  });
  loadingOuterAnimation.value = gsap.to(loadingOuterSelector.value, {
    rotate: "360deg",
    repeat: -1,
    duration: 3,
    ease: "power3.inOut",
  });
});
</script>

<template>
  <div
    ref="loadingSelector"
    class="font-bold fixed flex items-center justify-center bg-white"
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
      class="w-32 h-32 rounded-full bg-slate-950/10 relative"
      ref="loadingOuterSelector"
    >
      <div
        class="h-full w-full rounded-full border border-slate-950 translate-x-1/3 -z-10 relative"
      >
        <div
          ref="loadingPieceSelector"
          class="w-[70%] h-[25%] rounded-full border border-slate-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        ></div>
      </div>
    </div>
  </div>
  <!-- <template v-else> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- </template> -->
</template>

<style></style>
