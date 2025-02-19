
// import {useAuthContext} from "../../context/AuthContext";

// import useConversation from "../../zustand/useConversation";


// const Message = ({message}) => {

//   const {authuser} = useAuthContext();
// const {selectedConversation} = useConversation();
//   const fromme = message.senderId === authuser._id;
//  const chatclassname = fromme ?  " chat-end ":"chat-start";

//  const chatbubbleclassname = fromme ? "bg-blue-500" : "";
//  const profilepic = fromme ? authuser.profilePic : selectedConversation?.profilePic;
// console.log(message.message);
//   return (
//     <div className={`chat ${chatclassname}`}>
//        <div className="chat-image avatar">
//     <div className="w-6 rounded-full">
//       <img
//         alt="Tailwind CSS chat bubble component"
//         src={profilepic} />
//     </div>
//   </div>
//   <div className={`chat-bubble text-white bg-blue-500 ${chatbubbleclassname}`}>{message.message}</div>
//   <div className="chat-footer opacity-70 text-xs flex gap-1 items-center">{message.createdAt}</div>
//     </div>
//   );
// };

// export default Message;
import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message ,key}) => {

	const { authuser } = useAuthContext();
	const { selectedConversation } = useConversation();
	// const fromMe = message.senderId === authuser._id;
	const fromMe = message.senderId?.toString() === authuser._id?.toString();




	
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	
	const profilePic = fromMe ? authuser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";



	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>45.5</div>
		</div>
	);
};
export default Message;