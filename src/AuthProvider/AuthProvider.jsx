import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../AuthConfig/firebase-auth-config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider()

    const createUserAccout = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUserAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // setLoder(false)
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
        logOut
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