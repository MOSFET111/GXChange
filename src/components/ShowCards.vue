<script setup>
    import Card from '@/components/Card.vue'
    import { ref } from 'vue';

    defineProps({
        limit:{
            type:Number,
            default: 3,
        },
    })
</script>


<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card v-for="(_, i) in Array.from({ length: limit })" :key="i" />
    </div>
</template>

<style scoped>
</style>

<style scoped>
</style>