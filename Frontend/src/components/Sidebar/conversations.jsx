import UseGetConversation from "../../hooks/UseGetConversation.js";
import Conversation from "./Conversation.jsx"

const conversations = () => {
  const {loading,conversations} = UseGetConversation();
  //  console.log("Conversations:",conversations);
  return (
    <div className="flex flex-col overflow-auto py-2">
        {conversations.map((conversation,idx)=>(
          <Conversation key={conversation._id} conversation={conversation} lastidx={idx===conversations.length-1}/>
        ))}
    </div>
  )
}

export default conversations
