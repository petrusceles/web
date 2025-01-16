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
const onProcess = ref(false);
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

onMounted(async () => {
  // console.log(expertiseCards.value);
  expertiseCards.value[2]?.gsapAnimation?.play();
});
</script>

<template>
  <!-- Main Content -->
  <div
    style="max-width: 60rem"
    class="grid grid-cols-2 mx-auto gap-8 px-8 lg:grid-flow-col lg:grid-cols-3 xl:gap-y-20"
  >
    <div
      ref="expertiseCardParent"
      v-for="(data, index) in datas"
      :key="data?.id"
      @click="makeLast(index)"
      :class="[
        index == 2 && 'col-span-2 lg:row-span-2 lg:col-span-2',
        index != 2 && 'col-span-2 xs:col-span-1 ',
      ]"
      class="justify-center flex items-baseline h-fit"
    >
      <AtomExpertiseCard
        ref="expertiseCards"
        :id="data?.id"
        :firstTitle="data.firstTitle"
        :secondTitle="data.secondTitle"
      />
    </div>
  </div>
</template>

<style></style>
