import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) =>{
    console.log(movies, "MOVIESS")
    return(
        <div>
            <div>
                <h1 className="bold text-3xl mb-6">{title}</h1>
            </div>
            <div className="flex" style={{overflowX:"scroll"}}>
                {movies ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    ))
                ) : <div>Loading....</div>}
                
            </div>
        </div>
    )
}
export default MovieList;