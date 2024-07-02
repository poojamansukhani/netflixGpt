
import useMovieTrailer from '../hooks/usemovieTrailer';
import { useDispatch, useSelector } from "react-redux";
const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer(movieId)
    return(
        <>
        <iframe src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </>
    )
}
export default VideoBackground;