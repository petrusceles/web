<script setup>
import gsap from "gsap";

const leftSelector = ref();
const middleSelector = ref();
const rightSelector = ref();

const animation = computed(() => {
  const val = gsap.timeline({ paused: true });
  val.from(middleSelector.value, {
    scale: 0,
    autoAlpha: 0,
    duration: 1,
    ease: "back.out(1.2)",
  });

  val.from(
    leftSelector.value?.children,
    {
      x: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "back.out(1.2)",
      stagger: 0.2,
    },
    "<0.4"
  );
  val.from(
    rightSelector.value.children,
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "back.out(1.2)",
      stagger: 0.1,
    },
    "<0.2"
  );
  return val;
});

defineExpose({
  animation,
});
</script>
<template>
  <div
    class="flex flex-col place-content-center gap-5 items-center lg:flex-row max-w-[36rem] lg:max-w-4xl"
  >
    <div
      ref="leftSelector"
      class="grid grid-cols-1 content-center w-full justify-items-center lg:justify-items-end"
    >
      <span class="font-serif text-end text-8xl" style="line-height: 4rem"
        >Celes</span
      >
      <span
        class="text-lg tracking-widest font-extralight text-slate-950 text-center lg:text-end"
        >Petrus Caelestinus Pratama Prihantoro</span
      >
    </div>
    <div class="flex-shrink z-10" ref="middleSelector">
      <div
        class="h-56 w-56 rounded-full bg-slate-100 overflow-hidden p-1 border-slate-950 border"
      >
        <img
          src="/img/profile1.jpeg"
          alt="Celes Photo"
          class="object-cover h-full w-full rounded-full"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-2" ref="rightSelector">
      <div>App Developer based on Indonesia</div>
      <div
        class="font-light leading-relaxed tracking-widest w-full relative h-fit text-justify text-xs"
      >
        Empowered by software and driven by vision, I strive to create
        innovative solutions that transform challenges into opportunities for a
        better worl<span class="relative"
          >d
          <div
            class="h-6 w-6 absolute bg-slate-950 rounded-full bottom-0 right-0 translate-x-[150%] translate-y-1/2"
          ></div>
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>
