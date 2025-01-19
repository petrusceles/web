<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";
import { ArrowRight, PictureInPicture2 } from "lucide-vue-next";

const props = defineProps({
  firstTitle: {
    required: true,
    type: String,
  },
  secondTitle: {
    required: true,
    type: String,
  },
  id: {
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
</script>
<template>
  <div
    ref="cardSelector"
    class="rounded-3xl border border-slate-950 px-5 pb-5 pt-6 gap-2 relative flex h-fit"
  >
    <div
      ref="cardTitleSelector"
      class="absolute bg-white px-2 text-2xl xl:text-3xl font-semibold top-0 -translate-y-1/2"
    >
      {{ props.firstTitle }} {{ props.secondTitle }}
    </div>
    <div class="grid grid-cols-1 gap-5">
      <div class="text-sm font-light text-justify" ref="cardDescSelector">
        Transforming ideas into
        <span class="font-bold text-base leading-5 lg:leading-4 md:text-lg"
          >Dynamic Web Applications</span
        >
        that not only meet user needs but also elevate their experience. Let's
        build something amazing together!
      </div>
      <button
        class="ps-4 pe-8 py-2 rounded-full flex items-center justify-center border border-slate-950 gap-2 flex-nowrap w-fit max-h-10 relative"
        ref="cardButtonSelector"
      >
        <span class="text-sm -translate-y-0.5 font-light"
          >Explore My Web Applications</span
        >
        <ArrowRight
          class="h-10 w-10 bg-white absolute rounded-full right-0 translate-x-1/3"
          :stroke-width="0.5"
        />
      </button>
    </div>
    <div
      class="absolute top-0 -translate-y-1/2 bg-white rounded-full p-2"
      style="left: 85%"
      ref="cardIconSelector"
    >
      <PictureInPicture2
        class="h-8 sm:h-10 w-8 sm:w-10"
        color="black"
        :stroke-width="0.5"
      />
    </div>
  </div>
</template>

<style></style>
