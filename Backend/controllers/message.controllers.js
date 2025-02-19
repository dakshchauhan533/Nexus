import  Conversation  from "../models/conversation.model.js";
import  Message  from "../models/message.model.js";

import { getrecieversocketid,io } from "../socket/socket.js";
// sendMessage controller
export const sendMessage = async (req, res) => {
   try {
    const {message} = req.body;
    const {id:recieverId} = req.params;
    const senderId = req.user._id;

    let conversation=   await Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, recieverId],
        });
      }

      const newMessage = new Message({
         senderId,
         recieverId,
         message
      })

      if(newMessage){
         conversation.messages.push(newMessage._id);
      }

      await Promise.all([conversation.save(), newMessage.save()]);  //this will run in parellel
      
      
      const recieversocketid = getrecieversocketid(recieverId);
      
      console.log("Reciever socket ID:", recieversocketid);
      
      if(recieversocketid){
         io.to(recieversocketid).emit("newMessage",newMessage);
         console.log("✅ Emitted 'newMessage' event to:", recieversocketid);
      }else {
         console.log("⚠️ Receiver is offline, message not emitted via socket.");
     };
      res.status(201).json(newMessage);


   } catch (error) {
    console.log("Error in sendMessage controller", error);
     res.status(500).json({ error: error.message });
    
   } // await conversation.save();
      // await newmessage.save();

      // SOCKET.IO will be here


};

export const getMessages = async (req, res) => {   
   try{
      const {id:userToChatId} = req.params;

      const senderId = req.user._id;

      const conversation = await Conversation.findOne({
         participants: { $all: [senderId, userToChatId] },
      }).populate("messages");   //not reference but actual messages
      if(!conversation){
         return res.status(200).json([]);
      }
      const messages = conversation.messages;

      res.status(200).json(messages);

   }catch(error){
      console.log("Error in getMessages controller", error);
      res.status(500).json({ error: error.message });
   }
};