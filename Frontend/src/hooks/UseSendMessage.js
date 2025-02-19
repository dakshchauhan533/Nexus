//? Summary: This file contains the hook to send messages to the server
import {useState} from 'react';
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import {useAuthContext} from "../context/AuthContext";

const UseSendMessage = () => {
  const [loading,setloading]=useState(false)
    const{selectedConversation,messages,setMessages}=useConversation()

    const {authuser} = useAuthContext();

    const sendMessage = async (message) => {
      setloading(true)
      try {
        const response = await fetch(
            `/api/messages/send/${selectedConversation._id}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message
              }),
            }
          );
          const data = await response.json();
          console.log("Sent message response:", data);
 
          if (data.error) 
            throw new Error(data.error);
          
          const newMessage = {
            ...data, 
            senderId: authuser._id // Manually set senderId
          };
          setMessages([...messages,newMessage])



      } catch (error) {
        toast.error(error.message)
        console.log(error)
      } finally {
        setloading(false)
      }
     
     
    };
    
    return {loading,sendMessage}
}

export default UseSendMessage
