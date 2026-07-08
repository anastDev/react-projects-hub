import {useState} from "react";
import {fetchPhoto} from "@/projects/vegan-finder/services/api.restaurants.ts";

export const usePhotos = () => {
    const [photoUri, setPhotoUri] = useState<string >("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPhotoUri = async (photoName: string) => {
        setLoading(true);
        setError(null);
        try {
           const uri = await fetchPhoto(photoName);
           setPhotoUri(uri ?? "");
        }  catch (err) {
            console.error(err);
            setError("Failed to fetch restaurants");
        } finally {
            setLoading(false);
        }
    };

    const getPhotoUri = async (photoName: string): Promise<string | null> => {
        try {
            return await fetchPhoto(photoName);
        } catch {
            return null;
        }
    };

    return { photoUri, loading, fetchPhotoUri, getPhotoUri, error }
}

