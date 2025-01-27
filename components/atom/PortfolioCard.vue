<script setup>
import gsap from "gsap";
import { ExternalLink } from "lucide-vue-next";

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
      class="h-7 rounded-full border border-slate-950 bottom-10 absolute bg-white z-50 flex items-center"
      ref="poleSelector"
      style="width: 85%"
    >
      <a
        v-if="props.entity?.url"
        :href="props.entity?.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs ps-2 pe-2 flex items-center gap-1 border-r border-slate-950 cursor-pointer"
      >
        <ExternalLink :size="12" /> <span> Go to Project</span></a
      >
      <div
        class="h-32 w-52 bg-white border flex items-center justify-center p-1 border-slate-950 absolute rounded-3xl right-0 -top-2 -translate-y-full z-10"
        ref="pageOneSelector"
      >
        <div class="overflow-hidden rounded-[1.3rem] h-full w-full">
          <img
            :src="props.entity?.assets[0]"
            :alt="props.title"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
      <div
        class="h-28 w-48 bg-white border overflow-hidden flex items-center p-1 border-slate-950 absolute rounded-3xl -right-6 top-1/2 -translate-y-full -z-20"
        ref="pageTwoSelector"
      >
        <div class="overflow-hidden rounded-[1.3rem] h-full w-full">
          <img
            :src="props.entity?.assets[1]"
            :alt="props.title"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
      <div
        class="h-24 w-40 bg-white border overflow-hidden flex items-center p-1 border-slate-950 absolute rounded-3xl -right-12 -bottom-1/2 -z-30"
        ref="pageThreeSelector"
      >
        <div class="overflow-hidden rounded-[1.3rem] h-full w-full">
          <img
            :src="props.entity?.assets[2]"
            :alt="props.entity?.name"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
      <h2
        class="font-semibold bottom-0 translate-y-[90%] rounded-full left-2/3 -translate-x-[55%] absolute bg-white/50 px-2 text-2xl z-10 text-nowrap"
        ref="titleSelector"
      >
        {{ props.entity?.name }}
        <p
          class="absolute right-0 text-end font-light text-xs px-2 text-nowrap"
          ref="subtitleSelector"
        >
          {{ props.entity?.description }}
        </p>
      </h2>
    </div>
  </div>
</template>

<style></style>
