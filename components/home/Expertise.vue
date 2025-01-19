<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

const expertiseCardsParent = ref();
const expertiseCards = ref();

const datas = ref([
  {
    id: 1,
    firstTitle: "Machine",
    secondTitle: "Learning",
  },
  {
    id: 2,
    firstTitle: "Web",
    secondTitle: "Application",
  },
  {
    id: 3,
    firstTitle: "Mobile",
    secondTitle: "Application",
  },
]);

const expertises = ref();

onMounted(async () => {
  // console.log(expertiseCards.value);gs
  const animation = gsap.timeline();
  for (let i = 0; i < expertiseCardsParent.value?.length; i++) {
    animation.from(
      expertiseCardsParent.value[i],
      {
        duration: 0.3,
        ease: "power1.out",
        autoAlpha: 0,
        x: "-100",
      },
      "<0.1"
    );
    animation.add(expertiseCards.value[i]?.animation, "<0.3");
  }
});
</script>

<template>
  <!-- Main Content -->
  <div
    ref="expertises"
    class="grid grid-cols-1 gap-12 expertise-main-selector w-full lg:flex"
  >
    <div
      ref="expertiseCardsParent"
      v-for="(data, index) in datas"
      :key="data?.id"
    >
      <AtomExpertiseCard
        ref="expertiseCards"
        :id="data?.id"
        :firstTitle="data.firstTitle"
        :secondTitle="data.secondTitle"
        :index="index"
      />
    </div>
  </div>
</template>

<style></style>
