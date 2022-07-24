import React, { useState } from "react";
import MessageOutlined from "@ant-design/icons/lib/icons/MessageOutlined";
import "./App.css";
import Chatbox from "./component/chatbox";
import Header from "./component/header";

function App() {
  const [showChatbox, setShowChatbox] = useState(false);

  const handleClick = () => {
    setShowChatbox(true);
  };

  return (
    <div className=" bg-[#e2eafc] h-screen ">
      <div className="text-center text-3xl font-bold py-4 capitalize">click on the chat icon</div>
      <div className="md:fixed md:bottom-10 right-0 md:right-4">
        {!showChatbox && (
          <div
            className="w-16 h-16 rounded-full bg-[#05445E] mx-2 my-2 flex items-center justify-center"
            onClick={handleClick}
          >
            <MessageOutlined style={{ fontSize: "32px", color: "white" }} />
          </div>
        )}

        {showChatbox && (
          <div className="relative m-4 md:w-96 h-[600px]  rounded shadow-lg overflow-none bg-[#ffffff] border-[#189AB4]">
            <Header handleClick={ () => setShowChatbox(false) } />
            <div className="w-full h-[510px] overflow-y-auto">
              <Chatbox />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
