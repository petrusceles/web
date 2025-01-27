<script setup>
import gsap from "gsap";

const props = defineProps({
  title: {
    required: true,
    type: Array,
  },
  date: {
    required: true,
    type: String,
  },
  isCircle: {
    default: true,
  },
  subtitle: {
    require: true,
    type: String,
  },
});

const detailSelector = ref();
const dateSelector = ref();
const circleSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline();

  val.from(detailSelector.value?.children, {
    y: 100,
    duration: 0.5,
    ease: "back.out(1.2)",
    autoAlpha: 0,
    stagger: 0.1,
  });

  val.from(
    dateSelector.value,
    {
      x: -50,
      duration: 0.5,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.1"
  );
  val.from(
    circleSelector.value,
    {
      x: 5,
      duration: 0.3,
      ease: "back.out(1.2)",
      autoAlpha: 0,
    },
    "<0.2"
  );
  return val;
});

defineExpose({
  animation,
});
</script>

<template>
  <div class="grid grid-cols-1 gap-2">
    <div class="text-xs relative" ref="dateSelector">
      <p class="bg-white">{{ props.date }}</p>

      <div
        ref="circleSelector"
        :class="props.isCircle ? 'rounded-full' : 'rounded-xl'"
        class="w-10 h-10 border border-slate-950 absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden -translate-x-1/3 -z-10"
      />
    </div>
    <div class="grid grid-cols-1 ps-7 gap-1" ref="detailSelector">
      <h3 class="text-base font-semibold w-fit grid grid-cols-1 leading-6">
        <span v-for="title in props.title"> {{ title }}</span>
      </h3>
      <p class="text-xs font-light">
        {{ props.subtitle }}
      </p>
    </div>
  </div>
</template>

<style></style>
