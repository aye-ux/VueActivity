<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFlowerStore } from '../stores/flowers';
import FlowerCard from '../components/FlowerCard.vue';

const store = useFlowerStore();
const {
    search,
    selectedCategory,
    showFavorites,
    filteredFlowers,
    favoriteCount,
    loading,
    error,
} = storeToRefs(store);
</script>

<template>
    <div class="gallery-page">
        <nav class="top-nav">
            <button
                type="button"
                class="brand landing-brand"
                @click="store.goHome"
            >
                <span class="brand-flower">
                    <img
                        src="/images/icon.jpg"
                        alt="BloomLibrary icon"
                    >
                </span>
                <span>BloomLibrary</span>
            </button>

            <div class="nav-decoration">
                <span class="nav-bloom">BLOOM</span>
            </div>
        </nav>

        <main class="gallery-shell">
            <div class="gallery-heading">
                <div>
                    <h1>Flower Gallery</h1>
                    <p>
                        Explore the beauty, meaning, and science behind every bloom.
                    </p>
                </div>
            </div>

            <section class="controls">
                <div class="search-box">
                    <span class="search-icon">⌕</span>
                    <input
                        v-model="search"
                        type="text"
                        placeholder="Search for a flower..."
                        aria-label="Search flowers"
                    >
                </div>

                <select
                    v-model="selectedCategory"
                    aria-label="Filter by category"
                >
                    <option value="All">All Categories</option>
                    <option value="Flowering">Flowering</option>
                    <option value="Aquatic">Aquatic</option>
                    <option value="Herb">Herb</option>
                </select>

                <button
                    class="favorites-filter-btn"
                    @click="showFavorites = !showFavorites"
                >
                    ♡
                    {{ showFavorites ? 'Show All' : 'View Favorites' }}
                </button>
            </section>

            <section class="summary">
                <p>Showing {{ filteredFlowers.length }} flowers</p>
                <p>♡ Favorites: {{ favoriteCount }}</p>
            </section>

            <p v-if="loading" class="empty-message">
                <q-spinner color="primary" size="2em" />
                Loading flowers...
            </p>
            <p v-else-if="error" class="empty-message">{{ error }}</p>

            <div
                v-else-if="filteredFlowers.length === 0"
                class="empty-message"
            >
                <h2>No flowers found</h2>
                <p>Try searching for another flower.</p>
            </div>

            <div
                v-else
                class="gallery-rule"
            >
                <span>✧</span>
            </div>

            <div
                v-if="!loading && !error && filteredFlowers.length"
                class="flower-grid"
            >
                <FlowerCard
                    v-for="flower in filteredFlowers"
                    :key="flower.id"
                    :flower="flower"
                />
            </div>
        </main>
    </div>
</template>
