import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) =>{
    
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', API_OPTIONS);
        const json = await data.json();
        console.log("JSONMovietrailer", json)
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer, "trailer")
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        //If trailerVideo is not there in store then only make api call this is memoization
        !trailerVideo && getMovieVideo();
      },[])
}
export default useMovieTrailer;