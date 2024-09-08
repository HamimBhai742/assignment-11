import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../AuthConfig/firebase-auth-config";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider()

    const createUserAccout = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUserAccount = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
            const emailUser = currentUser?.email || user?.email
            const loggedUser = { email: emailUser }
            if (currentUser) {
                axios.post('https://assignment-11-server-liard-five.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post('https://assignment-11-server-liard-five.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unSubscribe
        }
    }, [])

    const userInfo = {
        user,
        createUserAccout,
        logInUserAccount,
        loginWithGoogle,
        logOut,
        loding
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;