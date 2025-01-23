<script setup>
import { Download, ExternalLink, User } from "lucide-vue-next";

import gsap from "gsap";

const heroTitle = ref();
const heroCta = ref();

const userPicture = ref();
const userDesc = ref();

const animation = computed(() => {
  const timeLine = gsap.timeline({});

  timeLine.from(userPicture.value, {
    duration: 1,
    autoAlpha: 0,
  });

  timeLine.from(
    userDesc.value,
    {
      duration: 1,
      y: "+50",
      autoAlpha: 0,
      ease: "back.out(1.2)",
    },
    "<0.5"
  );

  timeLine.from(
    heroTitle.value,
    {
      duration: 1,
      y: "+50",
      autoAlpha: 0,
      ease: "back.out(1.2)",
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
      ease: "back.out(1.2)",
    },
    "<0.2"
  );
  return timeLine;
});

defineExpose({
  animation,
});
</script>

<template>
  <div class="grid grid-cols-1 gap-2 lg:gap-12 lg:mx-64 2xl:mx-96">
    <!-- Half 2 -->
    <div class="grid grid-cols-1 justify-items-center -space-y-7">
      <div
        class="w-56 h-w-56 rounded-full flex p-1 justify-center items-center bg-slate-200 overflow-hidden opacity-95 border border-slate-950"
        ref="userPicture"
      >
        <!-- <User size="100px" /> -->
        <img src="/img/profile2.jpeg" alt="Celes Photo" class="rounded-full" />
      </div>
      <div class="flex items-center gap-2" ref="userDesc">
        <span class="font-extralight text-2xl">Hello, I'm</span>
        <span class="font-serif text-6xl font-bold">Celes</span>
      </div>
    </div>
    <!-- Half 1 -->
    <div
      class="grid grid-cols-1 gap-11 justify-items-center lg:gap-8 place-content-center"
    >
      <h1
        class="text-4xl lg:text-7xl font-bold leading-10 text-slate-950 text-center lg:leading-none"
        ref="heroTitle"
      >
        <span class="text-stroke-3 text-white">I Shape</span> Ideas
        <span class="text-stroke-3 text-white">into </span> Reality!
      </h1>

      <div
        class="flex gap-2 items-center flex-wrap justify-center lg:justify-start"
        ref="heroCta"
      >
        <p class="text-sm font-light">Take the Big Step :</p>
        <!-- <p class="text-lg font-light">Take the Big Step :</p> -->
        <div>
          <a
            href="/Celes_CV_13.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm rounded-full border border-slate-950 py-3 px-6 flex items-center gap-3 hover:scale-95 duration-300 ease-in-out border-dashed"
          >
            <ExternalLink />
            <span> Open Celes's</span>
            <span class="text-lg font-bold">CV</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-stroke-3 {
  text-shadow: -1px -1px 0 #020617, 1px -1px 0 #020617, -1px 1px 0 #020617,
    1px 1px 0 #020617;
}
</style>
