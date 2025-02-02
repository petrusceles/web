<script setup>
const { $gsap: gsap} = useNuxtApp();

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  stack: {
    required: true,
    type: String,
  },
  images: {
    required: true,
    type: Array,
  },
  url: {
    type: String,
  },
});

const imagesSelector = ref();
const descriptionSelector = ref();
const isAnimating = ref(false);

const animation = computed(() => {
  const tl = gsap.timeline({
    onStart: () => {
      isAnimating.value = true;
    },
    onComplete: () => {
      isAnimating.value = false;
    },
  });

  tl.from(imagesSelector.value?.children, {
    y: 50,
    duration: 0.75,
    ease: "back.out",
    autoAlpha: 0,
    stagger: 0.2,
  });
  tl.from(
    descriptionSelector.value?.children,
    {
      y: -10,
      duration: 0.75,
      ease: "back.out",
      autoAlpha: 0,
      stagger: 0.2,
    },
    "<0.3"
  );
  return tl;
});
defineExpose({
  animation,
});

const frontSelector = ref();
const backSelector = ref();
const hoverAnimation = computed(() => {
  const tl = gsap.timeline({ paused: true });
  if (!isAnimating.value) {
    tl.to(frontSelector.value, {
      duration: 0.2,
      translateX: -30,
      translateY: 30,
      ease: "power3.inOut",
    });
    tl.to(
      backSelector.value,
      {
        duration: 0.2,
        translateX: 50,
        translateY: -10,
        ease: "power3.inOut",
      },
      "<0.0"
    );
  }
  return tl;
});
onMounted(() => {});

const emits = defineEmits(["show"]);
</script>
<template>
  <div
    class="grid grid-cols-1 w-72 min-w-60 lg:w-80 cursor-pointer"
    @mouseover="
      () => {
        hoverAnimation?.play();
      }
    "
    @mouseleave="
      () => {
        hoverAnimation?.reverse();
      }
    "
    @click="
      () => {
        hoverAnimation?.reverse();
        emits('show');
      }
    "
  >
    <div class="w-full grid grid-cols-1 relative pb-8" ref="imagesSelector">
      <div
        ref="frontSelector"
        class="h-32 w-52 lg:h-44 lg:w-64 p-1 translate-y-7 -skew-x-12 bg-white border border-slate-400 rounded-2xl justify-self-start me-5 z-30"
      >
        <div class="overflow-hidden rounded-xl h-full w-full">
          <img
            :src="props.images[0]"
            :alt="props.name"
            class="object-cover h-full w-full"
          />
        </div>
      </div>

      <div
        class="rounded-2xl -skew-x-6 border border-slate-400 px-3 text-center py-1.5 w-fit absolute z-40 right-4 bottom-1/2 translate-y-1/2 bg-white border-dashed"
      >
        <p class="text-xs font-light lg:text-sm">{{ props.stack }}</p>
      </div>
      <div
        ref="backSelector"
        class="h-32 w-52 lg:h-44 lg:w-64 p-1 -skew-x-6 bg-white border border-slate-400 rounded-2xl justify-self-end me-5 absolute top-2 right-0 translate-x-6 z-20"
      >
        <div class="overflow-hidden rounded-xl h-full w-full">
          <img
            :src="props.images[1]"
            :alt="props.name"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 px-2 -translate-y-5 z-40 text-nowrap"
      ref="descriptionSelector"
    >
      <h2
        class="font-semibold bg-slate-100/70 rounded-full w-fit px-2 text-base text-nowrap lg:text-xl"
      >
        {{ props.name }}
      </h2>
      <p class="text-xs lg:text-sm">{{ props.description }}</p>
    </div>
  </div>
</template>

<style></style>
