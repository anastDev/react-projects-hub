import {useState} from "react";
import {getRestaurants} from "@/projects/vegan-finder/services/api.restaurants.ts";
import {mapRestaurant} from "@/projects/vegan-finder/utils/mapRestaurant.ts";
import type {Restaurant} from "@/projects/vegan-finder/types/typesRestaurant.ts";

export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRestaurants = async (lat: number, lng: number) => {
        try {
            setLoading(true);
            setError(null);

            const data = await getRestaurants(lat, lng);
            setRestaurants(data.map(mapRestaurant));
        } catch (err) {
            console.error(err);
            setError("Failed to fetch restaurants");
        } finally {
            setLoading(false);
        }
    };

    return { restaurants, loading, error, fetchRestaurants };
};