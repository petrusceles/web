<script setup>
import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

const expertiseCardsParent = ref();
const expertiseCards = ref();

const datas = ref([
  {
    id: 1,
    title: "AI Application",
    cta: "Unleash the Potential of Intelligence",
    description: [
      {
        text: "Leveraging the power of artificial intelligence",
        bold: true,
      },
      {
        text: "to transform ideas into innovative solutions—join me in turning possibilities into reality!",
        bold: false,
      },
    ],
    icon: "BrainCircuit",
  },
  {
    id: 2,
    title: "Web Application",
    cta: "Explore My Web Applications",
    description: [
      {
        text: "Transforming ideas into",
        bold: false,
      },
      {
        text: "dynamic web applications",
        bold: true,
      },
      {
        text: "that not only meet user needs but also elevate their experience—let's build something amazing together!",
        bold: false,
      },
    ],
    icon: "PictureInPicture2",
  },
  {
    id: 3,
    title: "Mobile Application",
    cta: "Check Out My Mobile Apps",
    description: [
      {
        text: "Creating intuitive mobile applications ",
        bold: true,
      },
      {
        text: "that connect users with technology seamlessly—let's collaborate to bring your vision to life on every device!",
        bold: false,
      },
    ],
    icon: "TabletSmartphone",
  },
]);

const expertises = ref();

const animation = computed(() => {
  const val = gsap.timeline();
  for (let i = 0; i < expertiseCardsParent.value?.length; i++) {
    val.from(
      expertiseCardsParent.value[i],
      {
        duration: 0.3,
        ease: "power1.out",
        autoAlpha: 0,
        x: "-100",
      },
      "<0.1"
    );
    val.add(expertiseCards.value[i]?.animation, "<0.3");
  }
  return val;
});

defineExpose({
  animation,
});
</script>

<template>
  <!-- Main Content -->
  <div
    ref="expertises"
    class="grid grid-cols-1 gap-8 expertise-main-selector w-full lg:flex absolute left-1/2 -translate-x-1/2 px-10 xl:px-20 top-[55%] -translate-y-1/2"
  >
    <div
      ref="expertiseCardsParent"
      v-for="(data, index) in datas"
      :key="data?.id"
    >
      <AtomExpertiseCard
        ref="expertiseCards"
        :name="data?.icon"
        :id="data?.id"
        :cta="data?.cta"
        :description="data?.description"
        :title="data.title"
        :index="index"
      />
    </div>
  </div>
</template>

<style></style>
