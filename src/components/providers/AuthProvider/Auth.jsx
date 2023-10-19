import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,signInWithEmailAndPassword, signOut,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import App from "../../Firebase";

export const AuthContext =createContext(null)
const auth =getAuth(App)
const Auth = ({children}) => {
    const [user ,setUser]=useState(null)
    const googleProvider =  new GoogleAuthProvider();
    //google function
    const googleSignIn = ()=>{
        
        return signInWithPopup(auth, googleProvider)
     }
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
       logOut,
       googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Auth;