<script lang="ts" setup>
const { $gsap: gsap } = useNuxtApp();
import type { ExperienceDetail } from "~/interface";

const props = defineProps<ExperienceDetail>();
const containerSelector = ref();
const animation = computed(() => {
  const tl = gsap.timeline({
    paused: true,
  });
  tl.from(containerSelector.value?.children, {
    y: 50,
    stagger: 0.2,
    duration: 0.75,
    ease: "back.out(1.2)",
    autoAlpha: 0,
  });
  return tl;
});

defineExpose({
  animation,
});
</script>
<template>
  <div class="grid grid-cols-1 place-content-center" ref="containerSelector">
    <p class="text-xs font-light lg:text-sm">{{ props.date }}</p>
    <h2 class="font-bold text-sm lg:text-base">{{ props.title }}</h2>
    <p class="text-xs lg:text-sm">{{ props.subtitle }}</p>
  </div>
</template>

<style></style>
