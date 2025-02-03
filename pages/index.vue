<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const aboutSelector = ref();
const expertiseSelector = ref();
const projectSelector = ref();
const footerSelector = ref();
onMounted(() => {
  const selectors = [
    aboutSelector.value,
    expertiseSelector.value,
    projectSelector.value,
    footerSelector.value,
  ];
  const sections = ["#about", "#expertise", "#project", "#footer"];
  const starts = [
    "top-=100px center",
    "top+=50px center",
    "top+=100px center",
    "top-=250px center",
  ];
  const ends = [
    "bottom center",
    "bottom center",
    "bottom center",
    "bottom center",
  ];

  for (let i = 0; i < selectors.length; i++) {
    const section = sections[i];
    gsap.set(section, { alpha: 0 });
    ScrollTrigger.create({
      trigger: section,
      start: starts[i],
      end: ends[i],
      scrub: true,
      onEnter: () => {
        gsap.set(section, { alpha: 1 });
        gsap.add(selectors[i]?.animation?.play(), "<0.1");
      },
    });
  }
});
</script>
<template>
  <div
    class="pb-24 text-slate-800 px-12 grid grid-cols-1 gap-16 max-w-[45rem] lg:max-w-[55rem] justify-items-center content-center lg:gap-20"
  >
    <div class="h-20 lg:h-12"></div>
    <section id="about">
      <V2About ref="aboutSelector" />
    </section>
    <section id="expertise">
      <V2Expertise ref="expertiseSelector" />
    </section>
    <section id="project">
      <V2Project ref="projectSelector" />
    </section>
    <section id="footer">
      <V2Footer ref="footerSelector" />
    </section>
  </div>
</template>

<style></style>
