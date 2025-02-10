<script setup>
import valor from '@/assets/valor.jpg'; // Make sure the file exists in the correct path
</script>

<template>
    <div class="card w-full p-6 my-6 border rounded-xl sm:w-fit md:w-90">
        <!-- Correct image rendering -->
        <img :src="valor" alt="Valorant Account" class="w-full h-auto rounded-lg"/>

        <footer>
            <p class="text-2xl text-green-400 border-b pb-3 text-center">
                Reaver Deimer
            </p>
            <p class="pt-3">
                Valorant account with Reaver collection
            </p>
            <div class="relative pt-4">
                <RouterLink to="/details" class="hover:bg-transparent hover:border text-xl absolute bottom-2 text-green-400 rounded-xl">
                    Details
                </RouterLink>
                <p class="text-end text-xl text-green-400 pt-6 pb-2">
                    50$
                </p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.card {
    max-width: 100%; /* Ensure the card doesn't exceed the screen width */
}
</style>
