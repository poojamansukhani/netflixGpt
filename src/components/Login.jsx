import { useRef, useState } from "react"
import Header from "./Header"
import {validate} from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const toggleSignIn = () =>{
        setIsLogin(!isLogin);
    }
    const handleButtonClick = () =>{
       const errMsg = validate(email.current.value, password.current.value, name.current.value);   
       setErrorMsg(errMsg); 
       //if any error msg is there retun this function
       if(errMsg) return;
      // if no error msg then proceed below code 
        //create a new user in firebase  signin / signup
        if(!errMsg){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + errorMessage);
            });
        }else{
            //Signin logic
        }
    }
  return (
    <div>
        <Header/>
        <div className="banner">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
            <div className="absolute z-10 w-3/12 loginForm bg-black text-center p-8 text-white bg-opacity-70">
                <h1 className="text-3xl font-bold mb-6">Sign {isLogin ? "In" : "Up"}</h1>
                <form onSubmit={(e)=>(e.preventDefault())}>
                    {!isLogin && (
                        <div className="form-control mb-6">
                            <input ref={name} type="text" placeholder="Full Name" className="p-4 w-full bg-slate-600 rounded-lg"/>
                        </div>
                    )}
                    <div className="form-control mb-6">
                        <input ref={email} type="text" placeholder="Email Address" className="p-4 w-full bg-slate-600 rounded-lg"/>
                    </div>
                    <div className="form-control mb-6">
                         <input ref={password} type="password" placeholder="Password" className="p-4 w-full bg-slate-600 rounded-lg"/>
                    </div>
                    <p className="text-red-500 text-left">{errorMsg}</p>
                    <div className="form-contro mb-4">
                        <button onClick={handleButtonClick} className=" bg-red-800 p-4 mt-4 w-full font-bold rounded-lg text-2xl" type="button">Sign {isLogin ? "In" : "Up"}</button>
                    </div>
                    <p className="text-left">{isLogin ? "New to Netflix ? " : "Already registered user ? "} <span className=" cursor-pointer" onClick={toggleSignIn}>Sign {isLogin ? "Up" : "In"} now</span></p>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login