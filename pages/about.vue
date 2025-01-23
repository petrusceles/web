<script setup>
import { gsap as gsapOriginal } from "gsap";
// import { Observer } from "gsap/Observer";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(Observer);
// gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(ScrollTrigger);

const {
  $gsap: gsap,
  $ScrollTrigger: ScrollTrigger,
  $Observer: Observer,
  $ScrollToPlugin: ScrollToPlugin,
  $clamp: clamp,
} = useNuxtApp();

const aboutContainer = ref();
const historyContainer = ref();
const footerContainer = ref();

const layoutOrder = computed(() => {
  return [aboutContainer.value, historyContainer.value, footerContainer.value];
});

const aboutSelector = ref();
const historySelector = ref();
const footerSelector = ref();

const initialAnimationEachSection = computed(() => {
  return [
    aboutSelector.value?.animation,
    historySelector.value?.animation,
    footerSelector.value?.animation,
  ];
});

const globalAnimating = ref(false);
const globalCurrentIndex = ref(-1);
const globalClamp = computed(() => {
  return gsapOriginal.utils.clamp(0, layoutOrder.value?.length);
});

function gotoSection(index, direction) {
  globalAnimating.value = true;

  index = globalClamp.value(index);

  let fromTop = direction === -1,
    dFactor = fromTop ? -1 : 1,
    tl = gsap.timeline({
      onComplete: () => {
        globalAnimating.value = false;
      },
    });

  if (
    (fromTop && globalCurrentIndex.value === index) ||
    (!fromTop && globalCurrentIndex.value === layoutOrder.value?.length - 1)
  ) {
    return;
  }

  gsap.set(layoutOrder.value[index], {
    zIndex: 1,
  });
  gsap.set(layoutOrder.value[globalCurrentIndex.value], {
    zIndex: 0,
  });
  tl.fromTo(
    layoutOrder.value[index],
    {
      yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
    },
    {
      autoAlpha: 1,
      yPercent: 0,
      duration: 1,
      ease: "power2.inOut",
    }
  );

  tl.add(initialAnimationEachSection.value[index]?.play(), "<0.3");

  if (globalCurrentIndex.value >= 0) {
    // The first time this function runs, current is -1
    tl.to(
      layoutOrder.value[globalCurrentIndex.value],
      {
        autoAlpha: 0,
        yPercent: (i) => (i ? 100 * dFactor : -100 * dFactor),
        duration: 0.75,
        ease: "power2.inOut",
      },
      "<0.2"
    );
  }

  globalCurrentIndex.value = index;
}

const globalObserver = ref();

onMounted(() => {
  gsap.set(layoutOrder.value, {
    alpha: 0,
  });
  globalObserver.value = Observer.create({
    target: window,
    type: "wheel, touch, pointer",
    wheelSpeed: -1,
    onDown: () => {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value - 1, -1);
    },
    onUp: () => {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value + 1, 1);
    },
    tolerance: 10,
    preventDefault: true,
  });
  gotoSection(0, 1);
});
</script>

<template>
  <Head>
    <Title>About</Title>
    <Meta name="description" content="About Me - Celes" />
  </Head>
  <div class="container-wrapper">
    <section
      class="flex items-center justify-center relative bg-white"
      ref="aboutContainer"
    >
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
      ></div>
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
      ></div>
      <h2
        class=" prevent-select pointer-events-none text-slate-950/10 z-50 absolute lg:text-9xl font-semibold text-8xl left-0 lg:left-1/2 top-[15%] px-20"
      >
        About
      </h2>
      <div class="mx-auto container px-10 flex justify-center">
        <About ref="aboutSelector" />
      </div>
    </section>

    <section
      class="flex items-center justify-center relative bg-white"
      ref="historyContainer"
    >
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
      ></div>
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
      ></div>
      <h2
        class="text-slate-950/10 z-50 absolute lg:text-9xl font-semibold text-8xl left-0 top-[15%] px-20"
      >
        History
      </h2>
      <div class="mx-auto container px-10 flex justify-center">
        <AboutHistory ref="historySelector" />
      </div>
    </section>

    <section
      class="footer-container px-10 flex items-center bg-white relative"
      ref="footerContainer"
    >
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
      ></div>
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
      ></div>

      <HomeFooter ref="footerSelector" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
}
</style>
