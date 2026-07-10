export interface RestaurantApiResponse {
    id: string;
    displayName: {
        text: string;
    };
    formattedAddress: string;
    location: {
        latitude: number;
        longitude: number;
    };
    rating: number;
    reviews?: Review[];
    userRatingCount: number;
    websiteUri: string;
    priceLevel: string;
    currentOpeningHours?: {
        openNow: boolean;
    };
    nationalPhoneNumber: string;
    servesVegetarianFood: boolean;
    servesCoffee: boolean;
    servesBreakfast: boolean;
    servesBrunch: boolean | null;
    servesCocktails: boolean;
    servesDinner: boolean;
    photos?: Photo[];
}

export interface Review {
    name: string;
    rating: number;
    text: LocalizedText | null;
    originalText: LocalizedText | null;
    authorAttribution: AuthorAttribution;
    relativePublishTimeDescription: string;
    publishTime: string;
    googleMapsUri: string;
}

export interface LocalizedText {
    text: string;
    languageCode: string;
}

export interface Photo {
    name: string;
    widthPx: number;
    heightPx: number;
    authorAttributions?: AuthorAttribution[];
}

export interface AuthorAttribution {
    displayName: string;
    uri: string;
    photoUri: string;
}