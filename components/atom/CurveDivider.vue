<script setup>
import gsap from "gsap";

const mask = ref();

const animation = computed(() => {
  return gsap.from(mask.value, {
    width: 0,
    autoAlpha: 0,
    duration: 2,
    ease: "power3.out",
    overflow: "hidden",
  });
});

onMounted(() => {
  animation.value.play();
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
  border: solid 2px black;
  border-color: black transparent transparent transparent;
  border-radius: 50%/50px 50px 0 0;
}
</style>
