<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();


const itemId = route.params.id;


console.log('Item ID:', itemId);
</script>

<template>
  <div>
    <h1>Item Details</h1>
    <p>Displaying details for item with ID: {{ itemId }}</p>
  </div>
</template>