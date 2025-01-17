<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const dividerHead = ref();

onMounted(() => {
  gsap.from(dividerHead.value.children, {
    y: "50",
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".expertise-scroll-trigger",
      start: "top center",
    },
  });
});
</script>
<template>
  <div class="relative flex">
    <AtomCurveDivider />
    <div
      class="absolute left-1/2 -translate-x-1/2 -top-[3.5rem] flex items-center justify-center -space-x-24"
      ref="dividerHead"
    >
      <SvgAreasOfExpertise class="w-[130px] bg-white px-1" />
      <span class="text-2xl font-light tracking-wide bg-white px-2 text-nowrap">
        Areas of Expertise
      </span>
    </div>
  </div>
</template>

<style></style>
