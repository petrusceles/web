<script lang="ts" setup>
const { $gsap: gsap } = useNuxtApp();
import {
  BrainCircuit,
  PictureInPicture2,
  TabletSmartphone,
} from "lucide-vue-next";
import type { Expertise } from "~/interface";

const iconsWrapper = ref();

const iconsBelow = [
  "si-vuedotjs",
  "si-react",
  "si-nuxtdotjs",
  "si-nextdotjs",
  "si-express",
  "si-nestjs",
  "si-pytorch",
  "si-flutter",
];
const iconsAbove = [
  "si-javascript",
  "si-typescript",
  "si-python",
  "si-dart",
  "si-kotlin",
  "si-cplusplus",
];

const expertises: Array<Expertise> = [
  {
    icon: BrainCircuit,
    title: "AI",
  },
  {
    icon: PictureInPicture2,
    title: "Web",
  },
  {
    icon: TabletSmartphone,
    title: "Mobile",
  },
];

const titleSelector = ref();
const expertisesSelector = ref();
const toolsContainerSelector = ref();
const topTitleSelector = ref();
const bottomTitleSelector = ref();

const animation = computed(() => {
  const tl = gsap.timeline({ paused: true });

  tl.from(titleSelector.value?.children, {
    y: -20,
    duration: 0.5,
    ease: "back.out(1.5)",
    autoAlpha: 0,
    stagger: 0.1,
  });

  for (let i = 0; i < expertisesSelector.value?.length; i++) {
    const element = expertisesSelector.value[i];
    tl.add(element?.animation?.play(), !i ? "<0.0" : "<0.2");
  }
  tl.from(
    toolsContainerSelector.value,
    {
      scaleX: 0,
      scaleY: 0.5,
      duration: 0.75,
      ease: "back.out(1.5)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  tl.from(topTitleSelector.value, {
    y: 30,
    duration: 0.5,
    ease: "back.out(1.5)",
    autoAlpha: 0,
  });
  tl.from(
    bottomTitleSelector.value,
    {
      y: -30,
      duration: 0.5,
      ease: "back.out(1.5)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  return tl;
});

onMounted(() => {
  gsap.to(".icon-above", {
    duration: 10,
    ease: "none",
    x: `+=672`,
    repeat: -1,
    // Wrap the cards when appropriate
  });
  gsap.to(".icon-below", {
    duration: 15,
    ease: "none",
    x: `-=896`,
    repeat: -1,
    // Wrap the cards when appropriate
  });
});

defineExpose({
  animation,
});
</script>

<template>
  <div class="container mx-auto grid grid-cols-1 gap-4 lg:gap-7 mb-5">
    <div
      class="grid grid-cols-1 items-center justify-items-center"
      ref="titleSelector"
    >
      <h2 class="text-sm lg:text-lg">I build these kind of</h2>
      <p class="text-xl font-bold lg:text-4xl">Application</p>
    </div>
    <div class="grid grid-cols-3 gap-5 lg:gap-8 mt-2">
      <AtomExpertiseCard
        ref="expertisesSelector"
        v-for="item in expertises"
        :icon="item.icon"
        :title="item.title"
      />
    </div>
    <div class="grid grid-cols-1 gap-6 mt-5 lg:gap-8">
      <p class="text-sm lg:text-lg" ref="topTitleSelector">
        Using these various
        <span class="text-xl font-bold lg:text-4xl">Tools :</span>
      </p>

      <div
        ref="toolsContainerSelector"
        class="w-full border-x-2 border-slate-400 py-3 grid grid-cols-1 gap-8"
      >
        <div
          style="width: calc(100% - 25px)"
          ref="iconsWrapper"
          class="flex gap-16 items-center justify-end justify-self-center overflow-clip"
        >
          <v-icon
            :name="icon"
            class="icon w-12 h-12 icon-above"
            v-for="icon in iconsAbove"
          />
          <v-icon
            :name="icon"
            class="icon w-12 h-12 icon-above"
            v-for="icon in iconsAbove"
          />
          <v-icon
            :name="icon"
            class="icon w-12 h-12 icon-above"
            v-for="icon in iconsAbove"
          />
        </div>
        <div
          style="width: calc(100% - 25px)"
          ref="iconsWrapper"
          class="flex gap-16 items-center justify-start justify-self-center overflow-clip"
        >
          <v-icon
            :name="icon"
            class="icon w-12 h-12 icon-below"
            v-for="icon in iconsBelow"
          />
          <v-icon
            :name="icon"
            class="icon w-12 h-12 icon-below"
            v-for="icon in iconsBelow"
          />
        </div>
      </div>

      <p class="text-sm lg:text-lg justify-self-end" ref="bottomTitleSelector">
        And many more to be added...
      </p>
    </div>
  </div>
</template>

<style></style>
