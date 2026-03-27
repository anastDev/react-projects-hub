import Search from "@/projects/movie-search-app/components/Search";
import MovieContainer from "@/projects/movie-search-app/components/MovieContainer.tsx";
import {useEffect, useState} from "react";
import {useFetch} from "@/projects/movie-search-app/hooks/useFetch.tsx";

const MovieSearch = () => {
    const [title, setTitle] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const {movie, error, loading} = useFetch(searchTitle);

    useEffect(() => {
        document.title = "Movie Search App";
    }, [])

    useEffect(() => {
        console.log("Searching for: ", searchTitle);
    }, [searchTitle]);

    function handleSearch() {
        if (title.trim() !== "") {
            setSearchTitle(title);
        }
    }


    return (
        <>
            <div className="bg-indigo-50 min-h-screen">
            {/* Search Field */}
            <header>
               <Search
               movieInput={title}
               onchange={(e) => setTitle(e.target.value)}
               reset={() => {
                   setTitle("");
                   setSearchTitle("");
               }}
                onSearch={handleSearch}
               />
            </header>
            {/*  Container of the result-movie  */}
           <main>
               <MovieContainer
                   movie={movie}
                   loading={loading}
                   error={error}
               />
           </main>
            </div>
        </>
    )
}

export default MovieSearch;