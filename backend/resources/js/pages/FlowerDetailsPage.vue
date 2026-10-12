<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFlowerStore } from '../stores/flowers';

const store = useFlowerStore();
const { selectedFlower } = storeToRefs(store);
</script>

<template>
    <main
        v-if="selectedFlower"
        class="flower-detail-page"
    >
        <button
            class="back-btn"
            @click="store.closeFlower"
        >
            ← Back to Flowers
        </button>

        <section class="detail-layout">
            <div class="detail-image">
                <img
                    :src="'/' + selectedFlower.image"
                    :alt="selectedFlower.name"
                >
            </div>

            <div
                class="detail-content"
                :class="selectedFlower.id % 2 === 1 ? 'burgundy-detail' : 'black-detail'"
            >
                <span class="detail-category">
                    {{ selectedFlower.category }}
                </span>

                <h1>{{ selectedFlower.name }}</h1>

                <p class="detail-scientific">
                    {{ selectedFlower.scientificName }}
                </p>

                <div class="detail-section">
                    <h2>About the Flower</h2>
                    <p>{{ selectedFlower.definition }}</p>
                </div>

                <div class="detail-section">
                    <h2>Flower Care Guide</h2>
                    <p>{{ selectedFlower.care }}</p>
                </div>

                <button
                    class="favorite-btn"
                    @click="store.toggleFavorite(selectedFlower)"
                >
                    {{
                        selectedFlower.favorite
                            ? '♥ Remove from Favorites'
                            : '♡ Add to Favorites'
                    }}
                </button>
            </div>
        </section>
    </main>
</template>
