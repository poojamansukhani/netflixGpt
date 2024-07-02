import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import Header from "./Header"
import { useDispatch } from "react-redux";
import { addNowPLayingMovies } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoview = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    const mov = json.results;
    console.log(mov);
    dispatch(addNowPLayingMovies(json.results));
  }
  useEffect(() => {
    getNowPlayingMoview()
  },[])
  return (
    <div>
        <Header/>
        <div>
          {/* {Object.keys(mov).map(movie=>{
            <div>{movie.original_title}</div>
          })} */}
        {/* {mov.map(movie=>{
          <div>{movie.original_title}</div>
        })} */}
        </div>
    </div>
  )
}

export default Browse