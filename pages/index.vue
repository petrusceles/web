<script setup></script>
<template>
  <div
    class="pb-24 text-slate-800 px-12 grid grid-cols-1 gap-16 max-w-[45rem] lg:max-w-[55rem] justify-items-center content-center lg:gap-20"
  >
    <div class="h-28"></div>
    <section id="about" class="grid grid-cols-1 gap-6">
      <V2About />
      <V2History />
    </section>
    <section id="expertise" class="grid grid-cols-1 gap-6">
      <V2Expertise />
    </section>
    <section id="project" class="grid grid-cols-1 gap-6">
      <V2Project />
    </section>
    <V2Footer />
  </div>
</template>

<style></style>
