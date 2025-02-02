<template>
  <div
    class="container mx-auto grid grid-cols-1 gap-4 lg:gap-7 justify-items-center"
  >
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
