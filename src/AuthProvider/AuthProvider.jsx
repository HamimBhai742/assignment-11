import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../AuthConfig/firebase-auth-config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const createUserAccout = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        createUserAccout
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