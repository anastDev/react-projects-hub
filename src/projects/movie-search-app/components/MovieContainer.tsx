import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import MovieCard from "@/projects/movie-search-app/components/MovieCard.tsx";

interface MovieContainerProps {
    movie: MovieApiResponse | null;
    loading: boolean;
    error: string;
    onClear: () => void;
    onAddFavourite: (movie: MovieApiResponse) => void;
}

const LoadingSkeleton = () => (
    <div className="flex gap-7 flex-wrap">
        <Skeleton className="w-[140px] h-[210px] rounded-md flex-shrink-0 bg-white/[0.06]" />
        <div className="flex-1 flex flex-col gap-3 pt-2">
            <Skeleton className="h-8 w-3/5 bg-white/[0.06]" />
            <Skeleton className="h-3.5 w-[90%] bg-white/[0.06]" />
            <Skeleton className="h-3.5 w-4/5 bg-white/[0.06]" />
            <Skeleton className="h-3.5 w-3/5 bg-white/[0.06]" />
            <div className="flex gap-2 mt-1">
                <Skeleton className="h-6 w-16 rounded-full bg-white/[0.06]" />
                <Skeleton className="h-6 w-16 rounded-full bg-white/[0.06]" />
            </div>
        </div>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center gap-4 py-12 opacity-35">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="6" y="10" width="36" height="28" rx="3" stroke="#f0ede8" strokeWidth="1" />
            <rect x="6" y="10" width="7" height="28" fill="rgba(240,237,232,0.06)" />
            <line x1="13" y1="16" x2="42" y2="16" stroke="#f0ede8" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="13" y1="22" x2="42" y2="22" stroke="#f0ede8" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="13" y1="28" x2="42" y2="28" stroke="#f0ede8" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="13" y1="34" x2="42" y2="34" stroke="#f0ede8" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="9.5" cy="13" r="1" fill="#f0ede8" opacity="0.5" />
            <circle cx="9.5" cy="19" r="1" fill="#f0ede8" opacity="0.5" />
            <circle cx="9.5" cy="25" r="1" fill="#f0ede8" opacity="0.5" />
            <circle cx="9.5" cy="31" r="1" fill="#f0ede8" opacity="0.5" />
            <circle cx="9.5" cy="37" r="1" fill="#f0ede8" opacity="0.5" />
        </svg>
        <span className="text-sm text-[#f0ede8]/60 tracking-wider">
      Search for a movie to get started
    </span>
    </div>
);

const MovieContainer = ({ movie, loading, error, onClear, onAddFavourite }: MovieContainerProps) => {
    if (loading) return <LoadingSkeleton />;
    if (error) return <p className="text-[#f09595] text-sm text-center py-8">{error}</p>;
    if (!movie) return <EmptyState />;

    return <MovieCard movie={movie} onClear={onClear} onAddFavourite={onAddFavourite} />;
};

export default MovieContainer;