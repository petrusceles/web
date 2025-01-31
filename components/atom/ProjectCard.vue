<script setup>
const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  stack: {
    required: true,
    type: String,
  },
  images: {
    required: true,
    type: Array,
  },
  url: {
    type: String,
  },
});
</script>
<template>
  <div class="grid grid-cols-1 w-72 min-w-60 lg:w-80">
    <div class="w-full grid grid-cols-1 relative pb-8">
      <div
        class="h-32 w-52 lg:h-44 lg:w-64 translate-y-7 -skew-x-12 bg-white border border-slate-400 rounded-2xl justify-self-start me-5 z-30"
      ></div>
      <div
        class="h-32 w-52 lg:h-44 lg:w-64 -skew-x-6 bg-white border border-slate-400 rounded-2xl justify-self-end me-5 absolute top-2 right-0 translate-x-6 z-20"
      ></div>

      <div
        class="rounded-2xl -skew-x-6 border border-slate-400 px-3 text-center py-1.5 w-fit absolute z-40 right-4 bottom-1/2 translate-y-1/2 bg-slate-100 border-dashed"
      >
        <p class="text-xs font-light lg:text-sm">{{ props.stack }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 px-2 -translate-y-5 z-40">
      <h2
        class="font-semibold bg-white w-fit px-2 text-base text-nowrap lg:text-xl"
      >
        {{ props.name }}
      </h2>
      <p class="text-xs lg:text-sm">{{ props.description }}</p>
    </div>
  </div>
</template>

<style></style>
