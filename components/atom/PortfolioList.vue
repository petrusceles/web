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
    class="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32 h-full"
  >
    <AtomPortfolioCard
      v-for="entity in props.data?.entities"
      ref="portfolioCards"
      :entity="entity"
    />
  </div>
</template>

<style></style>
