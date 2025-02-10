<script setup>
import { useRoute } from 'vue-router';

// Props for controlling the sidebar state
const props = defineProps({
    isSidebarOpen: {
        type: Boolean,
        required: true,
    },
    toggleSidebar: {
        type: Function,
        required: true,
    },
});

const route = useRoute();

const isActiveLink = (routePath) => {
    return route.path === routePath;
};
</script>

<template>
    <nav 
        class="bg-zinc-800 w-[250px] h-screen text-center fixed left-0 top-0 pt-8 flex flex-col justify-between"
    >
        <!-- Navigation Links -->
        <div>
            <ul>
                <li 
                    v-for="link in [
                        { path: '/', name: 'Home' },
                        { path: '/About', name: 'About' },
                        { path: '/ContactUs', name: 'Contact Us' },
                        { path: '/Market', name: 'Market' },
                        { path: '/Listings', name: 'Listings' },
                        { path: '/AccountDetails', name: 'Account Details' }
                    ]"
                    :key="link.path"
                    :class="[
                        'py-6 transition-all', 
                        isActiveLink(link.path) ? 'border-t border-b text-white font-bold' : 'hover:border-t hover:border-b text-gray-400'
                    ]"
                >
                    <RouterLink :to="link.path">{{ link.name }}</RouterLink>
                </li>
            </ul>
        </div>

        <!-- Toggle Button at the Bottom (Hidden on Large Screens) -->
        <button 
            @click="toggleSidebar"
            class="p-4 text-white hover:bg-zinc-600 transition-colors text-5xl lg:hidden"
        >
            {{ isSidebarOpen ? '◄' : '►' }} <!-- Toggle Icon -->
        </button>
    </nav>
</template>

<style scoped>
nav {
    z-index: 999;
}
</style>