import useGetConversation from "../../hooks/UseGetConversation";
import Conversation from "./Conversation.jsx"

const Conversations = () => {
  const {loading,conversations} = useGetConversation();
  //  console.log("Conversations:",conversations);
  return (
    <div className="flex flex-col overflow-auto py-2">
        {conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id} conversation={conversation} lastidx={idx===conversations.length-1}/>
        ))}
    </div>
  )
}

export default Conversations
