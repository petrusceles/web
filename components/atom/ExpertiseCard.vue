<script setup>
import { Proportions } from "lucide-vue-next";

const isActive = ref(false);
</script>
<template>
  <div class="flex gap-10">
    <div
      :class="!isActive && 'hover:scale-95 cursor-pointer'"
      class="border border-slate-950 w-32 h-32 duration-300 ease-out rounded-3xl relative"
    >
      <div
        class="flex items-center justify-center border border-slate-950 rounded-full w-fit p-3 absolute right-0 translate-x-1/3 -translate-y-1/3 bg-white"
      >
        <Proportions :stroke-width="1" />
      </div>
      <div
        class="flex-col flex font-semibold leading-snug absolute top-1/2 -translate-y-1/2 z-50 w-fit right-1/2 translate-x-1/2 -space-y-1"
      >
        <span class="text-2xl w-fit z-10 bg-white">Machine</span>
        <span class="text-4xl bg-white ps-5 pb-2">Learning</span>
      </div>
    </div>
    <div class="border border-slate-950 w-32 h-32 rounded-3xl relative"></div>
  </div>
</template>

<style></style>
