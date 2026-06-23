import {useState} from "react";

export const usePhotos = () => {
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPhotoUri = async (photoName: string) => {
        setLoading(true);
        setError(null);
        try {
           const uri = await fetchPhotoUri(photoName);
           setPhotoUri(uri ?? null);
        }  catch (err) {
            console.error(err);
            setError("Failed to fetch restaurants");
        } finally {
            setLoading(false);
        }
    };

    return { photoUri, loading, fetchPhotoUri, error};
}