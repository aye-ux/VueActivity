import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import api from '../api/http';
import type { BloomPage, Flower, FlowerWithFavorite } from '../types/flower';

export const useFlowerStore = defineStore('flowers', () => {
    const flowers = ref<Flower[]>([]);
    const selectedFlower = ref<FlowerWithFavorite | null>(null);
    const currentPage = ref<BloomPage>('home');
    const search = ref('');
    const selectedCategory = ref('All');
    const showFavorites = ref(false);
    const favoriteIds = ref<number[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const flowersWithFavorites = computed<FlowerWithFavorite[]>(() =>
        flowers.value.map((flower) => ({
            ...flower,
            favorite: favoriteIds.value.includes(flower.id),
        })),
    );

    const filteredFlowers = computed(() =>
        flowersWithFavorites.value.filter((flower) => {
            const matchesSearch = flower.name
                .toLowerCase()
                .includes(search.value.trim().toLowerCase());

            const matchesCategory =
                selectedCategory.value === 'All' ||
                flower.category === selectedCategory.value;

            const matchesFavorites =
                !showFavorites.value || flower.favorite;

            return matchesSearch && matchesCategory && matchesFavorites;
        }),
    );

    const favoriteCount = computed(() => favoriteIds.value.length);

    async function fetchFlowers(): Promise<void> {
        loading.value = true;
        error.value = null;

        try {
            const { data } = await api.get<Flower[]>('/api/flowers');
            flowers.value = data;
        } catch {
            error.value = 'Unable to load flowers from the BloomLibrary API.';
        } finally {
            loading.value = false;
        }
    }

    function openGallery(): void {
        currentPage.value = 'gallery';
        window.scrollTo(0, 0);
    }

    function toggleFavorite(flower: Flower): void {
        if (favoriteIds.value.includes(flower.id)) {
            favoriteIds.value = favoriteIds.value.filter((id) => id !== flower.id);
        } else {
            favoriteIds.value = [...favoriteIds.value, flower.id];
        }

        if (selectedFlower.value?.id === flower.id) {
            selectedFlower.value = {
                ...selectedFlower.value,
                favorite: favoriteIds.value.includes(flower.id),
            };
        }
    }

    async function showFlower(flower: Flower): Promise<void> {
        const { data } = await api.get<Flower>(`/api/flowers/${flower.id}`);

        selectedFlower.value = {
            ...data,
            favorite: favoriteIds.value.includes(data.id),
        };
        currentPage.value = 'details';
        window.scrollTo(0, 0);
    }

    function closeFlower(): void {
        selectedFlower.value = null;
        currentPage.value = 'gallery';
        window.scrollTo(0, 0);
    }

    function goHome(): void {
        currentPage.value = 'home';
        window.scrollTo(0, 0);
    }

    return {
        flowers,
        selectedFlower,
        currentPage,
        search,
        selectedCategory,
        showFavorites,
        favoriteIds,
        loading,
        error,
        flowersWithFavorites,
        filteredFlowers,
        favoriteCount,
        fetchFlowers,
        openGallery,
        toggleFavorite,
        showFlower,
        closeFlower,
        goHome,
    };
});
