import {useCallback, useState} from "react";
import {fetchPhoto} from "@/projects/vegan-finder/services/api.restaurants.ts";

export const usePhotos = () => {
    const [photoUri, setPhotoUri] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPhotoUri = useCallback(async (photoName: string) => {
        setLoading(true);
        setError(null);
        try {
            const uri = await fetchPhoto(photoName);
            setPhotoUri(uri ?? "");
        } catch (err) {
            console.error(err);
            setError("Failed to fetch photo");
        } finally {
            setLoading(false);
        }
    }, []);

    const getPhotoUri = useCallback(async (photoName: string): Promise<string | null> => {
        try {
            return await fetchPhoto(photoName);
        } catch {
            return null;
        }
    }, []);

    return { photoUri, loading, fetchPhotoUri, getPhotoUri, error };
};

