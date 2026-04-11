import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {X} from "lucide-react";

interface MovieCardProps {
    movie: MovieApiResponse;
    onClear: () => void;
    onAddFavourite: (movie: MovieApiResponse) => void;
}

const MovieCard = ({ movie, onClear, onAddFavourite }: MovieCardProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const metaData = [movie.Genre, movie.Type, movie.Runtime, movie.Released].filter(
        (v) => v && v !== "N/A"
    );

    const ratings = [
        { label: "IMDB", value: movie.imdbRating },
        { label: "Metascore", value: movie.Metascore },
    ].filter(({ value }) => value && value !== "N/A");

    const moreDetails = [
        { label: "Director", value: movie.Director },
        { label: "Writer", value: movie.Writer },
        { label: "Actors", value: movie.Actors },
        { label: "Language", value: movie.Language },
        { label: "Country", value: movie.Country },
    ].filter(({ value }) => value && value !== "N/A");

    const hasPoster = movie.Poster && movie.Poster !== "N/A";

    return (
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7">
            <div className="flex gap-7 flex-wrap items-stretch">

                {/* Poster */}
                <div className="flex-shrink-0">
                    {hasPoster ? (
                        <img
                            src={movie.Poster}
                            alt={`${movie.Title} poster`}
                            className="w-[140px] rounded-md block"
                        />
                    ) : (
                        // Poster placeholder when OMDB returns no image
                        <div className="w-[140px] h-[210px] rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect x="4" y="6" width="24" height="20" rx="2" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
                                <circle cx="10" cy="12" r="2" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
                                <path d="M4 22l6-5 4 4 4-3 10 5" stroke="rgba(240,237,232,0.2)" strokeWidth="1" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-[200px] flex flex-col gap-3">

                    <div className="flex justify-between items-start">
                        <h1
                            className="text-[26px] leading-[1.15] text-[#f0ede8]"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            {movie.Title} ({movie.Year})
                        </h1>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClear}
                            className="text-[#f0ede8]/30 hover:text-[#f0ede8]/70 hover:bg-white/5 flex-shrink-0"
                        >
                            <X size={16} color="white" />
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {metaData.map((pill) => (
                            <span
                                key={pill}
                                className="text-xs text-[#f0ede8]/50 border border-white/[0.12] rounded-full px-2.5 py-0.5"
                            >
                {pill}
              </span>
                        ))}
                        {ratings.map(({ label, value }) => (
                            <span
                                key={label}
                                className="text-xs text-[#d4b84a] border border-[#d4b84a]/25 rounded-full px-2.5 py-0.5"
                            >
                {label}: {value}
              </span>
                        ))}
                    </div>

                    {/* Plot */}
                    <div className="flex flex-col flex-1 gap-3">
                        <p className="text-sm text-[#f0ede8]/50 leading-relaxed">
                            {movie.Plot !== "N/A" ? movie.Plot : ""}
                        </p>

                        <div className="flex gap-2.5 mt-auto justify-end">
                            <Button
                                variant="outline"
                                onClick={() => setIsVisible((v) => !v)}
                                className="text-[13px] text-[#f0ede8]/70 border-white/20 bg-transparent hover:bg-white/5 hover:text-[#f0ede8]"
                            >
                                {isVisible ? "Less details" : "More details"}
                            </Button>
                            <Button
                                className="text-[13px] font-medium text-[#0d0d0f] border-none"
                                style={{ background: "#d4b84a" }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "#e0ca6a")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "#d4b84a")}
                                onClick={() => onAddFavourite(movie)}
                            >
                                Add to favourites
                            </Button>
                        </div>
                    </div>

                    {/* Expanded details section, toggled by the button above */}
                    {isVisible && (
                        <div className="mt-5 pt-5 border-t border-white/[0.08] grid grid-cols-2 gap-2">
                            {moreDetails.map(({ label, value }) => (
                                <div key={label}>
                                    <p className="text-[11px] text-[#f0ede8]/30 uppercase tracking-widest">{label}</p>
                                    <p className="text-[13px] text-[#f0ede8]/65 mt-0.5">{value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;