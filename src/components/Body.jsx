import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Body = () => {
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
              const {uid, email, displayNanme} = user;
              
              // ...
            } else {
              // User is signed out
              // ...
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