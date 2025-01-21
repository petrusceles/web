<script setup>
import gsap from "gsap";

const props = defineProps({
  entity: {
    required: true,
  },
});

const poleSelector = ref();
const titleSelector = ref();
const subtitleSelector = ref();
const pageOneSelector = ref();
const pageTwoSelector = ref();
const pageThreeSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline();
  val.from([poleSelector.value, titleSelector.value, subtitleSelector.value], {
    y: 50,
    ease: "back.out(1.2)",
    duration: 0.5,
    autoAlpha: 0,
    stagger: 0.1,
  });

  val.from(
    [pageOneSelector.value, pageTwoSelector.value, pageThreeSelector.value],
    {
      x: -50,
      ease: "back.out(1.2)",
      duration: 0.5,
      autoAlpha: 0,
      stagger: 0.1,
    },
    "<0.2"
  );
  return val;
});

onMounted(() => {
  // animation.value?.play();
  // animationOut.value?.play();
});

defineExpose({
  animation,
});
</script>
<template>
  <div class="h-44 w-80 relative lg:scale-125">
    <div
      class="h-7 rounded-full border border-slate-950 bottom-10 absolute bg-white z-50"
      ref="poleSelector"
      style="width: 85%"
    >
      <div
        class="h-32 w-52 bg-white border border-slate-950 absolute rounded-3xl right-0 -top-2 -translate-y-full z-10"
        ref="pageOneSelector"
      ></div>
      <div
        class="h-28 w-48 bg-white border border-slate-950 absolute rounded-3xl -right-6 top-1/2 -translate-y-full -z-20"
        ref="pageTwoSelector"
      ></div>
      <div
        class="h-24 w-40 bg-white border border-slate-950 absolute rounded-3xl -right-12 -bottom-1/2 -z-30"
        ref="pageThreeSelector"
      ></div>
      <div
        class="font-semibold bottom-0 translate-y-[90%] left-2/3 -translate-x-[55%] absolute bg-white px-2 text-2xl z-10 text-nowrap"
        ref="titleSelector"
      >
        {{ props.entity?.name }}
        <div
          class="absolute right-0 text-end font-light text-xs px-2 text-nowrap"
          ref="subtitleSelector"
        >
          {{ props.entity?.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
