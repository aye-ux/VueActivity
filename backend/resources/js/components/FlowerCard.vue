<script setup lang="ts">
import { useFlowerStore } from '../stores/flowers';
import type { FlowerWithFavorite } from '../types/flower';

defineProps<{
    flower: FlowerWithFavorite;
}>();

const store = useFlowerStore();
</script>

<template>
    <article
        class="flower-card"
        :class="flower.id % 2 === 1 ? 'burgundy-card' : 'black-card'"
        @click="store.showFlower(flower)"
    >
        <img
            :src="'/' + flower.image"
            :alt="flower.name"
        >

        <div class="flower-content">
            <span class="card-category">
                {{ flower.category }}
            </span>

            <h2>{{ flower.name }}</h2>

            <div class="card-buttons">
                <button
                    class="see-more-btn"
                    @click.stop="store.showFlower(flower)"
                >
                    See More →
                </button>

                <button
                    class="heart-btn"
                    :class="{ active: flower.favorite }"
                    @click.stop="store.toggleFavorite(flower)"
                >
                    {{ flower.favorite ? '♥' : '♡' }}
                </button>
            </div>
        </div>
    </article>
</template>
