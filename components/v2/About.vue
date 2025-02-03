<script lang="ts" setup>
const { $gsap: gsap } = useNuxtApp();
import { Briefcase, ExternalLink, GraduationCap } from "lucide-vue-next";
import type { Experience } from "~/interface";

const experiences: Array<Experience> = [
  {
    icon: GraduationCap,
    entities: [
      {
        title: "Universitas Gadjah Mada",
        date: "Aug 2019 - Nov 2023",
        subtitle: "Electronics and Instrumentation, GPA 3.67/4.00",
      },
    ],
  },
  {
    icon: Briefcase,
    entities: [
      {
        title: "Ministry of Energy and Mineral Resource",
        date: "May 2024 - Dec 2024",
        subtitle: "Front-End Developer",
      },
      {
        title: "Full Drone Solution",
        date: "Feb 2024 - May 2024",
        subtitle: "Education Mentor",
      },
    ],
  },
];

const pictureSelector = ref();
const nameSelector = ref();
const descriptionContainerSelector = ref();
const descriptionContentSelector = ref();
const descriptionTitleSelector = ref();
const experienceTitleSelector = ref();
const experienceCardsSelector = ref();

const animation = computed(() => {
  const tl = gsap.timeline({ paused: true });

  tl.from(pictureSelector.value, {
    y: 30,
    duration: 0.75,
    ease: "back.out(1.2)",
    autoAlpha: 0,
  });

  tl.from(
    nameSelector.value?.children,
    {
      x: 30,
      duration: 0.6,
      ease: "back.out(1.2)",
      autoAlpha: 0,
      stagger: 0.1,
    },
    "<0.1"
  );

  tl.from(
    descriptionContainerSelector.value,
    {
      y: 30,
      duration: 0.75,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );

  tl.from(
    descriptionContentSelector.value,
    {
      y: -10,
      duration: 0.75,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  tl.from(
    descriptionTitleSelector.value,
    {
      y: 10,
      duration: 0.75,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );

  tl.from(
    experienceTitleSelector.value?.children,
    {
      y: -10,
      duration: 0.75,
      ease: "back.out(1.2)",
      autoAlpha: 0,
      stagger: 0.2,
    },
    "<0.0"
  );

  for (let i = 0; i < experienceCardsSelector.value?.length; i++) {
    const element = experienceCardsSelector.value[i];
    tl.add(element?.animation?.play(), "<0.3");
  }
  return tl;
});

defineExpose({
  animation,
});
</script>
<template>
  <div class="container mx-auto grid grid-cols-1 justify-items-center gap-5">
    <div class="grid grid-cols-1 place-items-center gap-y-10 lg:gap-y-8">
      <div class="flex gap-4 justify-center w-full">
        <div
          class="h-32 w-32 lg:w-52 lg:h-52 rounded-full bg-slate-100 overflow-hidden p-1 lg:p-2 justify-self-end"
          ref="pictureSelector"
        >
          <img
            src="/img/profile2.jpeg"
            alt="Profile picture of Petrus Caelestinus Pratama Prihantoro, App Developer from Indonesia"
            class="object-cover h-full w-full rounded-full"
          />
        </div>
        <div
          class="grid grid-cols-1 place-content-center justify-self-start"
          ref="nameSelector"
        >
          <h1
            class="font-serif text-6xl leading-[3rem] lg:leading-[4rem] font-extrabold lg:text-8xl"
          >
            Celes.
          </h1>
          <h2 class="col-span-2 text-xs lg:text-lg">
            Petrus Caelestinus Pratama Prihantoro
          </h2>
          <a
            href="/Celes_CV14.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs lg:text-base rounded-full border border-slate-400 py-2 px-4 w-fit mt-2 flex items-center gap-2"
          >
            <ExternalLink class="lg:h-5 lg:w-5 w-4 h-4" />
            <span> Open Celes's CV</span>
          </a>
        </div>
      </div>
      <div
        class="rounded-2xl border border-slate-400 grid grid-cols-1 gap-2 px-3 pb-3 pt-4 lg:pt-6 lg:px-5 lg:pb-5 relative"
        ref="descriptionContainerSelector"
      >
        <h3
          class="lg:text-xl font-semibold text-nowrap bg-white px-2 py-0.5 rounded-full absolute top-0 -translate-y-1/2 translate-x-2"
          ref="descriptionTitleSelector"
        >
          App Developer based in Indonesia
        </h3>
        <p
          class="text-xs lg:text-sm font-light text-justify"
          ref="descriptionContentSelector"
        >
          Graduated with a degree in Electronics and Instrumentation,
          specializing in computer vision applications, and possess a strong
          passion for application development. I am eager to learn, implement,
          and develop technology-based solutions to address global challenges. I
          thrive on exploring innovative ideas and am constantly seeking new
          challenges to create a meaningful impact on society through
          technology.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 w-full gap-y-6 lg:gap-y-8">
      <h1
        class="grid grid-cols-1 justify-items-start text-sm lg:text-lg mt-3"
        ref="experienceTitleSelector"
      >
        <span>Simply, my recent</span>
        <span class="text-xl lg:text-4xl font-bold">
          Education & Work Experience</span
        >
      </h1>
      <div class="grid grid-cols-1 gap-4 w-fit">
        <AtomExperienceCard
          ref="experienceCardsSelector"
          v-for="experience of experiences"
          :entities="experience.entities"
          :icon="experience.icon"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
