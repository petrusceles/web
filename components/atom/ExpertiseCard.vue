<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";
import { AppWindow, ArrowRight, MoveRight, Proportions } from "lucide-vue-next";

const props = defineProps({
  firstTitle: {
    required: true,
    type: String,
  },
  secondTitle: {
    required: true,
    type: String,
  },
  id: {
    required: true,
  },
});

const isActive = ref(false);

const cardOuter = ref();

const cardTitle = ref();

const cardTitleNew = ref();

const cardIcon = ref();

const cardDesc = ref();

const iconDesc = ref();

const goButton = ref();

const goButtonAnimation = computed(() => {
  return gsap.to(goButton.value, {
    paused: true,
    scale: 0.95,
    duration: 0.2,
    // ease: "power1.in",
  });
});

const gsapAnimation = computed(() => {
  let timeLine = gsap.timeline({});
  timeLine.to(cardIcon.value, {
    duration: 0.2,
    rotation: "355",
    ease: "none",
    onStart: () => {
      isActive.value = true;
    },
  });
  timeLine.to(
    cardIcon.value,
    {
      autoAlpha: 0,
      duration: 0.2,
    },
    "<0.1"
  );
  timeLine.to(
    cardTitle.value,
    {
      duration: 0.2,
      autoAlpha: 0,
    },
    "<0.1"
  );
  timeLine.from(
    cardTitleNew.value,
    {
      duration: 1,
      autoAlpha: 0,
      x: "-50",
      ease: "back.out(1.7)",
    },
    "<0.1"
  );
  timeLine.from(
    cardDesc.value.children,
    {
      stagger: 0.2,
      autoAlpha: 0,
      y: "+200",
      ease: "back.out(1.7)",
      duration: 0.75,
    },
    "<0.2"
  );
  // timeLine.to(
  //   cardOuter.value,
  //   {
  //     height: "auto",
  //     duration: 0.75,
  //     ease: "back.out(1.2)",
  //   },
  //   "<0.2"
  // );
  timeLine.from(
    iconDesc.value,
    {
      autoAlpha: 0,
      y: "+200",
      ease: "back.out(1.7)",
      duration: 0.75,
    },
    "<0.6"
  );

  return timeLine;
});

defineExpose({
  gsapAnimation: gsapAnimation,
  id: props.id,
  element: cardOuter,
  nonActivate: () => {
    isActive.value = false;
  },
});
</script>
<template>
  <div
    @click="onClick"
    ref="cardOuter"
    :class="[
      !isActive && ' hover:scale-95 cursor-pointer border-slate-950 h-full',
      isActive && 'border-slate-950',
    ]"
    class="border duration-300 ease-out w-full rounded-3xl flex relative px-6 pt-7 pb-5 items-center justify-evenly gap-5 bg-white/60"
  >
    <div
      ref="cardIcon"
      class="flex items-center border-slate-950 justify-center border rounded-full w-fit p-3 absolute right-0 translate-x-1/3 top-0 -translate-y-1/3 bg-white ease-in-out duration-200"
    >
      <Proportions :stroke-width="1" />
    </div>

    <div
      class="text-2xl px-1 left-9 top-0 -translate-y-1/2 absolute font-semibold rounded-full text-nowrap sm:text-3xl lg:text-4xl"
      :class="!isActive && 'hidden'"
      ref="cardTitleNew"
    >
      {{ props.firstTitle }} {{ props.secondTitle }}
      <div
        class="bg-white translate-x-1/2 w-[100%] right-1/2 h-5 top-1/2 -translate-y-1/3 rounded-full absolute -z-10"
      ></div>
    </div>
    <div
      class="flex-col flex font-semibold leading-snug absolute top-1/2 -translate-y-1/2 z-50 w-fit right-1/2 translate-x-1/2 -space-y-1"
      ref="cardTitle"
    >
      <span class="text-lg lg:text-xl w-fit z-10 bg-white rounded-full">{{
        props.firstTitle
      }}</span>
      <span
        class="text-2xl lg:text-2xl bg-white ps-5 pb-2 pe-2 lg:pe-1 rounded-full"
        >{{ props.secondTitle }}</span
      >
    </div>
    <div class="grid grid-cols-1 gap-5" ref="cardDesc">
      <p
        class="text-xs lg:text-base font-light leading-relaxed text-justify"
        :class="!isActive && 'hidden'"
      >
        Transforming ideas into
        <span class="font-bold text-lg leading-4"
          >Dynamic Web Applications</span
        >
        that not only meet user needs but also elevate their experience. Let's
        build something amazing together!
      </p>
      <button
        :class="[!isActive && 'hidden']"
        ref="goButton"
        @mouseenter="goButtonAnimation?.play()"
        @mouseleave="goButtonAnimation?.reverse()"
        class="rounded-full border border-slate-950 font-light flex items-center w-fit px-6 py-3 text-sm gap-3 bg-white lg:text-lg"
      >
        <span style="transform: translateY(-7%)"
          >Explore My Web Applications</span
        >
        <ArrowRight size="20px" />
      </button>
    </div>
    <div
      style="bottom: -35%"
      class="absolute right-0 translate-x-1/2 -z-10"
      :class="!isActive && 'hidden'"
      ref="iconDesc"
    >
      <AppWindow
        :stroke-width="0.1"
        size="60%"
        fill="#f1f5f9"
        color="black"
        class="opacity-95"
      />
    </div>
  </div>
</template>

<style></style>
