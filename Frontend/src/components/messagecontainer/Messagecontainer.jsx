import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import Messageinput from "./Messageinput";
import {useAuthContext} from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";

const Messagecontainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

useEffect(() => {
  return () => {
    setSelectedConversation(null);
  }
}, [setSelectedConversation]);

  return (
    <div className="md:min-w-[455px] flex flex-col">
      {!selectedConversation ? (
        <Nochatselected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text font-semibold">To: &nbsp;</span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <Messageinput />
        </>
      )}
    </div>
  );
};

export default Messagecontainer;

const Nochatselected = () => {
  const {authuser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col item-center gap-2 ">
        <p>Welcome. 👋 <b>{authuser.fullName}</b> </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-gray-300 text-center md:text-6xl" />
      </div>
    </div>
  );
};
