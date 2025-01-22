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

const selectedWorksSelector = ref();
const selectedWorksCurrentIndex = ref(0);
const selectedWorksAnimating = ref(false);

const heroContainer = ref();
const expertiseContainer = ref();
const selectedWorksContainer = ref();
const footerContainer = ref();

const layoutOrder = computed(() => {
  return [
    heroContainer.value,
    expertiseContainer.value,
    selectedWorksContainer.value,
    footerContainer.value,
  ];
});

// const layoutOrder = [
//   ".hero-container",
//   ".expertise-container",
//   ".selected-works-container",
//   ".footer-container",
// ];
const selectedWorksClamp = computed(() => {
  return gsapOriginal.utils.clamp(
    -1,
    selectedWorksSelector.value?.workCards?.length
  );
});

const selectedWorksGoToSection = (index, direction) => {
  index = selectedWorksClamp.value(index);
  let fromTop = direction === -1;
  if (index > selectedWorksSelector.value?.workCards?.length - 1 || index < 0) {
    globalObserver.value?.enable();
    selectedWorksObserver.value?.disable();
    if (fromTop) {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value + 1, 1);
    } else {
      !globalAnimating.value && gotoSection(globalCurrentIndex.value - 1, -1);
    }
    return;
  }
  selectedWorksAnimating.value = true;

  let tl = gsap.timeline({
    onComplete: () => {
      selectedWorksAnimating.value = false;
      // selectedWorksScrollTimeout.value.restart(true);
    },
  });
  if (index >= 0) {
    if (fromTop) {
      tl.add(
        selectedWorksSelector.value?.workCards[selectedWorksCurrentIndex.value]
          ?.timeLineOut
      );
      tl.add(selectedWorksSelector.value?.workCards[index]?.timeLineIn, "<0.1");
    } else {
      tl.add(
        selectedWorksSelector.value?.workCards[selectedWorksCurrentIndex.value]
          ?.timeLineInReverse
      );
      tl.add(
        selectedWorksSelector.value?.workCards[index]?.timeLineOutReverse,
        "<0.1"
      );
    }
  }

  selectedWorksCurrentIndex.value = index;
};

const heroSelector = ref();
const expertiseSelector = ref();
const footerSelector = ref();

const initialAnimationEachSection = computed(() => {
  return [
    heroSelector.value?.animation,
    expertiseSelector.value?.animation,
    selectedWorksSelector.value?.workCards[selectedWorksCurrentIndex.value]
      ?.timeLineIn,
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
  tl.add(initialAnimationEachSection.value[index], "<0.3");

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

const selectedWorksObserver = ref();

const globalObserver = ref();

onMounted(() => {
  globalCurrentIndex.value = -1;
  gsap.set(layoutOrder.value, {
    alpha: 0,
  });
  selectedWorksObserver.value = Observer.create({
    target: ".selected-works-container",
    type: "wheel, touch, pointer",
    wheelSpeed: 0.1,
    onDown: () => {
      !selectedWorksAnimating.value &&
        !globalAnimating.value &&
        selectedWorksGoToSection(selectedWorksCurrentIndex.value + 1, -1);
    },
    onUp: () => {
      !selectedWorksAnimating.value &&
        !globalAnimating.value &&
        selectedWorksGoToSection(selectedWorksCurrentIndex.value - 1, 1);
    },
    tolerance: 10,
    preventDefault: true,
  });

  globalObserver.value = Observer.create({
    target: window,
    type: "wheel, touch, pointer",
    wheelSpeed: 0.1,
    onDown: () => {
      if (globalCurrentIndex.value == 2 && globalObserver.value?.isEnabled) {
        globalObserver.value?.disable();
        selectedWorksObserver.value?.enable();
      } else {
        !globalAnimating.value && gotoSection(globalCurrentIndex.value + 1, 1);
      }
    },
    onUp: () => {
      if (globalCurrentIndex.value == 2 && globalObserver.value?.isEnabled) {
        globalObserver.value?.disable();
        selectedWorksObserver.value?.enable();
      } else {
        !globalAnimating.value && gotoSection(globalCurrentIndex.value - 1, -1);
      }
    },
    tolerance: 10,
    preventDefault: true,
  });
  gotoSection(0, 1);
});
</script>

<template>
  <Head>
    <Title>Home</Title>
    <Meta name="description" content="Home - Celes" />
  </Head>
  <div class="container-wrapper">
    <section class="flex items-center relative bg-white" ref="heroContainer">
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 top-0 -translate-x-1/2"
      ></div>
      <div
        style="height: 1px"
        class="bg-slate-950 w-full absolute left-1/2 bottom-0 -translate-x-1/2"
      ></div>
      <div class="mx-auto container px-10">
        <HomeHero ref="heroSelector" />
      </div>
    </section>

    <section
      class="expertise-container flex items-center relative bg-white"
      ref="expertiseContainer"
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
        class="prevent-select text-slate-950/10 z-50 absolute lg:text-9xl font-semibold text-8xl left-0 top-[15%] lg:top-[30%] px-20"
      >
        Areas of Expertise
      </h2>
      <HomeExpertise ref="expertiseSelector" />
    </section>

    <section
      class="selected-works-container w-full flex items-center relative bg-white"
      ref="selectedWorksContainer"
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
        class="prevent-select lg:text-9xl font-semibold text-8xl text-end md:text-center text-slate-950/10 h-fit absolute z-10 top-[15%] sm:top-[25%] left-1/2 -translate-x-1/2 md:text-nowrap px-10 xl:px-20"
      >
        Selected Works
      </h2>
      <HomeSelectedWorks ref="selectedWorksSelector" />
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
