<script setup>
import { Download } from "lucide-vue-next";
</script>

<template>
  <div class="container mx-auto px-5">
    <div class="flex-col gap-3 lg:flex">
      <!-- Half 1 -->
      <div
        class="grid grid-cols-1 gap-11 justify-items-center lg:w-1/2 lg:justify-items-start lg:gap-8 lg:mx-10"
      >
        <h1
          class="text-7xl font-bold leading-10 text-slate-950 text-center lg:text-start lg:leading-tight"
        >
          <span class="text-stroke-3 text-white">I Bring</span> Innovation
          <span class="text-stroke-3 text-white">into</span> Reality!
        </h1>

        <div
          class="flex gap-5 items-center flex-wrap justify-center lg:justify-start"
        >
          <p class="text-lg font-light">Take the Big Step :</p>
          <button
            class="rounded-full border border-slate-950 py-3 px-6 flex items-center gap-3 hover:shadow-lg duration-300 ease-in-out"
          >
            <Download />
            <span> Download Celes's</span>
            <span class="text-2xl font-bold">CV</span>
          </button>
        </div>
      </div>

      <!-- Half 2 -->
      <div class="w-1/2"></div>
    </div>
  </div>
</template>

<style>
.text-stroke-3 {
  text-shadow: -1px -1px 0 #020617, 1px -1px 0 #020617, -1px 1px 0 #020617,
    1px 1px 0 #020617;
}
</style>
