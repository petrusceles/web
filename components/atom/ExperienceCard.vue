<script lang="ts" setup>
import gsap from "gsap";
import type { Experience } from "~/interface";

const props = defineProps<Experience>();

const iconSelector = ref();
const lineSelector = ref();
const contentsSelector = ref();
const animation = computed(() => {
  const tl = gsap.timeline({ paused: true });
  tl.from(iconSelector.value, {
    y: 50,
    duration: 0.5,
    ease: "back.out(1.2)",
    autoAlpha: 0,
  });
  tl.from(
    lineSelector.value,
    {
      scaleY: 0,
      duration: 0.5,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );

  for (let i = 0; i < contentsSelector.value?.length; i++) {
    const element = contentsSelector.value[i];
    tl.add(element?.animation?.play(), "<0.3");
  }
  return tl;
});
onMounted(() => {
  // gsap.to()
});
defineExpose({
  animation,
});
</script>
<template>
  <div class="flex gap-6">
    <div class="relative flex items-center justify-center py-5">
      <div class="bg-white z-30" ref="iconSelector">
        <component
          :is="props.icon"
          :stroke-width="0.5"
          class="h-10 w-10 lg:h-12 lg:w-12"
        />
      </div>
      <div
        ref="lineSelector"
        class="h-full w-[1px] rounded-full bg-slate-400 absolute left-1/2"
      ></div>
    </div>
    <div class="flex flex-wrap gap-5 py-1">
      <AtomExperienceDetail
        ref="contentsSelector"
        v-for="item in props.entities"
        :date="item.date"
        :subtitle="item.subtitle"
        :title="item.title"
      />
    </div>
  </div>
</template>

<style></style>
