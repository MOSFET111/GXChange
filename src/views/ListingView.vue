<script setup>
import ShowCards from '@/components/ShowCards.vue';

</script>

<template>
  <div class="">
    <h1 class=" sm:text-5xl max-[501px]:text-5xl text-green-500 pb-5 pl-7 pt-8">
      Accounts you Listed for selling
    </h1>

    <ShowCards :limit="6" />
  </div>
</template>