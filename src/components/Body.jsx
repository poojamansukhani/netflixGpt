import { createBrowserRouter, useNavigate } from "react-router-dom"
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              //Sign in case 
              const {uid, email, displayName, photoURL} = user;
              //Update store dispatch action 
              dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));

            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    },[])
  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body;