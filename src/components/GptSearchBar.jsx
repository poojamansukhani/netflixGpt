import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from '../utils/openAI';

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
    const searchText = useRef(null);
    const handleGptSearchClick = async () =>{
        console.log(searchText.current.value)
        const gptQuery = "Act as a movie Recommendation system & suggest some moview for the query : " + searchText.current.value + " . only give me names of 5 movies, comma seperated like the exaple result given ahead. Example Result : Gadar, Don, Sholey, Golmal, Elemental";
        //Make an API call to open AI GPT & get movie results
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults.choices)
    }
    return(
        <>
            <form className="gptForm d-flex" onSubmit={(e)=>e.preventDefault()}>
                <idiv className="form-control">
                    <input className="p-4" type="text" placeholder={lang[langKey].searchPlaceholder} ref={searchText}/>
                </idiv>
                <div className="form-control">
                    <button className="-ml-10" onClick={handleGptSearchClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="red"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    </button>
                </div>
            </form>
        </>
    )
}
export default GptSearchBar;