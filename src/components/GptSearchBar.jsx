import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
    const langKey = useSelector(store=>store.config.lang);
    return(
        <>
            <form className="gptForm d-flex">
                <idiv className="form-control">
                    <input className="p-4" type="text" placeholder={lang[langKey].searchPlaceholder}/>
                </idiv>
                <div className="form-control">
                    <button className="-ml-10">
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