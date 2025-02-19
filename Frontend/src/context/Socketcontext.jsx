import { createContext , useState , useEffect,useContext} from "react";
import {useAuthContext} from "./AuthContext";
 const SocketContext = createContext();
import io from "socket.io-client";

export const useSocketContext = () => {
    return useContext(SocketContext);
};



export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineuser,setonlineuser] = useState([]);

    const {authuser} = useAuthContext();

    // useEffect(() => {
    //     if(authuser){
    //         const socket = io("http://localhost:8000", {
                
    //             query: {
    //                 userId: authuser._id
    //             }
    //         });
    //         setSocket(socket);

    //         socket.on("getonlineusers", (users) => {    
    //             setonlineuser(users);
    //         });

    //         return () => socket.close();
    //     }else{
    //         if(socket){
    //             socket.close();
    //             setSocket(null);
    //         }
    //     }
    // }, [authuser]);

    useEffect(() => {
        if(authuser){
            const socket = io("http://localhost:8000", {  
                query: { userId: authuser._id }  
            });
    
            setSocket(socket);
    
            socket.on("connect", () => {
                console.log("Socket connected:", socket.id);
            });
    
            socket.on("disconnect", () => {
                console.log("Socket disconnected");
            });
    
            socket.on("getonlineusers", (users) => {
                console.log("Online users:", users);
                setonlineuser(users);
            });
    
            return () => socket.close();
        }
    }, [authuser]);
    

    return (
        <SocketContext.Provider value={{socket,onlineuser}}>
            {children}
        </SocketContext.Provider>
    )



}