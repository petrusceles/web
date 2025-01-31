<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
    required: true,
  },
  description: {
    required: true,
  },
  tech: {
    required: true,
  },
  tag: {
    required: true,
  },
  assets: {
    default: [],
  },
});

const poleSelector = ref();
const lineSelector = ref();
const cardBelowSelector = ref();
const cardAboveSelector = ref();
const categoriesSelector = ref();
const titleSelector = ref();
const subtitleSelector = ref();
const techListSelector = ref();
const techStackSelector = ref();
const leftSelector = ref();
const rightSelector = ref();
const globalSelector = ref();

const timeLineOut = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      // timeLineOut.value?.kill();
    },
  });

  val.fromTo(
    leftSelector.value,
    {
      alpha: 1,
      x: 0,
    },
    {
      autoAlpha: 0,
      x: "-300",
      duration: 0.5,
      ease: "back.in(1.2)",
    }
  );
  val.fromTo(
    rightSelector.value,
    {
      x: 0,
      alpha: 1,
    },
    {
      autoAlpha: 0,
      x: "300",
      duration: 0.5,
      ease: "back.in(1.2)",
    },
    "<0.0"
  );
  return val;
});

const timeLineIn = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      // timeLineIn.value?.kill();
    },
  });

  val.fromTo(
    globalSelector.value,
    {
      alpha: 0,
      scale: 0.5,
    },
    {
      alpha: 1,
      duration: 0.5,
      ease: "power3.inOut",
      scale: 1,
    }
  );
  val.from(
    poleSelector.value,
    {
      duration: 0.5,
      y: "+50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );

  val.fromTo(
    lineSelector.value,
    {
      height: 0,
      autoAlpha: 0,
    },
    {
      duration: 0.5,
      height: "80%",
      ease: "back.out(1.2)",
      autoAlpha: 1,
    },
    "<0.2"
  );

  val.fromTo(
    cardBelowSelector.value,
    {
      // rotation: 5,
      width: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.5,
      width: "90%",
      ease: "back.out(1.2)",
    },
    "<0.3"
  );

  val.fromTo(
    cardAboveSelector.value,
    {
      width: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.5,
      width: "95%",
      ease: "back.out(1.2)",
    },
    "<0.2"
  );

  val.from(
    categoriesSelector.value,
    {
      duration: 0.5,
      rotation: 45,
      ease: "back.out(1.7)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  val.from(
    titleSelector.value,
    {
      duration: 0.5,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<-0.5"
  );
  val.from(
    subtitleSelector.value,
    {
      duration: 0.5,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );
  val.from(
    techListSelector.value,
    {
      duration: 0.5,
      y: "+50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    techStackSelector.value,
    {
      duration: 0.5,
      y: "+10",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  return val;
});

const timeLineOutReverse = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      // timeLineOutReverse.value.kill();
    },
  });
  // val.set(globalSelector.value, {
  //   position: "static",
  // });  val.fromTo(

  val.fromTo(
    leftSelector.value,
    {
      x: "-100",
      alpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.inOut",
    }
  );
  val.fromTo(
    rightSelector.value,
    {
      x: "100",
      alpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.inOut",
    },
    "<0.0"
  );

  val.from(
    poleSelector.value,
    {
      duration: 0.5,
      y: "+50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );

  val.fromTo(
    lineSelector.value,
    {
      height: 0,
      autoAlpha: 0,
    },
    {
      duration: 0.5,
      height: "80%",
      ease: "back.out(1.2)",
      autoAlpha: 1,
    },
    "<0.2"
  );

  val.fromTo(
    cardBelowSelector.value,
    {
      // rotation: 5,
      width: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.5,
      width: "90%",
      ease: "back.out(1.2)",
    },
    "<0.3"
  );

  val.fromTo(
    cardAboveSelector.value,
    {
      width: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.5,
      width: "95%",
      ease: "back.out(1.2)",
    },
    "<0.2"
  );

  val.from(
    categoriesSelector.value,
    {
      duration: 0.5,
      rotation: 45,
      ease: "back.out(1.7)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  val.from(
    titleSelector.value,
    {
      duration: 0.5,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<-0.5"
  );
  val.from(
    subtitleSelector.value,
    {
      duration: 0.5,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );
  val.from(
    techListSelector.value,
    {
      duration: 0.5,
      y: "+50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    techStackSelector.value,
    {
      duration: 0.5,
      y: "+10",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  // return val;
  return val;
});

const timeLineInReverse = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      // timeLineInReverse.value.kill();
    },
  });

  val.fromTo(
    globalSelector.value,
    {
      alpha: 1,
      scale: 1,
    },
    {
      alpha: 0,
      duration: 0.5,
      ease: "power3.inOut",
      scale: 0.5,
    }
  );
  return val;
});

onMounted(() => {
  gsap.set(globalSelector.value, {
    alpha: 0,
  });
});

defineExpose({
  timeLineIn,
  timeLineOut,
  timeLineInReverse,
  timeLineOutReverse,
  globalSelector,
});
</script>
<template>
  <div
    ref="globalSelector"
    class="grid grid-cols-1 items-center w-full md:flex md:gap-5 absolute px-10 xl:px-20 top-[55%] -translate-y-1/2 left-1/2 -translate-x-1/2"
    style="max-width: 70rem"
  >
    <div class="relative w-10/12 md:w-1/2 md:h-96 min-h-60" ref="leftSelector">
      <!-- Card Above -->
      <div
        style="height: 55%; top: 9.75%; right: 14px"
        ref="cardAboveSelector"
        class="z-10 rounded-l-3xl py-1 ps-1 pe-3 border flex items-center justify-center bg-white border-slate-400 rotate-[3deg] md:rotate-[5deg] absolute overflow-hidden"
      >
        <div class="w-full h-full rounded-[1.3rem] overflow-hidden">
          <img
            :src="props.assets[0]"
            :alt="props.title"
            class="object-cover h-full w-full"
          />
        </div>
      </div>

      <!-- Card Below -->
      <div
        style="height: 55%; bottom: 12%; right: 12px"
        ref="cardBelowSelector"
        class="z-20 rounded-l-3xl py-1 ps-1 pe-3 border flex items-center justify-center bg-white border-slate-400 -rotate-[1deg] md:-rotate-[2deg] absolute"
      >
        <div class="w-full h-full rounded-[1.3rem] overflow-hidden">
          <img
            :src="props.assets[1]"
            :alt="props.title"
            class="object-cover h-full w-full"
          />
        </div>
      </div>

      <!-- Pole -->
      <div
        style="width: 36px"
        class="h-full rounded-full border border-slate-400 top-0 absolute right-0 z-0 bg-white border-dashed"
        ref="poleSelector"
      ></div>

      <!-- The Line -->
      <div
        style="width: 14px; right: 18px"
        ref="lineSelector"
        class="border-l border-slate-400 z-30 absolute top-1/2 -translate-y-1/2 translate-x-full bg-white"
      ></div>

      <!-- The Categories -->
      <h4
        style="
          transform: skew(-15deg) translateX(100%) translateY(100%)
            rotate(-6deg);
          transform-origin: 0% 100%;
          right: 1%;
          height: 30px;
        "
        ref="categoriesSelector"
        class="absolute text-xs lg:text-sm text-nowrap border border-s-0 border-slate-400 font-extralight flex justify-end items-center bg-slate-100 rounded-lg -z-10 pe-2 ps-4 pb-1"
      >
        {{ props.tag }}
      </h4>
    </div>

    <div
      class="flex flex-col pb-9 md:w-1/2 md:pt-10 gap-3 md:gap-2"
      ref="rightSelector"
    >
      <h2 class="font-bold p-0 m-0 text-3xl lg:text-4xl" ref="titleSelector">
        {{ props.title }}
      </h2>
      <p
        class="font-light text-xs text-justify lg:text-sm"
        ref="subtitleSelector"
      >
        {{ props.description }}
      </p>

      <div
        ref="techListSelector"
        class="border border-slate-400 rounded-2xl py-2 px-4 translate-y-1/4 relative w-fit border-dashed text-xs lg:text-sm"
      >
        <h3
          ref="techStackSelector"
          class="absolute right-4 font-medium text-slate-500 -top-1 -translate-y-1/2 bg-white"
        >
          Tech stack
        </h3>
        <template v-for="stack in props.tech"> {{ stack }}, </template>
      </div>
    </div>
  </div>
</template>

<style></style>
