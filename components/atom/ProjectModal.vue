<script lang="ts" setup>
const { $gsap: gsap} = useNuxtApp();
import { ExternalLink, X } from "lucide-vue-next";
import type { ProjectDetail } from "~/interface";
import { onClickOutside } from "#build/imports";

const props = defineProps<ProjectDetail>();
const modalSelector = ref();
const modalContent = ref();
const animationIn = computed(() => {
  const tl = gsap.timeline({
    paused: true,
  });
  tl.to(modalSelector.value, {
    scaleX: "100%",
    autoAlpha: 1,
    duration: 0.5,
    ease: "power3.out",
  });
  return tl;
});

const show = () => {
  animationIn.value?.play();
};
const hide = () => {
  animationIn.value?.reverse();
};
onMounted(() => {
  // gsap.from(modalSelector.value, {
  //   y: "100%",
  //   autoAlpha: 0,
  //   ease: "power4.out",
  //   duration: 0.75,
  //   delay: 1,
  // });
});
defineExpose({
  show,
  hide,
});

onClickOutside(modalContent, () => {
  hide();
});
</script>
<template>
  <div
    ref="modalSelector"
    class="h-full opacity-0 scale-x-0 top-0 w-full bg-slate-950/10 fixed z-[99] left-0 flex items-center justify-center px-10 border-l-2 border-r-2 border-slate-950"
  >
    <div
      ref="modalContent"
      class="shadow-2xl max-w-[50rem] relative rounded-3xl py-5 px-7 min-w-96 min-h-44 h-fit bg-white border border-slate-400 flex flex-col gap-5 pb-9 overflow-clip"
    >
      <div
        @click="hide()"
        class="bg-rose-700 w-fit h-fit p-3 rounded-bl-3xl text-white top-0 absolute right-0 cursor-pointer"
      >
        <X :stroke-width="3" class="h-5 w-5" />
      </div>
      <div class="flex-shrink flex justify-between gap-3 md:gap-10">
        <h3 class="text-xl font-bold lg:text-2xl">{{ props.title }}</h3>
      </div>
      <div class="flex-grow flex gap-6 h-fit w-full">
        <div class="border border-slate-40 w-1/3 rounded-2xl p-1">
          <div class="overflow-hidden rounded-xl h-full w-full">
            <img
              :src="props.image"
              :alt="props.title"
              class="object-cover h-full w-full"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 w-2/3 gap-3">
          <p class="text-xs text-justify lg:text-sm font-light">
            {{ props.content }}
          </p>
          <a
            v-if="props.url"
            :href="props.url"
            rel="noopener noreferrer"
            target="_blank"
            class="border border-slate-400 w-fit px-6 py-2 rounded-full flex gap-2 items-center justify-center"
          >
            <ExternalLink class="h-4 w-4 lg:h-5 lg:w-5" />
            <span class="text-sm lg:text-base"> Go to Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
