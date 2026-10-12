const { createApp } = Vue;

createApp({

    data() {
        return {
            search: "",
            selectedCategory: "All",
            selectedFlower: null,
            showFavorites: false,
            currentPage: "home",
            categoryOpen: false,
flowers: [
    {
        id: 1,
        name: "Rose",
        scientificName: "Rosa",
        category: "Terrestrial",
        definition: "A beautiful flowering plant known for its fragrant petals and symbolism of love and beauty.",
        care: "Provide 6–8 hours of sunlight, water at the base regularly, and grow in well-drained soil.",
        image: "images/rose.jpg",
        favorite: false
    },
    {
        id: 2,
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        category: "Terrestrial",
        definition: "A tall plant recognized by its large yellow flower head.",
        care: "Provide full sunlight, well-drained soil, and regular watering, especially during dry weather.",
        image: "images/sunflower.jpg",
        favorite: false
    },
    {
        id: 3,
        name: "Lotus",
        scientificName: "Nelumbo nucifera",
        category: "Aquatic",
        definition: "An aquatic plant known for its beautiful flowers and round leaves that rise above the water.",
        care: "Grow in a pond or water container with nutrient-rich soil and plenty of sunlight.",
        image: "images/lotus.jpg",
        favorite: false
    },
    {
        id: 4,
        name: "Tulip",
        scientificName: "Tulipa",
        category: "Terrestrial",
        definition: "A spring-blooming plant known for its colorful, cup-shaped flowers.",
        care: "Plant bulbs in well-drained soil and provide sunlight. Water moderately and avoid waterlogged soil.",
        image: "images/tulip.jpg",
        favorite: false
    },
    {
        id: 5,
        name: "Hibiscus",
        scientificName: "Hibiscus rosa-sinensis",
        category: "Terrestrial",
        definition: "A tropical plant known for its large, colorful flowers.",
        care: "Provide plenty of sunlight, regular watering, and well-drained soil. Protect from extreme conditions.",
        image: "images/hibiscus.jpg",
        favorite: false
    },
    {
        id: 6,
        name: "Lavender",
        scientificName: "Lavandula",
        category: "Terrestrial",
        definition: "An aromatic herb recognized for its purple flowers and pleasant fragrance.",
        care: "Provide full sunlight and well-drained soil. Water when the soil begins to dry and avoid overwatering.",
        image: "images/lavender.jpg",
        favorite: false
    },
    {
        id: 7,
        name: "Hydrangea",
        scientificName: "Hydrangea",
        category: "Terrestrial",
        definition: "A garden plant known for large clusters of flowers in shades of blue, pink, purple, and white.",
        care: "Keep the soil consistently moist but not waterlogged. Provide morning sunlight and afternoon shade in hot climates.",
        image: "images/hydrangea.jpg",
        favorite: false
    },
    {
        id: 8,
        name: "Lily",
        scientificName: "Lilium",
        category: "Terrestrial",
        definition: "An ornamental plant known for its elegant, trumpet-shaped flowers.",
        care: "Plant in well-drained soil with suitable sunlight. Water regularly while avoiding waterlogged soil.",
        image: "images/lily.jpg",
        favorite: false
    },
    {
        id: 9,
        name: "Peony",
        scientificName: "Paeonia",
        category: "Terrestrial",
        definition: "A garden plant known for its large, soft petals and ornamental flowers.",
        care: "Plant in well-drained soil and a sunny location. Water during dry periods and allow good air circulation.",
        image: "images/peony.jpg",
        favorite: false
    },
    {
        id: 10,
        name: "Dandelion",
        scientificName: "Taraxacum officinale",
        category: "Terrestrial",
        definition: "A land-growing plant recognized by its bright yellow flowers and round seed heads.",
        care: "Dandelions grow in sunlight or partial shade and generally need moderate watering once established.",
        image: "images/dandelion.jpg",
        favorite: false
    },
    {
        id: 11,
        name: "Gerbera",
        scientificName: "Gerbera jamesonii",
        category: "Terrestrial",
        definition: "A colorful ornamental plant known for its large, daisy-like flowers.",
        care: "Provide bright sunlight, well-drained soil, and good air circulation. Water the soil without keeping it soggy.",
        image: "images/gerbera.jpg",
        favorite: false
    },
    {
        id: 12,
        name: "Snapdragon",
        scientificName: "Antirrhinum majus",
        category: "Terrestrial",
        definition: "A garden plant with colorful flowers that resemble a dragon's mouth.",
        care: "Grow in well-drained soil with sunlight and regular watering. Avoid excessive moisture around the roots.",
        image: "images/snapdragon.jpg",
        favorite: false
    },
    {
        id: 13,
        name: "Water Hyacinth",
        scientificName: "Pontederia crassipes",
        category: "Aquatic",
        definition: "A floating freshwater plant with glossy green leaves, swollen leaf stalks, and clusters of purple flowers.",
        care: "Grows in freshwater with plenty of sunlight. It spreads rapidly and is invasive in many regions, so never release it into natural waterways.",
        image: "images/hyacinth.jpg",
        favorite: false
    },
    {
        id: 14,
        name: "Pickerel Weed",
        scientificName: "Pontederia cordata",
        category: "Aquatic",
        definition: "A wetland plant with broad green leaves and upright spikes of purple-blue flowers.",
        care: "Grow in shallow freshwater or muddy pond edges with plenty of sunlight. Keep the roots moist or submerged.",
        image: "images/pickerel weed.jpg",
        favorite: false
    },
    {
        id: 15,
        name: "Arrowhead",
        scientificName: "Sagittaria latifolia",
        category: "Aquatic",
        definition: "A wetland plant recognized by its arrow-shaped leaves and small white flowers.",
        care: "Grow in shallow water or consistently wet soil with adequate sunlight. Maintain moist conditions around the roots.",
        image: "images/arrowhead.jpg",
        favorite: false
    },
    {
        id: 16,
        name: "Chamomile",
        scientificName: "Matricaria chamomilla",
        category: "Terrestrial",
        definition: "A land-growing herb with small white, daisy-like flowers and yellow centers.",
        care: "Provide sunlight and well-drained soil. Water moderately and avoid waterlogged conditions.",
        image: "images/chamomile.jpg",
        favorite: false
    }
],             
        };
    },

    /*  COMPUTED */

    computed: {
        filteredFlowers() {
            return this.flowers.filter(
                (flower) => {
                    const matchesSearch =
                        flower.name
                            .toLowerCase()
                            .includes(
                                this.search
                                    .trim()
                                    .toLowerCase()
                            );
                    const matchesCategory =
                        this.selectedCategory === "All" ||
                        flower.category ===
                            this.selectedCategory;
                    const matchesFavorites =
                        !this.showFavorites ||
                        flower.favorite;
                    return (
                        matchesSearch &&
                        matchesCategory &&
                        matchesFavorites
                    );
                }
            );
        },

        favoriteCount() {
            return this.flowers.filter(
                (flower) =>
                    flower.favorite
            ).length;
        }
    },


    /* METHODS*/

    methods: {


        openGallery() {

            this.currentPage =
                "gallery";

            window.scrollTo(
                0,
                0
            );

        },


        toggleFavorite(flower) {

            flower.favorite =
                !flower.favorite;

        },


        showFlower(flower) {

            this.selectedFlower =
                flower;

            this.currentPage =
                "details";

            window.scrollTo(
                0,
                0
            );

        },


        closeFlower() {

            this.selectedFlower =
                null;

            this.currentPage =
                "gallery";

            window.scrollTo(
                0,
                0
            );

        }

    }

}).mount("#app");