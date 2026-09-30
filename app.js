
// Get the createApp function from Vue
const { createApp } = Vue;

// Create the Vue application
createApp({
    // Application data
    data() {
        return {
            search: "",
            selectedCategory: "All",
            selectedFlower: null,
            showFavorites: false,

            // Flower list
            flowers: [
                {
                    id: 1,
                    name: "Rose",
                    scientificName: "Rosa",
                    category: "Flowering",
                    definition: "A rose is a flowering plant known for its beautiful petals and pleasant fragrance.",
                    care: "Give roses plenty of sunlight, water them regularly, and use well-drained soil.",
                    image: "images/rose.jpg",
                    favorite: false
                },
                {
                    id: 2,
                    name: "Sunflower",
                    scientificName: "Helianthus annuus",
                    category: "Flowering",
                    definition: "A sunflower is a tall flowering plant recognized by its large yellow flower head.",
                    care: "Place sunflowers in full sunlight and water them regularly, especially when the soil is dry.",
                    image: "images/sunflower.jpg",
                    favorite: false
                },
                {
                    id: 3,
                    name: "Lotus",
                    scientificName: "Nelumbo nucifera",
                    category: "Aquatic",
                    definition: "The lotus is an aquatic flowering plant that commonly grows in ponds and calm water.",
                    care: "Lotus plants need plenty of sunlight and should be grown in water with nutrient-rich soil.",
                    image: "images/lotus.jpg",
                    favorite: false
                },
                {
                    id: 4,
                    name: "Tulip",
                    scientificName: "Tulipa",
                    category: "Flowering",
                    definition: "A tulip is a spring-blooming flower known for its cup-shaped petals and many colors.",
                    care: "Grow tulips in well-drained soil and provide them with plenty of sunlight.",
                    image: "images/tulip.jpg",
                    favorite: false
                },
                {
                    id: 5,
                    name: "Hibiscus",
                    scientificName: "Hibiscus rosa-sinensis",
                    category: "Flowering",
                    definition: "Hibiscus is a tropical flowering plant with large colorful flowers.",
                    care: "Hibiscus grows well in sunlight and needs regular watering and well-drained soil.",
                    image: "images/hibiscus.jpg",
                    favorite: false
                },
                {
                    id: 6,
                    name: "Lavender",
                    scientificName: "Lavandula",
                    category: "Herb",
                    definition: "Lavender is an aromatic flowering herb commonly recognized for its purple flowers.",
                    care: "Lavender prefers plenty of sunlight and well-drained soil. Avoid excessive watering.",
                    image: "images/lavender.jpg",
                    favorite: false
                },
                {
                    id: 7,
                    name: "Hydrangea",
                    scientificName: "Hydrangea",
                    category: "Flowering",
                    definition: "Hydrangea is a flowering plant known for its large clusters of colorful flowers, commonly appearing in blue, pink, purple, or white.",
                    care: "Keep hydrangeas in moist, well-drained soil and provide them with morning sunlight.",
                    image: "images/hydrangea.jpg",
                    favorite: false
                },
                {
                    id: 8,
                    name: "Lily",
                    scientificName: "Lilium",
                    category: "Flowering",
                    definition: "Lily is a flowering plant known for its elegant trumpet-shaped flowers and pleasant fragrance.",
                    care: "Lilies grow well in sunlight with well-drained soil and regular watering.",
                    image: "images/lily.jpg",
                    favorite: false
                },
                {
                    id: 9,
                    name: "Peony",
                    scientificName: "Paeonia",
                    category: "Flowering",
                    definition: "Peony is a flowering plant with large, soft petals and is commonly grown as an ornamental garden flower.",
                    care: "Plant peonies in well-drained soil and give them plenty of sunlight and moderate watering.",
                    image: "images/peony.jpg",
                    favorite: false
                },
                {
                    id: 10,
                    name: "Dandelion",
                    scientificName: "Taraxacum officinale",
                    category: "Flowering",
                    definition: "Dandelion is a small flowering plant recognized by its bright yellow flower and round seed head.",
                    care: "Dandelions can grow in sunlight or partial shade and need moderate watering.",
                    image: "images/dandelion.jpg",
                    favorite: false
                },
                {
                    id: 11,
                    name: "Gerbera",
                    scientificName: "Gerbera jamesonii",
                    category: "Flowering",
                    definition: "Gerbera is a colorful flowering plant known for its large daisy-like flowers.",
                    care: "Give gerberas plenty of sunlight, good air circulation, and well-drained soil.",
                    image: "images/gerbera.jpg",
                    favorite: false
                },
                {
                    id: 12,
                    name: "Snapdragon",
                    scientificName: "Antirrhinum majus",
                    category: "Flowering",
                    definition: "Snapdragon is a flowering plant known for its colorful flowers that resemble a dragon's mouth.",
                    care: "Snapdragons grow best with sunlight, regular watering, and well-drained soil.",
                    image: "images/snapdragon.jpg",
                    favorite: false
                }
            ]
        };
    },

    // Automatically updates when data changes
    computed: {
        // Filter flowers by search, category, and favorites
        filteredFlowers() {
            return this.flowers.filter((flower) => {
                const matchesSearch = flower.name
                    .toLowerCase()
                    .includes(this.search.trim().toLowerCase());

                const matchesCategory =
                    this.selectedCategory === "All" ||
                    flower.category === this.selectedCategory;

                const matchesFavorites =
                    !this.showFavorites || flower.favorite;

                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesFavorites
                );
            });
        },

        // Count favorite flowers
        favoriteCount() {
            return this.flowers.filter(
                (flower) => flower.favorite
            ).length;
        }
    },

    // User actions
    methods: {
        // Add or remove a flower from favorites
        toggleFavorite(flower) {
            flower.favorite = !flower.favorite;
        },

        // Open flower details popup
        showFlower(flower) {
            this.selectedFlower = flower;
        },

        // Close flower details popup
        closeFlower() {
            this.selectedFlower = null;
        }
    }
}).mount("#app");