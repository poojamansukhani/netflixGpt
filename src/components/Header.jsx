import { Link, useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {LOGO} from "../utils/constant";
import {toggleGPTSearchView} from '../utils/gptSlice';
import {supportedLang} from "../utils/constant";
import {changeLanguage} from "../utils/configSlice";
const Header = () => {
  const langRef = useRef()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          //Sign in case 
          const {uid, email, displayName, photoURL} = user;
          //Update store dispatch action 
          dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
          navigate("/browse");

        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      //we need to unmount onAuthStateChanged otherwise so this provides sunsubscribe function we need to call in return 
      //In user effect return we can unmount 
      return () => unsubscribe()
},[])
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened. error page redirection
      navigate("/")
    });
  }
  const handleShowHideGPT = () => {
    console.log("Hi")
    dispatch(toggleGPTSearchView())
  }
  const handleLanguageChange = () =>{
    dispatch(changeLanguage(langRef.current.value));
  }
  return (
    <div className="fixed top-0 bg-gradient-to-b from-black py-2 w-[100%] z-10 flex justify-between">
        <img src={LOGO} alt="" className="w-[167px]"/>
        {user && 
        <div className="flex align-center justify-center">
          <select className="p-2 bg-gray-900 text-white h-10 rounded-lg mr-5" onChange={handleLanguageChange} ref={langRef}>
            {supportedLang.map((lang)=>{
              return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            })}
          </select>
          <button className="px-4 bg-white text-black rounded-lg mr-5 h-10" onClick={handleShowHideGPT}>GPT Search </button>
          <img src={user?.photoURL} alt="" className="w-12 h-12"/>
          <button className="text-white" onClick={handleSignOut}>Sign Out</button>
        </div>
        }
    </div>
  )
}

export default Header