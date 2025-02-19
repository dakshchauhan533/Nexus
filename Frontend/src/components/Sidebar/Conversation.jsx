import useConversation from "../../zustand/useConversation.js";
import {useSocketContext} from "../../context/Socketcontext.jsx";
const Conversation = ({conversation,lastidx,key}) => {
  const {selectedConversation,setSelectedConversation} = useConversation();

  const isselected = selectedConversation?._id == conversation._id;
  const {onlineuser} = useSocketContext();
  const isonline = onlineuser.includes(conversation._id);
  return (
   <>
   <div className={`flex gap-2 items-center p-2  py-1 hover:bg-sky-500 cursor-pointer ${isselected ? "bg-sky-500": ""}`} onClick={()=>setSelectedConversation(conversation)}>
   <div className={`avatar ${isonline ? "online" : ""}`}>
  <div className="w-12 rounded-full">
    <img src={conversation.profilePic} />
  </div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between gap-3">
<p className="font-bold text-gray-200">{conversation.fullName}</p>
<span className="text-xl">🌟</span>
</div>
</div>
   </div>
   
   
   {!lastidx && <div className="my-0 py-0  h-1 divider"></div>}
   
   </>
  )
}

export default Conversation
