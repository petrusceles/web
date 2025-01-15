<script setup>
import gsap from "gsap";

const dividerHead = ref();

onMounted(() => {
  // gsap.from(dividerHead.value.children, {
  //   y: "50",
  //   autoAlpha: 0,
  //   duration: 0.5,
  //   stagger: 0.1,
  //   ease: "back.out(1.5)",
  // });
});
</script>

<template>
  <!-- Separator -->
  <!-- <div class="relative flex mb-40">
    <AtomCurveDivider />
    <div
      class="absolute left-1/2 -translate-x-1/2 -top-[3.5rem] flex items-center justify-center -space-x-24"
      ref="dividerHead"
    >
      <SvgAreasOfExpertise class="w-[130px] bg-white px-1" />
      <span class="text-3xl font-bold tracking-wide bg-white px-2 text-nowrap">
        Areas of Expertise
      </span>
    </div>
  </div> -->

  <!-- Main Content -->
  <div class="flex justify-center">
    <AtomExpertiseCard />
  </div>
</template>

<style></style>
