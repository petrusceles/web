<script setup>
import gsap from "gsap";

const props = defineProps({
  data: {
    required: true,
  },
});

const portfolioCards = ref();

const animation = computed(() => {
  const val = gsap.timeline();
  for (let i = 0; i < portfolioCards.value?.length; i++) {
    val.add(portfolioCards.value[i]?.animation, "<0.2");
  }
  return val;
});
defineExpose({
  animation,
});
</script>
<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-32 h-full pt-16 pb-12"
  >
    <AtomPortfolioCard
      v-for="entity in props.data?.entities"
      ref="portfolioCards"
      :entity="entity"
    />
  </div>
</template>

<style></style>
