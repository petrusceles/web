<script setup>
import gsap from "gsap";

const education = [
  {
    title: ["UNIVERSITAS GADJAH MADA"],
    date: "Aug 2019 - Nov 2023",
    isCircle: false,
    subtitle: "Electronics and Instrumentation, GPA 3.67/4.00",
  },
];

const works = [
  {
    title: ["MINISTRY OF ENERGY", "AND MINERAL RESOURCES x UGM"],
    date: "May 2024 - Dec 2024",
    isCircle: true,
    subtitle: "Front-End Developer",
  },
  {
    title: ["FULL DRONE SOLUTION"],
    date: "Feb 2024 - May 2024",
    isCircle: true,
    subtitle: "Education Mentor",
  },
  {
    title: ["PT PAS ANDALAN SOLUSI"],
    date: "Dec 2021 - Jun 2022",
    isCircle: true,
    subtitle: "Computer Vision Application Developer",
  },
];

const poleSelector = ref();

const educationSelector = ref();
const worksSelector = ref();

const educationTitleSelector = ref();
const worksTitleSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline({ paused: true });
  val.from([poleSelector.value, poleSelector.value?.children], {
    y: 100,
    duration: 0.5,
    autoAlpha: 0,
    ease: "back.out",
    stagger: 0.2,
  });
  val.from(
    [educationTitleSelector.value, worksTitleSelector.value],
    {
      y: -10,
      duration: 0.5,
      autoAlpha: 0,
      ease: "back.out",
      stagger: 0.2,
    },
    "<0.2"
  );
  for (let i = 0; i < educationSelector.value?.length; i++) {
    val.add(educationSelector.value[i]?.animation, "<0.2");
  }
  for (let i = 0; i < worksSelector.value?.length; i++) {
    val.add(worksSelector.value[i]?.animation, "<0.2");
  }
  return val;
});

defineExpose({
  animation,
});
</script>

<template>
  <div class="flex flex-col gap-8 lg:flex-row">
    <div class="grid grid-cols-1 gap-6 justify-items-center content-start">
      <div
        class="text-3xl font-bold tracking-wider"
        ref="educationTitleSelector"
      >
        Education
      </div>
      <div
        class="grid grid-cols-1 gap-3 justify-items-start relative content-start"
      >
        <AtomHistoryCard
          ref="educationSelector"
          v-for="item in education"
          :title="item.title"
          :date="item.date"
          :is-circle="item.isCircle"
          :subtitle="item.subtitle"
        />
      </div>
    </div>

    <div
      class="h-full lg:w-5 border border-slate-950 rounded-full mx-20 relative -translate-x-5"
      ref="poleSelector"
    >
      <div
        class="h-full w-5 border border-slate-950 rounded-full absolute top-[10%] right-0 translate-x-[150%] border-dashed bg-slate-100"
      ></div>
    </div>

    <div class="grid grid-cols-1 gap-6 justify-items-center">
      <div class="text-2xl font-bold tracking-wider" ref="worksTitleSelector">
        Work Experiences
      </div>
      <div
        class="grid grid-cols-1 gap-3 justify-items-start relative content-start"
      >
        <AtomHistoryCard
          ref="worksSelector"
          v-for="item in works"
          :title="item.title"
          :date="item.date"
          :is-circle="item.isCircle"
          :subtitle="item.subtitle"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
