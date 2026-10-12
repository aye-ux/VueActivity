<script setup lang="ts">
import { useFlowerStore } from '../stores/flowers';

const store = useFlowerStore();
</script>

<template>
    <div class="landing-page">
        <header class="hero">
            <div class="hero-left">
                <div class="hero-copy">
                    <div class="corner-line top"></div>

                    <h1>BloomLibrary</h1>
                    <h2>Flower Encyclopedia</h2>

                    <p>
                        Explore the beauty, meaning, and science of flowers.
                    </p>

                    <button
                        class="primary-btn"
                        @click="store.openGallery"
                    >
                        See Flower Gallery
                    </button>

                    <div class="corner-line bottom"></div>
                </div>
            </div>

            <div class="hero-right">
                <div class="hero-logo">
                    BLOOM
                </div>

                <div class="hero-photo">
                    <img
                        src="/images/cherry-blossoms.jpg"
                        alt="Cherry blossoms"
                    >
                </div>
            </div>
        </header>
    </div>
</template>
