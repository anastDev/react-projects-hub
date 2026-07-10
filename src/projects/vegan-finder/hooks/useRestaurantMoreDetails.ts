import {useEffect, useState} from "react";
import type {Review} from "@/projects/vegan-finder/types/typesResponse.ts";
import {fetchMoreDetails} from "@/projects/vegan-finder/services/api.restaurants.ts";

export const useRestaurantDetails = (placeId: string | null) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!placeId) return;

        setLoading(true);
        setError(null);

        fetchMoreDetails(placeId)
            .then(data => setReviews(data))
            .catch(() => setError("Failed to fetch reviews"))
            .finally(() => setLoading(false));
    }, [placeId]);

    return { reviews, loading, error };
};