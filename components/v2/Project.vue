<script setup>
import gsap from "gsap";

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
  },
];
</script>
<template>
  <div class="container mx-auto grid grid-cols-1 gap-4 lg:gap-6">
    <h1 class="text-sm text-center lg:text-lg">
      And here some
      <span class="text-xl font-bold px-1 lg:text-4xl">Projects</span> I've ever
      did...
    </h1>
    <div
      class="flex flex-wrap gap-x-12 items-center lg:gap-x-24 lg:gap-y-3 justify-center"
    >
      <AtomProjectCard
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
