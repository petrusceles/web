<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
    required: true,
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
      timeLineOut.value?.kill();
    },
  });

  // val.set(globalSelector.value, {
  //   position: "absolute",
  //   top: 0,
  // });

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
      ease: "power3.out",
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
      ease: "power3.out",
    },
    "<0.0"
  );
  return val;
});

const timeLineIn = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      timeLineIn.value?.kill();
    },
  });

  // val.set(globalSelector.value, {
  //   position: "static",
  // });

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
    "<0.2"
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
      duration: 0.75,
      rotation: 45,
      ease: "back.out(1.7)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  val.from(
    titleSelector.value,
    {
      duration: 1,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    subtitleSelector.value,
    {
      duration: 1,
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
      timeLineOutReverse.value.kill();
    },
  });
  // val.set(globalSelector.value, {
  //   position: "static",
  // });
  val.fromTo(
    leftSelector.value,
    {
      x: "-100",
      alpha: 0,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.75,
      ease: "power1.inOut",
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
      duration: 0.75,
      ease: "power1.inOut",
    },
    "<0.0"
  );
  return val;
});

const timeLineInReverse = computed(() => {
  const val = gsap.timeline({
    onComplete: () => {
      timeLineInReverse.value.kill();
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
      duration: 1,
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
    <div class="relative w-8/12 md:w-1/2 md:h-96 min-h-60" ref="leftSelector">
      <!-- Card Above -->
      <div
        style="height: 55%; top: 9.75%; right: 14px"
        ref="cardAboveSelector"
        class="z-10 rounded-l-3xl border bg-white border-slate-950 rotate-[3deg] md:rotate-[5deg] absolute"
      ></div>

      <!-- Card Below -->
      <div
        style="height: 55%; bottom: 12%; right: 12px"
        ref="cardBelowSelector"
        class="z-20 rounded-l-3xl border bg-white border-slate-950 hover:-rotate-3 -rotate-[1deg] md:-rotate-[2deg] absolute"
      ></div>

      <!-- Pole -->
      <div
        style="width: 36px"
        class="h-full rounded-full border border-slate-950 top-0 absolute right-0 z-0 bg-white border-dashed"
        ref="poleSelector"
      ></div>

      <!-- The Line -->
      <div
        style="width: 14px; right: 18px"
        ref="lineSelector"
        class="border-l border-slate-950 z-30 absolute top-1/2 -translate-y-1/2 translate-x-full bg-white"
      ></div>

      <!-- The Categories -->
      <div
        style="
          transform: skew(-15deg) translateX(100%) translateY(100%)
            rotate(-6deg);
          transform-origin: 0% 100%;
          width: 7.5rem;
          right: 3%;
          height: 30px;
        "
        ref="categoriesSelector"
        class="absolute text-sm border border-slate-950 font-extralight flex justify-end items-center bg-slate-100 rounded-lg -z-10 px-2 pb-1"
      >
        Company work
      </div>
    </div>

    <div class="flex flex-col pb-9 md:w-1/2 md:pt-20 gap-2" ref="rightSelector">
      <h2 class="font-bold p-0 m-0 text-3xl lg:text-4xl" ref="titleSelector">
        {{ props.title }}
      </h2>
      <p
        class="font-light text-xs text-justify lg:text-sm"
        ref="subtitleSelector"
      >
        Building an app that bridges the gap between the Directorate General of
        Minerals and Coal and business entities, MinerbaOne revolutionizes the
        mining licensing process. This platform empowers companies to seamlessly
        propose licenses, report progress, and track sales, driving efficiency
        and transparency in the mining sector.
      </p>

      <div
        ref="techListSelector"
        class="border border-slate-950 rounded-2xl py-2 px-4 translate-y-1/4 relative w-fit border-dashed text-xs lg:text-sm"
      >
        <h3
          ref="techStackSelector"
          class="absolute right-4 font-medium text-slate-500 -top-1 -translate-y-1/2 bg-white"
        >
          Tech stack
        </h3>
        Javascript, Typescript, CSS, HTML, Vue
      </div>
    </div>
  </div>
</template>

<style></style>
