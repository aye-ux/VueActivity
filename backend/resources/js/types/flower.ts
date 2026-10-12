export interface Flower {
    id: number;
    name: string;
    scientificName: string;
    category: string;
    definition: string;
    care: string;
    image: string;
}

export interface FlowerWithFavorite extends Flower {
    favorite: boolean;
}

export type BloomPage = 'home' | 'gallery' | 'details';
