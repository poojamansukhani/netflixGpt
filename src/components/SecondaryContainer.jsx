import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log("movies.popularMovies", movies.popularMovies)
    return(
        <div className="-mt-52 relative z-20" >
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
        </div>
    )
}
export default SecondaryContainer;