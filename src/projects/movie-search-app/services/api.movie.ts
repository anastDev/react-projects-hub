import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getMovieByTitle(title: string) : Promise<MovieApiResponse> {
    try {

        if (!title || title.trim() === "") {
           throw new Error("Title is required");
        }

        const encodedTitle = encodeURIComponent(title);
        const res = await fetch(`${VITE_BASE_URL}/movies?title=${encodedTitle}`);

        if (!res.ok) {
          throw new Error(`Unable to get movie: ${title}`);
        }

        return await res.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}