import TextFieldSearchMovie from "@/movie-search-app/components/TextFieldSearchMovie.tsx";
import MovieContainer from "@/movie-search-app/components/MovieContainer.tsx";
import {useEffect} from "react";

const MovieSearch = () => {

    useEffect(() => {
        document.title = "Movie Search App";
    }, [])

    return (
        <>
            <body className="bg-indigo-100">
            {/* Search Field */}
            <TextFieldSearchMovie/>
            {/*  Container of the result-movie  */}
            <MovieContainer/>
            </body>
        </>
    )
}

export default MovieSearch;