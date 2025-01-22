<script setup>
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// // import { defineExpose } from "vue";

// gsap.registerPlugin(Observer);

const { $gsap: gsap, $Observer: Observer } = useNuxtApp();

const animating = ref(false);

const currentIndex = ref(0);

const workSections = ref();

const workCards = ref();

const workData = [
  {
    id: 1,
    title: "MinerbaOne",
    description:
      "Building an app that bridges the gap between the Directorate General of Minerals and Coal and business entities, MinerbaOne revolutionizes the mining licensing process. This platform empowers companies to seamlessly propose licenses, report progress, and track sales, driving efficiency and transparency in the mining sector.",
    tech: ["HTML", "CSS", "JavaScript", "Vue"],
    tag: "Company Work",
    assets: ["/img/minerbaone/page1.png", "/img/minerbaone/page1.png"],
  },
  {
    id: 2,
    title: "ABTechnology",
    description:
      "Building a mobile app that connects to an ESP32 via BLE, I created a powerful tool for controlling the ignition timing of CDI systems in motors. Users can configure timing maps based on RPM and degrees, while monitoring real-time data such as combustion temperature, speed, RPM, and voltage. With features like backfire and rumble idle, this app enhances performance and adds a rhythmic flair to the ignition process.",
    tech: ["Flutter", "Dart", "C", "Arduino", "ESP32"],
    tag: "Client Work",
    assets: ["/img/abtechnology/page1.png", "/img/abtechnology/page2.png"],
  },
  {
    id: 3,
    title: "Mobile Automatic Object Blurring",
    description:
      "Developed a high-performance Android app for automatic object blurring, achieving 90% accuracy and 26 fps using YOLOv5n6 and SORT. Enhanced frame rate by 500% with asynchronous processing.",
    tech: ["Python", "PyTorch", "Kotlin"],
    tag: "Personal Research",
    assets: ["/img/abtechnology/page1.png", "/img/abtechnology/page2.png"],
  },
];

// const wrap = ref(gsap.utils.wrap(0, workData.length));

onMounted(() => {
  // gsap.set(
  //   [workCards.value[1]?.globalSelector, workCards.value[2]?.globalSelector],
  //   {
  //     position: "absolute",
  //     top: "50%",
  //   }
  // );
  // Observer.create({
  //   target: ".selected-works-trigger",
  //   type: "wheel, touch",
  //   wheelSpeed: 1,
  //   onDown: () => {
  //     !animating.value && goToSection(currentIndex.value - 1, -1);
  //   },
  //   onUp: () => {
  //     !animating.value && goToSection(currentIndex.value + 1, 1);
  //   },
  //   tolerance: 10,
  //   preventDefault: true,
  // });
});
defineExpose({
  workCards,
});
</script>
<template>
  <template v-for="data in workData">
    <AtomWorkCard
      :title="data.title"
      :description="data.description"
      ref="workCards"
      :tech="data.tech"
      :tag="data.tag"
      :assets="data.assets"
    />
  </template>
</template>

<style scoped></style>
