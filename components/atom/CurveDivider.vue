<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const mask = ref();

onMounted(() => {
  gsap.from(mask.value, {
    width: 0,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    overflow: "hidden",
    scrollTrigger: {
      trigger: ".expertise-scroll-trigger",
      start: "top center",
    },
  });
});
</script>

<template>
  <div class="absolute parent-divider" ref="mask">
    <div class="divider text-transparent"></div>
  </div>
</template>

<style>
.parent-divider {
  height: 500px;
  width: 100%;
}
.divider {
  height: 500px;
  width: 100vw;
  border: solid 1px black;
  border-color: black transparent transparent transparent;
  border-radius: 50%/50px 50px 0 0;
}
</style>
