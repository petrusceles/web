<script setup>
// import gsap from "gsap";
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
} = useNuxtApp();

const portfolioContainer = ref();
const footerContainer = ref();
const layoutOrder = computed(() => {
  return [portfolioContainer.value, footerContainer.value];
});

const portfolioSelector = ref();
const footerSelector = ref();

const initialAnimationEachSection = computed(() => {
  return [portfolioSelector.value?.animation, footerSelector.value?.animation];
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
    wheelSpeed: 0.1,
    onDown: () => {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value + 1, 1);
    },
    onUp: () => {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value - 1, -1);
    },
    tolerance: 10,
    preventDefault: true,
  });
  gotoSection(0, 1);
});
</script>
<template>
  <Head>
    <Title>Portfolio</Title>
    <Meta name="description" content="Portfolio - Celes" />
  </Head>
  <div>
    <section
      class="portfolio-container px-10 items-center relative bg-white"
      ref="portfolioContainer"
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
        style="z-index: 9999"
        class="prevent-select lg:text-9xl font-semibold text-8xl text-end md:text-center text-slate-950/10 h-fit absolute top-[15%] sm:top-[25%] left-1/2 -translate-x-1/2 md:text-nowrap px-10 xl:px-20"
      >
        Portfolio
      </h2>
      <div class="mx-auto container px-10">
        <Portfolio ref="portfolioSelector" />
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

<style scoped>
section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
}
</style>
