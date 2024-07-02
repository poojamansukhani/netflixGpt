import React from "react";
import { Img_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
    return(
        <div className="px-1" style={{flex: "0 0 200px"}}>
            <img alt="Movie Card" src={Img_CDN_URL+ posterPath} className="cursor-pointer"/>
        </div>
    )
}
export default MovieCard;