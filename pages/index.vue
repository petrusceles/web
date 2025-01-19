<script setup>
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {});
</script>

<template>
  <div>
    <div
      class="hero-container bg-white flex items-center"
      style="height: 100vh"
    >
      <div class="mx-auto container">
        <HomeHero />
      </div>
    </div>

    <div
      class="expertise-container px-10 flex items-center"
      style="height: 100vh"
    >
      <div
        class="mx-auto sm:container expertise-scroll-trigger w-full grid grid-cols-1 gap-10 relative"
      >
        <h2
          class="lg:text-8xl xl:text-9xl font-semibold text-7xl lg:text-nowrap text-slate-950/20"
        >
          Areas of Expertise
        </h2>
        <HomeExpertise />
      </div>
    </div>

    <!-- <div
      class="mx-auto sm:container py-36 px-8 work-container"
      style="height: 100vh"
    >
      <HomeSelectedWorks />
    </div> -->
  </div>
</template>
