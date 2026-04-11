import {Heart, Trash2} from "lucide-react";
import type {MovieApiResponse} from "@/projects/movie-search-app/types/typesMovie.ts";
import {Button} from "@/components/ui/button.tsx";

interface FavoritePlaceholderProps {
    favorites: MovieApiResponse[];
    onRemoveFavorite: (id: string) => void;
}

const FavoritePlaceholder = ({favorites, onRemoveFavorite} : FavoritePlaceholderProps) => {
   if (favorites.length === 0) {
       return (
           <div className="flex flex-col items-center justify-center gap-4 py-12 opacity-40">
               <Heart size={28} className="text-[#f0ede8]" />
               <span className="text-sm text-[#f0ede8]/60 tracking-wider">
          No favourites yet
        </span>
           </div>
       );
   }

   return (
       <div className="flex flex-col gap-3">
           {favorites.map((movie) => (
               <div
                   key={movie.imdbID}
                   className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4"
               >
                   {movie.Poster && movie.Poster !== "N/A" && (
                       <img
                           src={movie.Poster}
                           alt={movie.Title}
                           className="w-12 h-16 rounded object-cover flex-shrink-0"
                       />
                   )}
                   <div className="flex-1 min-w-0">
                       <p className="text-sm font-medium text-[#f0ede8] truncate">{movie.Title}</p>
                       <p className="text-xs text-[#f0ede8]/40 mt-0.5">
                           {movie.Year} · {movie.Genre}
                       </p>
                       {movie.Plot && movie.Plot !== "N/A" && (
                           <p className="text-xs text-[#f0ede8]/30 mt-1 line-clamp-2">{movie.Plot}</p>
                       )}
                   </div>
                   <Button
                       variant="ghost"
                       size="icon"
                       onClick={() => onRemoveFavorite(movie.imdbID)}
                       className="text-[#f0ede8]/30 hover:text-[#f09595] hover:bg-white/5 flex-shrink-0"
                       title="Remove from favourites"
                   >
                       <Trash2 size={15} />
                   </Button>
               </div>
           ))}
       </div>
   );
}

export default FavoritePlaceholder;