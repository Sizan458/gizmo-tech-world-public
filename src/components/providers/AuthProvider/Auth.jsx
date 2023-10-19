import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import App from "../../Firebase";

export const AuthContext =createContext(null)
const auth =getAuth(App)
const Auth = ({children}) => {
    const [user ,setUser]=useState(null)
    //email  function
    const userEmail =(email, password) => {
        return createUserWithEmailAndPassword( auth ,email, password)
    };
    //sign in  function
    const signIn=(email,password) => {
      return signInWithEmailAndPassword( auth ,email, password)
    };
    //sign out function
    const logOut=()=>{
        return signOut(auth);
    }
    //keep the current user
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe
        }
    },[]);
    const authInfo ={
       userEmail,
       signIn,
       user,
       logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Auth;