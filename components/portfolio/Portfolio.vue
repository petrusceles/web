<script setup>
import gsap from "gsap";
import PortfolioList from "~/components/atom/PortfolioList.vue";

const route = useRoute();
let options = reactive([
  {
    title: "AI Application",
    active: false,
    entities: [
      {
        name: "Mobile Automatic Object Blurring",
        description: "Advancing Lightweight Model for Mobile App",
        assets: [
          "/img/appobjectblur/page1.jpeg",
          "/img/appobjectblur/page2.jpeg",
          "/img/appobjectblur/page3.png",
        ],
        url: "https://github.com/petrusceles/YOLOv5-Mobile-Automatic-Object-Blurring-App.git",
      },
    ],
  },
  {
    title: "Web Application",
    active: false,
    entities: [
      {
        name: "MinerbaOne",
        description: "Mineral & Coal Mining Superapp",
        assets: [
          "/img/minerbaone/page1.png",
          "/img/minerbaone/page1.png",
          "/img/minerbaone/page1.png",
        ],
      },
      {
        name: "Naqos",
        description: "Boarding House Rental Platform",
        assets: [
          "/img/naqos/page1.png",
          "/img/naqos/page2.png",
          "/img/naqos/page3.png",
        ],
        url: "https://github.com/petrusceles/Naqos-FE.git",
      },
    ],
  },
  {
    title: "Mobile Application",
    active: false,
    entities: [
      {
        name: "ABTechnology",
        description: "Programmable CDI for Motorcycles",
        assets: [
          "/img/abtechnology/page1.png",
          "/img/abtechnology/page2.png",
          "/img/abtechnology/page3.png",
        ],
      },
    ],
  },
]);
const isSelectorAnimating = ref();
const optionsSelector = ref();
const currentIndex = ref(1);

const animate = (index) => {
  isSelectorAnimating.value = true;
  const tl = gsap.timeline({
    onComplete: () => {
      isSelectorAnimating.value = false;
    },
  });

  for (let i = 0; i < options.length; i++) {
    if (!options[i].active && index == i) {
      // -translate-y-4 text-lg font-semibold leading-5
      tl.to(
        optionsSelector.value[i],
        {
          y: -20,
          fontSize: "1.125rem",
          lineHeight: "1.25rem",
          fontWeight: 600,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: () => {
            options[i].active = true;
          },
        },
        "<0.0"
      );
    } else if (options[i].active && i != index) {
      isSelectorAnimating.value = true;
      tl.to(
        optionsSelector.value[i],
        {
          y: 0,
          fontSize: "0.75rem",
          lineHeight: "1rem",
          fontWeight: 300,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: () => {
            options[i].active = false;
          },
        },
        "<0.0"
      );
    }
  }
  tl.fromTo(
    portfolioParentSelector.value[currentIndex.value],
    {
      alpha: 1,
      y: 0,
    },
    {
      alpha: 0,
      duration: 0.3,
      y: -100,
      ease: "back.in(1.2)",
    },
    "<0.0"
  );

  tl.add(portfolioListSelector.value[index]?.animation, "<0.1");
  tl.to(
    portfolioParentSelector.value[index],
    {
      autoAlpha: 1,
      duration: 0.2,
      y: 0,
    },
    "<0.0"
  );

  currentIndex.value = index;

  return tl;
};

const animation = computed(() => {
  const tl = gsap.timeline({
    paused: true,
    onStart: () => {
      console.log("START");
    },
  });
  tl.to(
    optionsSelector.value[currentIndex.value],
    {
      y: -20,

      fontSize: "1.125rem",
      lineHeight: "1.25rem",
      fontWeight: 600,
      duration: 0.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        options[currentIndex.value].active = true;
      },
    },
    "<0.0"
  );
  tl.add(portfolioListSelector.value[currentIndex.value]?.animation, "<0.1");
  tl.to(
    portfolioParentSelector.value[currentIndex.value],
    {
      autoAlpha: 1,
      duration: 0.2,
      y: 0,
    },
    "<0.0"
  );
  return tl;
});

const portfolioListSelector = ref();
const portfolioParentSelector = ref();

const types = {
  ai: 0,
  web: 1,
  mobile: 2,
};
onMounted(() => {
  gsap.set(portfolioParentSelector.value, {
    alpha: 0,
  });
  currentIndex.value = types[route.query?.type] ?? 1;
  // animate(1);
});

defineExpose({
  animation,
});
</script>
<template>
  <div
    v-for="(option, index) in options"
    class="absolute top-[45%] -translate-y-[50%] left-1/2 -translate-x-1/2 lg:top-[52%]"
    ref="portfolioParentSelector"
  >
    <PortfolioList ref="portfolioListSelector" :data="option" />
  </div>

  <div
    class="h-10 bg-white w-full gap-3 lg:gap-6 text-xs lg:text-sm flex justify-center px-10 text-center items-center absolute bottom-[15%] left-1/2 -translate-x-1/2 top-1/2 translate-y-60 lg:bottom-1/4"
  >
    <div
      class="grid-cols-1 gap-2 grid justify-items-center cursor-pointer"
      ref="optionsSelector"
      v-for="(option, index) in options"
      @click="
        () => {
          !isSelectorAnimating && animate(index);
        }
      "
    >
      <div class="">{{ option.title }}</div>
      <div
        class="w-full h-2 rounded border-slate-950 bg-slate-200 border-dashed border"
      ></div>
    </div>
  </div>
</template>

<style></style>
