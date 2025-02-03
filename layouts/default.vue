<script setup>
const { $gsap: gsap } = useNuxtApp();
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headerNav = ref();
const aboutSelector = ref();
const expertiseSelector = ref();
const projectSelector = ref();

const scrollTo = (section) => {
  gsap.to(window, {
    duration: 1,
    ease: "power4.inOut",
    scrollTo: { y: section, offsetY: 150 },
  });
};

onMounted(() => {
  const selects = [
    aboutSelector.value,
    expertiseSelector.value,
    projectSelector.value,
  ];
  const sections = ["#about", "#expertise", "#project"];
  const starts = ["top center", "top center", "top center"];
  const ends = [
    "bottom-=100px center",
    "bottom-=100px center",
    "bottom-=100px center",
  ];

  for (let i = 0; i < selects.length; i++) {
    const selector = selects[i];
    const section = sections[i];
    gsap.set(selector, {
      xPercent: -101,
      zIndex: 10,
    });
    ScrollTrigger.create({
      trigger: section,
      start: starts[i],
      end: ends[i],
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const xTranslation = progress * 101 - 101;
        gsap.set(selector, { xPercent: xTranslation });
      },
      onLeave: () => {
        gsap.to(selector, {
          xPercent: 101,
          duration: 0.3,
          ease: "power3.inOut",
        });
      },
    });
  }

  gsap.from(headerNav.value, {
    duration: 1.5,
    y: -101,
    autoAlpha: 0,
    ease: "elastic.out(1,0.4)",
  });
});
</script>

<template>
  <!-- <div
    class="font-bold fixed flex items-center justify-center bg-white loading-selector"
    style="z-index: 999; width: 100vw; height: 100vh"
  >
    <div
      style="height: 1px"
      class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
    ></div>
    <div
      style="height: 1px"
      class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
    ></div>
    <div
      class="w-32 h-32 rounded-full bg-slate-950/10 relative loading-outer-selector"
      ref="loadingOuterSelector"
    >
      <div
        class="h-full w-full rounded-full border border-slate-400 translate-x-1/3 -z-10 relative"
      >
        <div
          ref="loadingPieceSelector"
          class="w-[70%] h-[25%] rounded-full border loading-piece-selector border-slate-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        ></div>
      </div>
    </div>
  </div> -->
  <div
    ref="headerNav"
    class="flex justify-center text-sm gap-5 items-center container mx-auto top-8 z-50 fixed left-1/2 -translate-x-1/2"
  >
    <div
      class="flex gap-4 rounded-full border border-slate-400 font-bold items-center justify-center navigation shadow-md bg-white px-4 py-3 text-xs"
    >
      <button
        class="rounded-full py-3 px-5 overflow-clip box-border relative"
        @click="scrollTo('#about')"
      >
        <div
          ref="aboutSelector"
          class="background absolute w-full h-full bg-slate-400 top-1/2 left-0 -translate-y-1/2 z-10"
        ></div>
        <div
          class="background absolute w-[95%] h-[90%] bg-white top-1/2 left-1/2 -translate-y-1/2 z-20 rounded-full -translate-x-1/2"
        ></div>
        <div class="z-50 relative bg-white rounded-full">About</div>
      </button>

      <button
        class="rounded-full py-3 px-5 overflow-clip box-border relative"
        @click="scrollTo('#expertise')"
      >
        <div class="z-50 relative">Expertise</div>

        <div
          class="background absolute w-[95%] h-[90%] bg-white top-1/2 left-1/2 -translate-y-1/2 z-20 rounded-full -translate-x-1/2"
        ></div>
        <div
          ref="expertiseSelector"
          class="background absolute w-full h-full bg-slate-400 top-1/2 left-0 -translate-y-1/2 z-10"
        ></div>
      </button>
      <button
        class="rounded-full py-3 px-5 overflow-clip box-border relative"
        @click="scrollTo('#project')"
      >
        <div class="z-50 relative">Projects</div>

        <div
          class="background absolute w-[95%] h-[90%] bg-white top-1/2 left-1/2 -translate-y-1/2 z-20 rounded-full -translate-x-1/2"
        ></div>
        <div
          ref="projectSelector"
          class="background absolute w-full h-full bg-slate-400 top-1/2 left-0 -translate-y-1/2 z-10"
        ></div>
      </button>
    </div>
  </div>
  <div class="flex justify-center">
    <slot></slot>
  </div>
</template>

<style scoped></style>
