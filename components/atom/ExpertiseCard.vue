<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";
import * as icons from "lucide-vue-next";

import { ArrowRight, PictureInPicture2 } from "lucide-vue-next";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  id: {
    required: true,
  },
  description: {
    required: true,
  },
  cta: {
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const cardSelector = ref();
const cardTitleSelector = ref();
const cardDescSelector = ref();
const cardButtonSelector = ref();
const cardIconSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline();
  val.from(cardTitleSelector.value, {
    duration: 0.5,
    autoAlpha: 0,
    y: "+50",
    ease: "back.out(1.2)",
  });
  val.from(
    cardDescSelector.value,
    {
      duration: 0.5,
      autoAlpha: 0,
      y: "-50",
      ease: "back.out(1.2)",
    },
    "<0.1"
  );
  val.from(
    cardButtonSelector.value,
    {
      duration: 0.5,
      autoAlpha: 0,
      x: "-50",
      ease: "back.out(1.2)",
    },
    "<0.2"
  );
  val.from(cardIconSelector.value, {
    duration: 0.5,
    autoAlpha: 0,
    y: "+10",
    ease: "back.out(1.2)",
  });
  return val;
});
defineExpose({
  animation,
});

const icon = computed(() => icons[props.name]);
</script>
<template>
  <div
    ref="cardSelector"
    class="rounded-3xl border border-slate-950 px-3 pb-3 pt-4 md:px-5 md:pb-5 md:pt-6 gap-2 relative flex h-fit"
  >
    <div
      ref="cardTitleSelector"
      class="absolute bg-white px-2 font-semibold top-0 -translate-y-1/2 rounded-full text-2xl lg:text-3xl"
    >
      {{ props.title }}
    </div>
    <div class="grid grid-cols-1 gap-3">
      <div
        class="text-xs lg:text-sm font-light text-justify z-10"
        ref="cardDescSelector"
      >
        <template v-for="part in props.description">
          <template v-if="part?.bold">
            <span
              class="font-bold text-base lg:text-lg lg:leading-4 leading-5"
              >{{ part?.text }}</span
            >
          </template>
          <template v-else>{{ part?.text }}</template>
          {{ " " }}
        </template>
      </div>
      <button
        class="ps-4 pe-7 py-2 rounded-full flex items-center justify-center border border-slate-950 gap-2 flex-nowrap w-fit max-h-10 relative lg:py-3 lg:ps-6 lg:pe-9"
        ref="cardButtonSelector"
      >
        <span class="text-xs lg:text-base -translate-y-0.5 font-light">{{
          props?.cta
        }}</span>
        <ArrowRight
          class="h-8 w-8 bg-white absolute rounded-full right-0 translate-x-1/3"
          :stroke-width="0.5"
        />
      </button>
    </div>
    <div
      class="absolute top-0 -translate-y-1/2 bg-white rounded-full p-2 z-0"
      style="left: 85%"
      ref="cardIconSelector"
    >
      <component
        :is="icon"
        color="black"
        :stroke-width="0.5"
        class="h-8 sm:h-10 w-8 sm:w-10"
      />
      <!-- <PictureInPicture2
        class="h-8 sm:h-10 w-8 sm:w-10"
        color="black"
        :stroke-width="0.5"
      /> -->
    </div>
  </div>
</template>

<style></style>
