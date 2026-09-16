// Get the createApp function from Vue
const { createApp } = Vue;

// Create the Vue application
createApp({

    // data() contains the information used by the application
    data() {
        return {

            // Stores the user's search input
            search: "",

            // Stores the selected flower category
            selectedCategory: "All",

            // Stores the flower selected to view its details
            selectedFlower: null,

            // List of flowers displayed in the application
            flowers: [

                {
                    id: 1,
                    name: "Rose",
                    scientificName: "Rosa",
                    category: "Flowering",
                    definition: "A rose is a flowering plant known for its beautiful petals and pleasant fragrance.",
                    image: "images/rose.jpg",
                    favorite: false
                },

                {
                    id: 2,
                    name: "Sunflower",
                    scientificName: "Helianthus annuus",
                    category: "Flowering",
                    definition: "A sunflower is a tall flowering plant recognized by its large yellow flower head.",
                    image: "images/sunflower.jpg",
                    favorite: false
                },

                {
                    id: 3,
                    name: "Lotus",
                    scientificName: "Nelumbo nucifera",
                    category: "Aquatic",
                    definition: "The lotus is an aquatic flowering plant that commonly grows in ponds and calm water.",
                    image: "images/lotus.jpg",
                    favorite: false
                },

                {
                    id: 4,
                    name: "Tulip",
                    scientificName: "Tulipa",
                    category: "Flowering",
                    definition: "A tulip is a spring-blooming flower known for its cup-shaped petals and many colors.",
                    image: "images/tulip.jpg",
                    favorite: false
                },

                {
                    id: 5,
                    name: "Hibiscus",
                    scientificName: "Hibiscus rosa-sinensis",
                    category: "Flowering",
                    definition: "Hibiscus is a tropical flowering plant with large colorful flowers.",
                    image: "images/hibiscus.jpg",
                    favorite: false
                },

                {
                    id: 6,
                    name: "Lavender",
                    scientificName: "Lavandula",
                    category: "Herb",
                    definition: "Lavender is an aromatic flowering herb commonly recognized for its purple flowers.",
                    image: "images/lavender.jpg",
                    favorite: false
                },

                {
                    id: 7,
                    name: "Hydrangea",
                    scientificName: "Hydrangea",
                    category: "Flowering",
                    definition: "Hydrangea is a flowering plant known for its large clusters of colorful flowers, commonly appearing in blue, pink, purple, or white.",
                    image: "images/hydrangea.jpg",
                    favorite: false
                },

                {
                    id: 8,
                    name: "Lily",
                    scientificName: "Lilium",
                    category: "Flowering",
                    definition: "Lily is a flowering plant known for its elegant trumpet-shaped flowers and pleasant fragrance.",
                    image: "images/lily.jpg",
                    favorite: false
                },

                {
                    id: 9,
                    name: "Peony",
                    scientificName: "Paeonia",
                    category: "Flowering",
                    definition: "Peony is a flowering plant with large, soft petals and is commonly grown as an ornamental garden flower.",
                    image: "images/peony.jpg",
                    favorite: false
                }

            ]

        };
    },


    // computed properties automatically update when the data changes
    computed: {

        // Filters the flowers based on search and category
        filteredFlowers() {

            return this.flowers.filter((flower) => {

                // Checks if the flower name matches the search
                const matchesSearch =
                    flower.name
                        .toLowerCase()
                        .includes(this.search.toLowerCase());

                // Checks if the selected category matches
                const matchesCategory =
                    this.selectedCategory === "All" ||
                    flower.category === this.selectedCategory;

                // Only returns flowers that match both conditions
                return matchesSearch && matchesCategory;

            });

        },


        // Counts how many flowers are marked as favorite
        favoriteCount() {

            return this.flowers.filter(
                (flower) => flower.favorite
            ).length;

        }

    },


    // methods contain actions that can be performed by the user
    methods: {

        // Adds or removes a flower from favorites
        toggleFavorite(flower) {

            flower.favorite = !flower.favorite;

        },


        // Shows the selected flower's details
        showFlower(flower) {

            this.selectedFlower = flower;

        },


        // Closes the flower details popup
        closeFlower() {

            this.selectedFlower = null;

        }

    }


// Connects Vue to the element with id="app"
}).mount("#app");