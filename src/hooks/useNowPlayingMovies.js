import { useDispatch, useSelector } from "react-redux";
import { addNowPLayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
   // const nowPLayingMovie = useSelector(store=>store.movie.nowPlayingMovies);
  const getNowPlayingMoview = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    const mov = json.results;
    dispatch(addNowPLayingMovies(json.results));
  }
  useEffect(() => {
    //If nowPLayingMovie is not there in store then only make api call this is memoization
   // !nowPLayingMovie && getNowPlayingMoview()
   getNowPlayingMoview()
  },[])
}
export default useNowPlayingMovies;