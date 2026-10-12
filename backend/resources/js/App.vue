<script setup lang="ts">
import { onMounted } from 'vue';
import { useFlowerStore } from './stores/flowers';
import HomePage from './pages/HomePage.vue';
import GalleryPage from './pages/GalleryPage.vue';
import FlowerDetailsPage from './pages/FlowerDetailsPage.vue';

const store = useFlowerStore();

onMounted(() => {
    void store.fetchFlowers();
});
</script>

<template>
    <div id="bloom-app">
        <HomePage v-if="store.currentPage === 'home'" />
        <GalleryPage v-else-if="store.currentPage === 'gallery'" />
        <FlowerDetailsPage v-else-if="store.currentPage === 'details'" />
    </div>
</template>
