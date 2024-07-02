import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {LOGO} from "../utils/constant";
const Header = () => {
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
  return (
    <div className="fixed top-0 bg-gradient-to-b from-black py-2 w-[100%] z-10 flex justify-between">
        <img src={LOGO} alt="" className="w-[167px]"/>
        {user && 
        <div className="flex align-center justify-center">
          <img src={user?.photoURL} alt="" className="w-12 h-12"/>
          <button className="text-white" onClick={handleSignOut}>Sign Out</button>
        </div>
        }
    </div>
  )
}

export default Header