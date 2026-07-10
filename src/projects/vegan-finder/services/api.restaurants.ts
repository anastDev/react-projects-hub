import type {RestaurantApiResponse, Review} from "@/projects/vegan-finder/types/typesResponse.ts";

const VITE_VEGAN_FINDER_BACKEND_URL = import.meta.env.VITE_VEGAN_FINDER_BACKEND_URL;

export async function getRestaurants(lat: number, lng:number) : Promise<RestaurantApiResponse[]> {
    try {
        const res = await fetch( `${VITE_VEGAN_FINDER_BACKEND_URL}/restaurants/nearby?lat=${lat}&lng=${lng}`, {})

        if (!res.ok) {
            const text = await res.text();
            console.error("Unable to retrieve restaurants information: ", text);
        }

        return await res.json();
    } catch (err) {
        console.error("Error fetching restaurants: ",err);
        throw err;
    }
}


export async function fetchPhoto(photoName: string): Promise<string | null> {
    try {
        const response = await fetch(
            `${VITE_VEGAN_FINDER_BACKEND_URL}/restaurants/photo?photoName=${encodeURIComponent(photoName)}`);

        if (!response.ok) {
            console.error("Unable to retrieve restaurant photos.");
            return null;
        }

        return await response.text();
    } catch (err) {
        console.error("Error fetching photos: ",err);
        throw err;
    }
}

export async function fetchMoreDetails(placeId: string) : Promise<Review[]> {
    try{
        const response = await fetch(`${VITE_VEGAN_FINDER_BACKEND_URL}/restaurants/more?placeId=${encodeURIComponent(placeId)}`);

        if (!response.ok) {
            console.error("Unable to retrieve restaurant photos.");
            return [];
        }
        const data = await response.json();
        return data.reviews ?? [];
    } catch (err) {
        console.error("Error fetching reviews: ",err);
        throw err;
    }
}

