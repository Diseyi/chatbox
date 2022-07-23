import React, { useRef } from "react";
import Chat from "../chat";

const Chatbox = () => {
  const containerRef = useRef(null);
  const messageList = [
    {
      text: "Hi, I'm Brightness, Diseyi's Bot",
          id: 1,
    },
    {
      text: "I’m just like Seán, but a far better conversationalist 😉",
      id: 2,
    },
    {
      text: "I’m here to help you with your queries and issues",
      id: 3,
    },
    {
      text: "How can I help you today?",
      id: 4,
    },
  ];

  const displayQuestion = (question: any) => {
    question.map((message: any) => {
      const questionNode = document.createElement("button");
      questionNode.addEventListener("click", handleClick);

      questionNode.className =
        "border bg-[#189AB4] text-[#D4F1F4]  p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-2";
      questionNode.innerText = message.text;
      containerRef.current.appendChild(questionNode);
    });
  };

  const displayReply = (reply: any) => {
    const replyNode = document.createElement("div");
    const containerNode = document.createElement("div");
    containerNode.className = "flex justify-end ";
    replyNode.className =
      "border border-[#189AB4] text-[#05445E]  p-3 text-sm rounded-tl-lg rounded-br-lg rounded-bl-lg text-end my-2";
    replyNode.innerText = reply;
    containerNode.appendChild(replyNode);
    containerRef.current.appendChild(containerNode);
  };

  const handleClick = (event: any) => {
    const reply = event.target.innerText;
    const filterQuestion = messageList.filter(
      (message) => message.text !== reply
    );
    displayReply(reply);
    setTimeout(() => {
      displayQuestion(filterQuestion);
    }, 1000);
  };

  return (
    <div className="px-3 border   ">
      {messageList.map((message) => {
        return (
          <Chat
            text={message.text}
            key={message.id}
            handleClick={handleClick}
          />
        );
      })}

      <div ref={containerRef}></div>
    </div>
  );
};

export default Chatbox;
