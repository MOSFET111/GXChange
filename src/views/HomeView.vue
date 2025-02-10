<script setup>
import Hero from '@/components/Hero.vue';
import ShowCards from '@/components/ShowCards.vue';
</script>

<template>
  <div>
    <Hero />
    <ShowCards :limit="3" />
  </div>
</template>