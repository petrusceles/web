<script lang="ts" setup>
import gsap from "gsap";
import type { Expertise } from "~/interface";

const props = defineProps<Expertise>();
const containerSelector = ref();
const titleSelector = ref();
const animation = computed(() => {
  const tl = gsap.timeline();
  tl.from(containerSelector.value, {
    scale: 0,
    autoAlpha: 0,
    duration: 0.4,
    ease: "back.out(1.5)",
  });
  tl.from(
    titleSelector.value,
    {
      y: 20,
      autoAlpha: 0,
      duration: 0.5,
      ease: "back.out(1.2)",
    },
    "<0.2"
  );
  return tl;
});
// onMounted(() => {});
defineExpose({
  animation,
});
</script>
<template>
  <div
    class="rounded-2xl border border-slate-400 min-h-24 lg:min-h-32 flex items-center justify-center relative"
    ref="containerSelector"
  >
    <component
      :is="props.icon"
      class="w-12 h-12 lg:w-16 lg:h-16"
      absolute-stroke-width="disable"
      :stroke-width="0.5"
    />
    <h4
      ref="titleSelector"
      class="absolute font-semibold bottom-0 translate-y-1/2 bg-white px-1 lg:text-xl"
    >
      {{ props.title }}
    </h4>
  </div>
</template>

<style></style>
