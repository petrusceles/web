<script setup>
import gsap from "gsap";
import {
  BrainCircuit,
  PictureInPicture2,
  TabletSmartphone,
} from "lucide-vue-next";

const { $Flip: Flip } = useNuxtApp();
const iconsWrapper = ref();

const iconsWrapperSize = useElementSize(iconsWrapper);
const iconsRef = ref();
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
</script>

<template>
  <div class="container mx-auto grid grid-cols-1 gap-4 lg:gap-7 mb-5">
    <div class="grid grid-cols-1 items-center justify-items-center">
      <h2 class="text-sm lg:text-lg">I build these kind of</h2>
      <p class="text-xl font-bold lg:text-4xl">Application</p>
    </div>
    <div class="grid grid-cols-3 gap-5 lg:gap-8">
      <div
        class="rounded-2xl border border-slate-400 min-h-24 lg:min-h-32 flex items-center justify-center relative"
      >
        <BrainCircuit
          class="w-12 h-12 lg:w-16 lg:h-16"
          absolute-stroke-width="disable"
          :stroke-width="0.5"
        />
        <h4
          class="absolute font-semibold bottom-0 translate-y-1/2 bg-white px-1 lg:text-xl"
        >
          AI
        </h4>
      </div>
      <div
        class="rounded-2xl border border-slate-400 min-h-24 flex items-center justify-center relative"
      >
        <PictureInPicture2
          class="w-12 h-12 lg:w-16 lg:h-16"
          :stroke-width="0.5"
        />
        <h4
          class="absolute font-semibold bottom-0 translate-y-1/2 bg-white px-1 lg:text-xl"
        >
          Web
        </h4>
      </div>
      <div
        class="rounded-2xl border border-slate-400 min-h-24 flex items-center justify-center relative"
      >
        <TabletSmartphone
          class="w-12 h-12 lg:w-16 lg:h-16"
          :stroke-width="0.5"
        />
        <h4
          class="absolute font-semibold bottom-0 translate-y-1/2 bg-white px-1 lg:text-xl"
        >
          Mobile
        </h4>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 mt-5 lg:gap-6">
      <p class="text-sm lg:text-lg">
        Using these various
        <span class="text-xl font-bold lg:text-4xl">Tools :</span>
      </p>

      <div
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

      <p class="text-sm lg:text-lg justify-self-end">
        And many more to be added...
      </p>
    </div>
  </div>
</template>

<style></style>
