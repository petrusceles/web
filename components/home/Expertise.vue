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

const animation = computed(() => {
  const val = gsap.timeline();
  for (let i = 0; i < expertiseCardsParent.value?.length; i++) {
    val.from(
      expertiseCardsParent.value[i],
      {
        duration: 0.3,
        ease: "power1.out",
        autoAlpha: 0,
        x: "-100",
      },
      "<0.1"
    );
    val.add(expertiseCards.value[i]?.animation, "<0.3");
  }
  return val;
});

defineExpose({
  animation,
});
</script>

<template>
  <!-- Main Content -->
  <div
    ref="expertises"
    class="grid grid-cols-1 gap-8 expertise-main-selector w-full lg:flex absolute left-1/2 -translate-x-1/2 px-10 xl:px-20 top-[55%] -translate-y-1/2"
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
