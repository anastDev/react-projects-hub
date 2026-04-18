import {useEffect, useState} from "react";
import {getMovieByTitle} from "@/projects/movie-search-app/services/api.movie.ts";
import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";

export function useFetch(movieTitle: string) {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<MovieApiResponse | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if(movieTitle.trim() === "") {
            setMovie(null);
            setError("");
            return;
        }

       async function fetchMovie() {
           setLoading(true);
           setError("");
           try {
                const res = await getMovieByTitle(movieTitle);
                setMovie(res);
           } catch (err) {
               console.log(err);
               setError("Unable to load movie");
           } finally {
               setLoading(false);
           }
       }
       fetchMovie();
    }, [movieTitle]);

    return {loading, error, movie};
}