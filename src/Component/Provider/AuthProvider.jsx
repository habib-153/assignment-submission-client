/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithPass = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gProvider = new GoogleAuthProvider()
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, gProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const handleUpdateProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post('https://assignment-11-server-side-category-0001.vercel.app/jwt',loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log('token response', res.data)
                })
            }
            else{
                axios.post('https://assignment-11-server-side-category-0001.vercel.app/logout', loggedUser,{withCredentials: true})
                .then(res =>{
                    console.log("hitted",res.data)
                })
            }
        });
        return ()=>{
            unsubscribe();
        }
    },[user?.email])

    const userInfo ={
        user,
        createUser,
        loginWithPass,
        logOut,
        handleUpdateProfile,
        loading,
        signInWithGoogle,
        setLoading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;