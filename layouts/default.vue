<script setup></script>

<template>
  <div
    class="flex justify-center my-10 text-sm gap-5 items-center lg:justify-end container mx-auto"
  >
    <div
      class="flex gap-10 rounded-full border border-slate-950 px-6 py-3 font-light items-center navigation bg-slate-50 shadow-md"
    >
      <NuxtLink to="/"> Home </NuxtLink>

      <NuxtLink>Portfolio</NuxtLink>
      <NuxtLink>About</NuxtLink>
    </div>
  </div>

  <slot></slot>
</template>

<style scoped>
.navigation * {
  @apply min-w-20 rounded-full border text-center py-1.5 text-sm border-transparent text-slate-500;
}

.router-link-active {
  @apply border-slate-950 text-slate-950;
}
</style>
