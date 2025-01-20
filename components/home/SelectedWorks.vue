<script setup>
import gsap from "gsap";
import { Observer } from "gsap/Observer";
// import { defineExpose } from "vue";

gsap.registerPlugin(Observer);

const animating = ref(false);

const currentIndex = ref(0);

const workSections = ref();

const workCards = ref();

const workData = [
  {
    id: 1,
    title: "MinerbaOne",
  },
  {
    id: 2,
    title: "ABTechnology",
  },
  {
    id: 3,
    title: "Low Quality Face Recognition",
  },
];

const wrap = ref(gsap.utils.wrap(0, workData.length));

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
    <AtomWorkCard :title="data.title" ref="workCards" />
  </template>
</template>

<style scoped></style>
