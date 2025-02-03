<script lang="ts" setup>
import type { ProjectDetail } from "~/interface";
const { $gsap: gsap } = useNuxtApp();

const entities = [
  {
    name: "Mobile Automatic Object Blurring",
    description: "Advancing Lightweight Model for Mobile App",
    images: [
      "/img/appobjectblur/page1.jpeg",
      "/img/appobjectblur/page2.jpeg",
      "/img/appobjectblur/page3.png",
    ],
    url: "https://github.com/petrusceles/YOLOv5-Mobile-Automatic-Object-Blurring-App.git",
    stack: "YOLOv5, Kotlin, PyTorch",
    content:
      "Developed a high-performance Android app for automatic object blurring, achieving 90% accuracy and 26 fps using YOLOv5n6 and SORT. Enhanced frame rate by 500% with asynchronous processing.",
  },
  {
    name: "MinerbaOne",
    description: "Mineral & Coal Mining Superapp",
    images: [
      "/img/minerbaone/page1.png",
      "/img/minerbaone/page1.png",
      "/img/minerbaone/page1.png",
    ],
    stack: "VueJs, Metronic Bootstrap",
    content:
      "Build an app that bridges the gap between the Directorate General of Minerals and Coal and business entities, MinerbaOne revolutionizes the mining licensing process. This platform empowers companies to seamlessly propose licenses, report progress, and track sales, driving efficiency and transparency in the mining sector.",
  },
  {
    name: "Naqos",
    description: "Boarding House Rental Platform",
    images: [
      "/img/naqos/page1.png",
      "/img/naqos/page2.png",
      "/img/naqos/page3.png",
    ],
    url: "https://github.com/petrusceles/Naqos-FE.git",
    stack: "ReactJs, ExpressJs, MongoDB",
    content:
      "Developed an app that connects boarding house owners and seekers, allowing owners to list properties and set flexible pricing for different durations. Seekers can search for accommodations, view details, and book their stay, with payment confirmation handled through photo uploads. Implemented refresh tokens for added security, with sessions and tokens stored securely.",
  },
  {
    name: "ABTechnology",
    description: "Programmable CDI for Motorcycles",
    images: [
      "/img/abtechnology/page1.png",
      "/img/abtechnology/page2.png",
      "/img/abtechnology/page3.png",
    ],
    stack: "Flutter, ArduinoIDE, ESP32",
    content:
      "Developed a mobile app that connects to an ESP32 via BLE to controlling the ignition timing of CDI systems in motors. Users can configure timing maps based on RPM and degrees, while monitoring real-time data such as combustion temperature, speed, RPM, and voltage. It include features like backfire and rumble idle which could enhances performance and adds a rhythmic flair to the ignition process.",
  },
];

const projectCardSelector = ref();
const titleSelector = ref();

const animation = computed(() => {
  const tl = gsap.timeline({});
  tl.from(titleSelector.value, {
    x: -50,
    autoAlpha: 0,
    ease: "back.out(1.5)",
    duration: 0.6,
  });
  for (let i = 0; i < projectCardSelector.value?.length; i++) {
    const element = projectCardSelector.value[i];
    tl.add(element?.animation?.play(), i == 0 ? "<0.0" : "<0.3");
  }
  return tl;
});

const projectModal = ref();
const selectedProject = ref<ProjectDetail>({
  content: "",
  image: "",
  title: "",
});
defineExpose({
  animation,
});
</script>
<template>
  <AtomProjectModal
    ref="projectModal"
    :content="selectedProject.content"
    :image="selectedProject.image"
    :url="selectedProject.url"
    :title="selectedProject.title"
  />
  <div class="container mx-auto grid grid-cols-1 gap-5 lg:gap-9">
    <h1 class="text-sm text-center lg:text-lg" ref="titleSelector">
      And here some
      <span class="text-xl font-bold px-1 lg:text-4xl">Projects</span> I've ever
      did
    </h1>
    <div
      class="flex flex-wrap gap-x-12 gap-y-5 items-center lg:gap-x-28 lg:gap-y-8 justify-center"
    >
      <AtomProjectCard
        @show="
          () => {
            selectedProject = {
              content: item.content,
              image: item.images[2],
              title: item.name,
              url: item.url,
            };
            projectModal?.show();
          }
        "
        ref="projectCardSelector"
        v-for="item in entities"
        :name="item.name"
        :images="item.images"
        :description="item.description"
        :stack="item.stack"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style></style>
