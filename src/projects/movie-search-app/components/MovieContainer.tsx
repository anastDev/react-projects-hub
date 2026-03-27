import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import { Skeleton } from "@/components/ui/skeleton"
import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";

interface MovieProps {
    movie: MovieApiResponse | null;
    loading: boolean;
    error: string;
}

const MovieContainer = ({movie, loading, error} : MovieProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className="md:container mx-auto mb-8 flex md:flex-col h-full">
                {error && (
                    <>
                        <div className="text-red-600">
                            {error}
                        </div>
                    </>
                )}

                {movie && (
                    <>
                        <div className="p-6 bg-indigo-200 shadow-md rounded-md ">
                            <div className="flex flex-wrap flex-row space-x-4">
                                <div>
                                    {loading ? (
                                       <Skeleton className="md:max-w-xs rounded-lg"/>
                                    ) : (
                                        <img
                                            className="md:max-w-xs rounded-lg"
                                            src={movie?.Poster}
                                            alt="Image of the movie"/>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col md:flex-row flex-wrap relative">
                                    <div className="flex flex-col space-y-4">
                                        {loading ? (
                                            <Skeleton className="w-48 h-8"/>
                                            ) : (
                                            <h1 id="movie-title" className="text-3xl font-bold">{movie?.Title}</h1>
                                        )}
                                        <div>
                                            <span className="font-semibold">Plot:</span>
                                            <p>
                                                {loading ? (
                                                    <Skeleton className="w-full h-20"/>
                                                ) : movie?.Plot}
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0">
                                            <ul className="space-y-2">
                                                <li> <span className="font-semibold">Genre:</span> {loading ? (<Skeleton className="w-24"/>) : movie?.Genre}</li>
                                                <li> <span className="font-semibold">Type:</span> {loading ? (<Skeleton className="w-24"/>) : movie?.Type}</li>
                                                <li><span className="font-semibold">Duration:</span> {loading ? (<Skeleton className="w-16"/>) : movie?.Runtime}</li>
                                                <li><span className="font-semibold">Released:</span> {loading ? (<Skeleton className="w-24"/>) : movie?.Released}</li>
                                                <li><span className="font-semibold">IMDB:</span> {loading ? (<Skeleton className="w-12"/>) : movie?.imdbRating}</li>
                                                <li><span className="font-semibold">Rotten Tomatoes:</span> {loading ? (<Skeleton className="w-12"/>) : movie?.Metascore}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* More Movie info */}
                            {isVisible && (
                                <div>
                                    <ul className="mt-4 space-y-2">
                                        <li> <span className="font-semibold">Director:</span> {loading ? (<Skeleton className="w-24"/>) : movie?.Director}</li>
                                        <li><span className="font-semibold">Writer:</span> {loading ? (<Skeleton className="w-16"/>) : movie?.Writer}</li>
                                        <li><span className="font-semibold">Actors:</span> {loading ? (<Skeleton className="w-24"/>) : movie?.Actors}</li>
                                        <li><span className="font-semibold">Language:</span> {loading ? (<Skeleton className="w-12"/>) : movie?.Language}</li>
                                        <li><span className="font-semibold">Country:</span> {loading ? (<Skeleton className="w-12"/>) : movie?.Country}</li>
                                    </ul>
                                </div>
                            )}
                            <div className="flex flex-row justify-start space-x-4 mt-4">
                                <Button variant="outline" disabled={loading} onClick={()=> setIsVisible(!isVisible)}>
                                    More Details
                                </Button>
                                <Button>
                                    Add to Favorites
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default MovieContainer;