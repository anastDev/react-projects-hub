import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import MovieContainer from "@/projects/movie-search-app/components/MovieContainer.tsx";
import {Link} from "react-router";
import FavoritePlaceholder from "@/projects/movie-search-app/components/FavoritePlaceholder.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, Heart, Search, X} from "lucide-react";
import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";

const getInitialState = () : MovieApiResponse[] => {
   try {
       const storedMovies = localStorage.getItem("movies");
       return storedMovies ? JSON.parse(storedMovies) : [];
   } catch {
       return [];
   }
}
const SUGGESTIONS = ["Inception", "Inside Out", "When Harry Met Sally", "Harry Potter"];

const MovieSearch = () => {
    const [title, setTitle] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [showFavourites, setShowFavourites] = useState(false);
    const { movie, error, loading } = useFetch(searchTitle);
    const [favorites, setFavorites] = useState<MovieApiResponse[]>(getInitialState());

    useEffect(() => {
        document.title = "CineSearch";
    }, []);

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movie));
    }, [favorites, movie]);

    const handleSearch = () => {
        if (title.trim() !== "") {
            setSearchTitle(title);
            setShowFavourites(false);
        }
    };

    const handleReset = () => {
        setTitle("");
        setSearchTitle("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleSuggestion = (suggestion: string) => {
        setTitle(suggestion);
        setSearchTitle(suggestion);
        setShowFavourites(false);
    };

    const handleFavorites = (movie: MovieApiResponse) => {
      setFavorites((prev) => prev.find((f) => f.imdbID === movie.imdbID) ? prev : [...prev, movie]);
    };

    const handleRemoveFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((f) => f.imdbID !== id));
    };

    return (
        <div
            className="min-h-screen text-[#f0ede8]"
            style={{ fontFamily: "'DM Sans', sans-serif", background: "#0d0d0f" }}
        >
            {/* Nav */}
            <nav className="relative z-10 flex items-center justify-between px-10 py-6 border-b border-white/[0.08]">
                {/* Back button */}
                <Link
                    to="/projects"
                    className="flex items-center gap-1.5 text-xs text-[#f0ede8]/40 tracking-widest uppercase hover:text-[#f0ede8] transition-colors no-underline"
                >
                    <ChevronLeft />
                    Projects
                </Link>

                {/* Logo */}
                <span
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                    className="absolute left-1/2 -translate-x-1/2 text-lg tracking-wide text-[#f0ede8]"
                >
          CineSearch
        </span>

                {/* Heart / favourites toggle */}
                <button
                    onClick={() => setShowFavourites((v) => !v)}
                    className="p-2 rounded-md bg-transparent border-none cursor-pointer transition-colors hover:bg-white/5"
                    title="Favourites"
                >
                    <Heart />
                </button>
            </nav>

            {/* Hero */}
            <header>
                <section className="relative flex flex-col items-center text-center px-8 pt-16 pb-12">
                    <div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(220,180,80,0.07) 0%, transparent 70%)" }}
                    />

                    <h1
                        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 6vw, 60px)" }}
                        className="leading-[1.05] max-w-2xl mb-4"
                    >
                        Find any film, <em style={{ color: "#d4b84a" }}>instantly.</em>
                    </h1>

                    <p className="text-[15px] text-[#f0ede8]/45 max-w-sm leading-relaxed">
                        Search millions of movies and series.
                    </p>
                    <p className="text-[15px] text-[#f0ede8]/45 max-w-sm leading-relaxed mb-8">
                        Everything you need to pick your next watch!
                    </p>

                    {/* Search bar */}
                    <div className="w-full max-w-xl flex items-center bg-white/5 rounded-lg pl-6 gap-3 border border-white/[0.18] focus-within:border-[#d4b84a]/60 transition-colors">
                        <Search size={16} className="flex-shrink-0 text-[#f0ede8] opacity-35" />

                        <input
                            type="text"
                            value={title}
                            placeholder="Search for a movie or series..."
                            onChange={(e) => setTitle(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-[15px] text-[#f0ede8] py-[0.90rem] placeholder:text-white/30"
                            style={{ caretColor: "#d4b84a" }}
                        />

                        {title && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleReset}
                                className="flex-shrink-0 text-[#f0ede8]/35 hover:text-[#f0ede8]/70 hover:bg-transparent"
                            >
                                <X size={16} />
                            </Button>
                        )}

                        <Button
                            onClick={handleSearch}
                            className="flex-shrink-0 h-[44px] p-6 rounded-l-none rounded-r-lg text-sm font-medium text-[#0d0d0f] border-none active:scale-[0.98]"
                            style={{ background: "#d4b84a" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0ca6a")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#d4b84a")}
                        >
                            Search
                        </Button>
                    </div>
                    {/* Suggestions */}
                    <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
                        <span className="text-xs text-[#f0ede8]/30 tracking-widest">Try:</span>
                        {SUGGESTIONS.map((s) => (
                            <button
                                key={s}
                                onClick={() => handleSuggestion(s)}
                                className="text-xs text-[#f0ede8]/50 border border-white/[0.12] rounded-md px-3 py-1 bg-transparent cursor-pointer hover:text-[#f0ede8] hover:border-white/30 transition-all"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </section>
            </header>

            <div className="h-px bg-white/[0.07] mx-10" />

            {/* Main content */}
            <main>
                <div className="px-10 py-10 min-h-[280px] flex flex-col justify-center">
                    {showFavourites ? (
                        <FavoritePlaceholder
                            favorites={favorites}
                            onRemoveFavorite={handleRemoveFavorite}/>
                    ) : (
                        <MovieContainer
                            movie={movie}
                            loading={loading}
                            error={error}
                            onClear={handleReset}
                            favorites={favorites}
                            onAddFavourite={handleFavorites}
                            onRemoveFavourite={handleRemoveFavorite}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};


export default MovieSearch;