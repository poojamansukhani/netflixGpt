
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="px-8">
        <Header/>
        {showGPTSearch ?(
          <GPTSearch/>
        ) : (<><MainContainer/>
        <SecondaryContainer/></>)}
    </div>
  )
}

export default Browse