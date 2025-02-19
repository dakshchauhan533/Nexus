
import { useState } from "react";
import {useAuthContext} from "../context/AuthContext";
import {toast} from "react-hot-toast";



 export const UseLogin = ()=>{


    const [loading, setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();


    const login = async (userName, password) => {
        setLoading(true);
    try{
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                userName,
                password
            }),
        });
        const data = await res.json();

        if(data.error){
            throw new Error(data.error);
        }

        // localstorage
        localStorage.setItem("nexus-user", JSON.stringify(data));
        // context
        setAuthuser(data);

        if(data){
            console.log(data);
            toast.success("Logged in successfully");
        }
    }catch(e){
        console.log(e.message);
        toast.error(e.message);
    } finally{
        setLoading(false);
    }






};
return {loading, login};


}
