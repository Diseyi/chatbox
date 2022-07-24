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
    <div className=" ">
      <div className="fixed bottom-10 right-4">
        {!showChatbox && (
          <div
            className="w-16 h-16 rounded-full bg-[#05445E] flex items-center justify-center"
            onClick={handleClick}
          >
            <MessageOutlined style={{ fontSize: "32px", color: "white" }} />
          </div>
        )}

        {showChatbox && (
          <div className="relative w-96 h-[600px]  rounded border overflow-none bg-[#D4F1F4] border-[#189AB4] mt-10 mx-auto">
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
