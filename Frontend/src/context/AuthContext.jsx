import { createContext,useState,useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {

    const [authuser, setAuthuser] = useState(JSON.parse(localStorage.getItem("nexus-user")) || null);


    return <AuthContext.Provider value={{authuser,setAuthuser}}>{children}</AuthContext.Provider>;
};