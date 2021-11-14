import { createContext,useState } from "react";
export const AuthContext= createContext();

export const AuthContextProvider=({children})=>{
    const[isLoggedIn,setLoggedIn]=useState(false)

    const login=(email,password) =>{
        
        if (email === "fathi@gmail.com"&& password ==="123456"){
            setLoggedIn(true);
            console.log("Login");
            return true;
            
        
        }
        else {
            return false;
        }
    }
    const logout=()=>{
        setLoggedIn(false);
    }
    return(
        <AuthContext.Provider
        value={{login ,logout,isLoggedIn}}>{children}
        </AuthContext.Provider>
    )
}