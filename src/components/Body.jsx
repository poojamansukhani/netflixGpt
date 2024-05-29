import { createBrowserRouter } from "react-router-dom"
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { getAuth } from "firebase/auth";



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
    
  return (
    <>
        <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body;