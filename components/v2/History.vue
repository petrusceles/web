<template>
  <div class="container mx-auto grid grid-cols-1 gap-4 lg:gap-7">
    <h1 class="grid grid-cols-1 justify-items-center text-sm lg:text-lg">
      <span>Simply, my recent</span>
      <span class="text-xl lg:text-4xl px-1 font-bold">
        Education & Work Experience</span
      >
    </h1>
    <div class="grid grid-cols-1 gap-8 w-full">
      <div class="flex gap-6">
        <div class="relative flex items-center justify-center">
          <div class="bg-white z-30">
            <GraduationCap
              :stroke-width="0.5"
              class="h-10 w-10 lg:h-12 lg:w-12"
            />
          </div>
          <div
            class="h-full w-[1px] rounded-full bg-slate-400 absolute left-1/2"
          ></div>
        </div>
        <div class="flex flex-wrap gap-5 py-1">
          <div
            class="grid grid-cols-1 place-content-center"
            v-for="item in education"
          >
            <p class="text-xs font-light lg:text-sm">{{ item.date }}</p>
            <h2 class="font-bold text-sm lg:text-base">{{ item.title }}</h2>
            <p class="text-xs lg:text-sm">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="flex gap-6">
        <div class="relative flex items-center justify-center">
          <div class="bg-white z-30 py-1">
            <Briefcase :stroke-width="0.5" class="h-10 w-10 lg:h-12 lg:w-12" />
          </div>
          <div
            class="h-full w-[1px] rounded-full bg-slate-400 absolute left-1/2"
          ></div>
        </div>
        <div class="flex flex-wrap gap-5 py-1">
          <div class="grid grid-cols-1" v-for="item in works">
            <p class="text-xs font-light lg:text-sm">{{ item.date }}</p>
            <h2 class="font-bold text-sm lg:text-base">{{ item.title }}</h2>
            <p class="text-xs lg:text-sm">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Briefcase, GraduationCap } from "lucide-vue-next";

const education = [
  {
    title: "Universitas Gadjah Mada",
    date: "Aug 2019 - Nov 2023",
    isCircle: false,
    subtitle: "Electronics and Instrumentation, GPA 3.67/4.00",
  },
];

const works = [
  {
    title: "Ministry of Energy and Mineral Resource",
    date: "May 2024 - Dec 2024",
    isCircle: true,
    subtitle: "Front-End Developer",
  },
  {
    title: "Full Drone Solution",
    date: "Feb 2024 - May 2024",
    isCircle: true,
    subtitle: "Education Mentor",
  },
];
</script>

<style></style>
