<script setup>
import gsap from "gsap";
import { Observer } from "gsap/Observer";

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

const goToSection = (index, direction) => {
  index = wrap.value(index);

  let fromTop = direction === -1;

  let dFactor = fromTop ? -1 : 1;

  let tl = gsap.timeline({
    defaults: {
      duration: 0.25,
      ease: "power1.inOut",
    },
    onStart: () => {
      console.log("start", index);
      animating.value = true;
    },
  });
  if (currentIndex.value >= 0) {
    tl.to(workSections.value[currentIndex.value], {
      autoAlpha: 0,
      xPercent: 15 * direction,
      ease: "expo.out",
      duration: 0.4,
    });

    tl.call(
      () => {
        workCards.value[index]?.timeLine?.eventCallback("onComplete", () => {
          animating.value = false;
        });
        workCards.value[index]?.timeLine?.play();
      },
      null,
      "<0.2"
    );

    tl.fromTo(
      workSections.value[index],
      {
        autoAlpha: 0,
        y: 100 * -direction,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.2)",
        stagger: {
          each: 0.02,
          from: "random",
        },
      },
      "<0.2"
    );

    tl.set(workSections.value[currentIndex.value], {
      xPercent: 0,
    });
  }

  currentIndex.value = index;

  animating.value = false;
};

onMounted(() => {
  gsap.set([workSections.value[1], workSections.value[2]], {
    alpha: 0,
  });
  Observer.create({
    target: ".selected-works-trigger",
    type: "wheel, touch",
    wheelSpeed: 1,
    onDown: () => {
      !animating.value && goToSection(currentIndex.value - 1, -1);
    },
    onUp: () => {
      !animating.value && goToSection(currentIndex.value + 1, 1);
    },
    tolerance: 10,
    preventDefault: true,
  });
});
</script>
<template>
  <div class="flex flex-col gap-3 items-center selected-works-trigger relative">
    <div v-for="data in workData" ref="workSections" class="absolute">
      <AtomWorkCard :title="data.title" ref="workCards" />
    </div>
  </div>
</template>

<style scoped></style>
