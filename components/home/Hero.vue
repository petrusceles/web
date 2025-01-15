<script setup>
import { Download, User } from "lucide-vue-next";

import gsap from "gsap";

const heroTitle = ref();
const heroCta = ref();

const userPicture = ref();
const userDesc = ref();

onMounted(() => {
  const timeLine = gsap.timeline({
    paused: true,
  });

  timeLine.from(userPicture.value, {
    duration: 0.5,
    autoAlpha: 0,
  });

  timeLine.from(
    userDesc.value,
    {
      duration: 1,
      y: "+50",
      autoAlpha: 0,
      ease: "back.out(1.5)",
    },
    "<0.2"
  );

  timeLine.from(
    heroTitle.value,
    {
      duration: 1,
      y: "+50",
      autoAlpha: 0,
      ease: "back.out(1.5)",
    },
    "<0.2"
  );

  timeLine.from(
    heroCta.value.children,
    {
      duration: 1,
      x: "-50",
      autoAlpha: 0,
      stagger: 0.1,
      ease: "back.out(1.5)",
    },
    "<0.2"
  );
  timeLine.play();
});
</script>

<template>
  <div class="container mx-auto px-5">
    <div class="grid grid-cols-1 gap-12 lg:gap-3 lg:flex">
      <!-- Half 1 -->
      <div
        class="grid grid-cols-1 gap-11 justify-items-center lg:w-1/2 lg:justify-items-start lg:gap-8 lg:mx-10"
      >
        <h1
          class="text-7xl font-bold leading-10 text-slate-950 text-center lg:text-start lg:leading-none"
          ref="heroTitle"
        >
          <span class="text-stroke-3 text-white">I Bring</span> Innovation
          <span class="text-stroke-3 text-white">into</span> Reality!
        </h1>

        <div
          class="flex gap-5 items-center flex-wrap justify-center lg:justify-start"
          ref="heroCta"
        >
          <p class="text-lg font-light">Take the Big Step :</p>
          <!-- <p class="text-lg font-light">Take the Big Step :</p> -->
          <div>
            <button
              class="rounded-full border border-slate-950 py-3 px-6 flex items-center gap-3 hover:shadow-lg duration-300 ease-in-out border-dashed"
            >
              <Download />
              <span> Download Celes's</span>
              <span class="text-2xl font-bold">CV</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Half 2 -->
      <div
        class="grid grid-cols-1 justify-items-center -space-y-7 lg:w-1/2 lg:items-center lg:-space-y-24"
      >
        <div
          class="w-40 h-40 border-slate-950 border-2 rounded-full flex justify-center items-center lg:h-72 lg:w-72"
          ref="userPicture"
        >
          <User size="100px" />
        </div>
        <div class="flex items-center gap-2" ref="userDesc">
          <span class="font-extralight text-2xl lg:text-6xl bg-white"
            >Hello, I'm</span
          >
          <span class="font-serif text-6xl font-bold lg:text-8xl bg-white"
            >Celes</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-stroke-3 {
  text-shadow: -1px -1px 0 #020617, 1px -1px 0 #020617, -1px 1px 0 #020617,
    1px 1px 0 #020617;
}
</style>
