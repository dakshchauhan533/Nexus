import { useEffect, useRef } from "react";

import UseGetMessage from "../../hooks/UseGetMessage.js";
import Messageskeleton from "../skeletons/messageskeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  // const { messages, loading } = UseGetMessage();
  const { messages, loading } = UseGetMessage();

  useListenMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
    // console.log("Messages State:", messages); // This will log the messages state
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);




  // console.log("messages:",messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message  message={message} />
          </div>
        ))} */}

{!loading && Array.isArray(messages) && messages.length > 0 && messages.map((message) => (
  <div key={message._id} ref={lastMessageRef}>
    <Message message={message} />
  </div>
))}


      {loading && [...Array(3)].map((_, idx) => <Messageskeleton key={idx} />)}

      {!loading && messages.length == 0 && (
        <p className="text-center">send a message to start conversation </p>
      )}
    </div>
  );
};

export default Messages;

// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
// <Message />
