import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleSignIn = () =>{
        setIsLogin(!isLogin);
    }
  return (
    <div>
        <Header/>
        <div className="banner">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
            <div className="absolute z-10 w-3/12 loginForm bg-black text-center p-8 text-white bg-opacity-70">
                <h1 className="text-3xl font-bold mb-6">Sign {isLogin ? "In" : "Up"}</h1>
                <form>
                    {!isLogin && (
                        <div className="form-control mb-6">
                            <input type="text" placeholder="Full Name" className="p-4 w-full bg-slate-600 rounded-lg"/>
                        </div>
                    )}
                    <div className="form-control mb-6">
                        <input type="text" placeholder="Email Address" className="p-4 w-full bg-slate-600 rounded-lg"/>
                    </div>
                    <div className="form-control mb-6">
                         <input type="password" placeholder="Password" className="p-4 w-full bg-slate-600 rounded-lg"/>
                    </div>
                    <div className="form-contro mb-4">
                        <button className=" bg-red-800 p-4 mt-4 w-full font-bold rounded-lg text-2xl" type="button">Sign {isLogin ? "In" : "Up"}</button>
                    </div>
                    <p className="text-left">{isLogin ? "New to Netflix ? " : "Already registered user ? "} <span className=" cursor-pointer" onClick={toggleSignIn}>Sign {isLogin ? "Up" : "In"} now</span></p>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login