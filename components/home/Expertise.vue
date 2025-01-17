<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

const expertiseCardParent = ref();
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
const makeLast = async (index) => {
  if (true) {
    const state = Flip.getState(expertiseCardParent.value);

    const item = datas.value.splice(index, 1)[0];
    const tobeAnimated = {
      play: null,
      reverse: null,
    };
    for (let i = 0; i < expertiseCards.value?.length; i++) {
      if (expertiseCards.value[i]?.id == item.id) {
        tobeAnimated.play = expertiseCards.value[i];
      } else if (
        expertiseCards.value[i]?.id == datas.value[datas.value.length - 1].id
      ) {
        tobeAnimated.reverse = expertiseCards.value[i];
      }
    }
    tobeAnimated.reverse?.nonActivate();
    tobeAnimated.reverse?.gsapAnimation?.reverse();

    tobeAnimated.play?.gsapAnimation?.play();

    datas.value.push(item);
    await nextTick();

    Flip.from(state, {
      ease: "back.out(1.2)",
      duration: 0.5,
      absolute: true,
    });
  }
};

const expertises = ref();

onMounted(async () => {
  // console.log(expertiseCards.value);
  let timeLine = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: ".expertise-scroll-trigger",
      start: "top center",
    },
  });
  timeLine.from(expertises.value.children, {
    duration: 0.75,
    stagger: 0.2,
    ease: "back.out(1.2)",
    autoAlpha: 0,
    y: "+100",
    onStart: () => {
      expertiseCards.value[2]?.gsapAnimation?.play();
    },
  });
});
</script>

<template>
  <!-- Main Content -->
  <div
    style="max-width: 60rem"
    ref="expertises"
    class="grid grid-cols-2 mx-auto gap-8 px-8 lg:grid-flow-col lg:grid-cols-4 expertise-main-selector"
  >
    <div
      ref="expertiseCardParent"
      v-for="(data, index) in datas"
      :key="data?.id"
      @click="makeLast(index)"
      :class="[
        index == 2 && 'col-span-2 lg:row-span-4 lg:col-span-3',
        index != 2 && 'col-span-2 xs:col-span-1 self-start',
      ]"
      class="justify-center flex items-baseline h-fit"
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
