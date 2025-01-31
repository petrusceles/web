<script setup>
import {
  BrainCircuit,
  PictureInPicture2,
  TabletSmartphone,
} from "lucide-vue-next";

const { $gsap: gsap, $Flip: Flip } = useNuxtApp();
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
  </div>
</template>

<style></style>
