<script setup>
const { $gsap: gsap } = useNuxtApp();

const ctaSelector = ref();
const getInTouchSelector = ref();
const titleSelector = ref();
const layerSelector = ref();
const rightsSelector = ref();
const iconSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline();

  val.from(ctaSelector.value?.children, {
    x: "100",
    duration: 1,
    ease: "back.out(1.2)",
    autoAlpha: 0,
    stagger: 0.2,
  });

  val.from(
    getInTouchSelector.value,
    {
      y: "100",
      duration: 1,
      autoAlpha: 0,
      ease: "back.out(1.2)",
    },
    "<0.2"
  );

  val.from(
    titleSelector.value,
    {
      y: 50,
      duration: 1,
      autoAlpha: 0,
      ease: "back.out(1.2)",
      stagger: 0.1,
    },
    "<0.2"
  );

  val.from(
    layerSelector.value,
    {
      scale: 0,
      duration: 1,
      autoAlpha: 0,
      ease: "back.out(1.2)",
    },
    "<0.2"
  );

  val.from(
    iconSelector.value?.children,
    {
      y: 10,
      duration: 1,
      autoAlpha: 0,
      ease: "back.out(1.2)",
      stagger: 0.1,
    },
    "<0.2"
  );

  val.from(
    rightsSelector.value,
    {
      y: -10,
      duration: 0.3,
      autoAlpha: 0,
      ease: "back.out(1.2)",
    },
    "<0.5"
  );
  return val;
});

const linkedinAnimation = computed(() => {
  return gsap.to(linkedinSelector.value, {
    y: -10,
    scale: 1.2,
    ease: "power3.inOut",
    duration: 0.3,
  });
});
const githubAnimation = computed(() => {
  return gsap.to(githubSelector.value, {
    y: -10,
    scale: 1.2,
    ease: "power3.inOut",
    duration: 0.3,
  });
});
const emailAnimation = computed(() => {
  return gsap.to(emailSelector.value, {
    y: -10,
    scale: 1.2,
    ease: "power3.inOut",
    duration: 0.3,
  });
});

const linkedinSelector = ref();
const githubSelector = ref();
const emailSelector = ref();

onMounted(() => {});

defineExpose({
  animation,
});
</script>
<template>
  <div
    class="grid grid-cols-1 gap-5 w-full justify-items-center py-16 lg:py-24"
  >
    <div class="lg:flex grid grid-cols-1 gap-8 justify-center">
      <h1
        class="grid grid-cols-1 w-full justify-items-center"
        ref="ctaSelector"
      >
        <span class="text-2xl lg:text-3xl font-bold text-stroke-3 text-white">
          Ready to Make a
        </span>
        <span class="text-4xl lg:text-5xl font-bold text-slate-950">
          Breakthrough?
        </span>
      </h1>
      <div
        class="flex items-center justify-center pb-6 pt-7 px-12 rounded-3xl border border-slate-400 relative"
        ref="getInTouchSelector"
      >
        <p
          class="absolute top-0 left-4 -translate-y-1/2 text-base lg:text-xl font-semibold bg-white rounded-full px-1"
          ref="titleSelector"
        >
          Get in Touch!
        </p>
        <span ref="iconSelector" class="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/celes-pratama/"
            target="_blank"
            rel="noopener noreferrer"
            ref="linkedinSelector"
            @mouseover="linkedinAnimation.play()"
            @mouseleave="linkedinAnimation.reverse()"
            class="cursor-pointer px-5"
          >
            <v-icon name="si-linkedin" class="icon w-8 lg:w-10 h-8 lg:h-10" />
          </a>
          <a
            href="https://github.com/petrusceles/"
            target="_blank"
            rel="noopener noreferrer"
            ref="githubSelector"
            @mouseover="githubAnimation.play()"
            @mouseleave="githubAnimation.reverse()"
            class="cursor-pointer px-5"
          >
            <v-icon name="si-github" class="icon w-8 lg:w-10 h-8 lg:h-10" />
          </a>
          <a
            href="mailto:petrusprihantoro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            ref="emailSelector"
            @mouseover="emailAnimation.play()"
            @mouseleave="emailAnimation.reverse()"
            class="cursor-pointer px-5"
          >
            <v-icon name="si-maildotru" class="icon w-8 lg:w-10 h-8 lg:h-10" />
          </a>
        </span>

        <div
          ref="layerSelector"
          class="h-6 w-[80%] rounded-lg bg-slate-100 absolute -z-10 -skew-x-[30deg] bottom-[18%]"
        ></div>
      </div>
    </div>
    <p class="text-xs text-center" ref="rightsSelector">
      © 2025 Celes. Designed and Developed by Celes.
    </p>
  </div>
</template>

<style scoped>
.text-stroke-3 {
  text-shadow: -1px -1px 0 #020617, 1px -1px 0 #020617, -1px 1px 0 #020617,
    1px 1px 0 #020617;
}
</style>
