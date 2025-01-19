<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
    required: true,
  },
});

const timeLine = computed(() => {
  const val = gsap.timeline();
  val.from(".pole-trigger", {
    duration: 0.5,
    y: "+50",
    ease: "back.out(1.2)",
    autoAlpha: 0,
  });

  val.from(
    ".line-trigger",
    {
      duration: 0.5,
      height: 0,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  val.from(
    ".card-below-trigger",
    {
      duration: 0.5,
      // rotation: 5,
      width: 0,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    ".card-above-trigger",
    {
      duration: 0.5,
      width: 0,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    ".categories-trigger",
    {
      duration: 0.75,
      rotation: 45,
      ease: "back.out(1.7)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  val.from(
    ".title-trigger",
    {
      duration: 1,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    ".subtitle-trigger",
    {
      duration: 1,
      x: "-50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );
  val.from(
    ".tech-list-trigger",
    {
      duration: 0.5,
      y: "+50",
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  val.from(
    ".tech-stack-trigger",
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

defineExpose({
  timeLine,
});
</script>
<template>
  <div
    class="grid grid-cols-1 items-center w-100 md:flex md:gap-5"
    style="max-width: 70rem"
  >
    <div class="relative w-8/12 h-72 md:w-1/2 md:h-96">
      <!-- Card Above -->
      <div
        style="width: 90%; height: 55%; top: 9.75%; right: 14px"
        class="z-10 rounded-l-3xl border bg-white border-slate-950 rotate-[3deg] md:rotate-[5deg] absolute card-above-trigger"
      ></div>

      <!-- Card Below -->
      <div
        style="width: 85%; height: 55%; bottom: 12%; right: 12px"
        class="z-20 rounded-l-3xl border bg-white border-slate-950 hover:-rotate-3 -rotate-[1deg] md:-rotate-[2deg] absolute card-below-trigger"
      ></div>

      <!-- Pole -->
      <div
        style="width: 36px"
        class="h-full rounded-full border border-slate-950 top-0 absolute right-0 z-0 bg-white border-dashed pole-trigger"
      ></div>

      <!-- The Line -->
      <div
        style="width: 14px; height: 80%; right: 18px"
        class="border-l border-slate-950 z-30 absolute top-1/2 -translate-y-1/2 translate-x-full bg-white line-trigger"
      ></div>

      <!-- The Categories -->
      <div
        style="
          transform: skew(-15deg) translateX(100%) translateY(100%)
            rotate(-6deg);
          transform-origin: 0% 100%;
          width: 7rem;
          right: 0%;
          height: 30px;
        "
        class="absolute text-sm border border-slate-950 font-extralight flex justify-end items-center bg-slate-100 rounded-lg -z-10 px-2 pb-1 categories-trigger"
      >
        Company work
      </div>
    </div>

    <div class="flex flex-col pb-9 md:w-1/2 md:pt-20 md:gap-2">
      <h2 class="font-bold p-0 m-0 title-trigger text-3xl md:text-4xl">
        {{ props.title }}
      </h2>
      <p class="font-light subtitle-trigger text-sm text-justify lg:text-base">
        Building an app that bridges the gap between the Directorate General of
        Minerals and Coal and business entities, MinerbaOne revolutionizes the
        mining licensing process. This platform empowers companies to seamlessly
        propose licenses, report progress, and track sales, driving efficiency
        and transparency in the mining sector.
      </p>

      <div
        class="border border-slate-950 rounded-2xl py-2 px-4 translate-y-1/4 relative tech-list-trigger w-fit mt-3 border-dashed text-xs self-center md:text-sm"
      >
        <h3
          class="absolute right-4 font-medium text-slate-500 -top-1 -translate-y-1/2 bg-white tech-stack-trigger"
        >
          Tech stack
        </h3>
        Javascript, Typescript, CSS, HTML, Vue
      </div>
    </div>
  </div>
</template>

<style></style>
