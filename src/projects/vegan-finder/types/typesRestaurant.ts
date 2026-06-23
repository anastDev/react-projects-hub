export type DietType = "vegan" | "vegetarian";

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    rating: number;
    userRatingCount: number;
    websiteUri?: string;
    photoName?: string;
    priceLevel?: string;
    openNow?: boolean;
    phoneNumber?: string;
    servesVegetarianFood?: boolean;
    servesCoffee?: boolean;
    servesBreakfast?: boolean;
    servesBrunch?: boolean;
    servesCocktails?: boolean;
    servesDinner?: boolean;
    type: DietType;
}

export type Filter = "all" | DietType;

export type ViewMode = "list" | "map";