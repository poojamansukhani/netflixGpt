import { useDispatch } from "react-redux";
import { addNowPLayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
  const getNowPlayingMoview = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    const mov = json.results;
    dispatch(addNowPLayingMovies(json.results));
  }
  useEffect(() => {
    getNowPlayingMoview()
  },[])
}
export default useNowPlayingMovies;