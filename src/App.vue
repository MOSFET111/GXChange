<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
import { ref } from 'vue';

// State for sidebar
const isSidebarOpen = ref(false); // Default to false for small/medium screens

// Function to toggle sidebar
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <head>
    <link href="/src/styles.css" rel="stylesheet">
  </head>
  <div class="h-screen flex">
    <!-- Nav Component -->
    <Nav 
      :isSidebarOpen="isSidebarOpen"
      :toggleSidebar="toggleSidebar"
      :class="[
        'w-[250px] h-screen bg-gray-800 text-white fixed left-0 top-0 transition-transform duration-300 transform',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full', // Slide in/out
        'lg:translate-x-0 lg:relative', // Always visible on large screens
      ]"
    />
    
    <!-- Main Content -->
    <div 
      :class="[
        'p-5 transition-all duration-300 flex-1 w-full',
        isSidebarOpen ? 'lg:ml-[250px]' : 'lg:ml-0' // Adjust margin for large screens
      ]"
    >
      <!-- Toggle Button for Small Screens -->
      <button 
        @click="toggleSidebar"
        class="lg:hidden fixed top-4 left-4 pt-2 rounded-lg z-10 bg-transparent  text-4xl"
      >
        ☰
      </button>
      
      <!-- RouterView for rendering pages -->
      <RouterView />
    </div>
  </div>
</template>

<style>
/* Ensure the main content doesn't overflow */
div {
  overflow-x: hidden;
}
</style>