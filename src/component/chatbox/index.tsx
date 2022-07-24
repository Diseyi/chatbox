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
      text: "I’m just like Diseyi, but a far better conversationalist 😉",
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

  const bot = [
    {
      id: 5,
      question: "I just wanted to say hello",
      answers: [
        "Well hello there!",
        "Well hello there!",
        "I hope you've enjoyed browsing my work",
        "Can I help you with anything else?",
      ],
    },
    {
      id: 6,
      question: "Interested in mentorship",
      answers: [
        "Hi!",
        "Thanks for reaching out",
        "Unfortunately, I don't currently have any capacity to take on the role of mentor for any new students this year",
        "Thanks for understanding",
        "Can I help you with anything else?",
      ],
    },
    {
      id: 7,
      question: "how can I collaborate with you?",
      answers: [
        "Ok, great",
        "Exciting times 🕺",
        "Send me a message and lets chat further!",
      ],
    },
    {
      id: 8,
      question: "I'd like to hire you!",
      answers: [
        "Ok, great",
        "Exciting times 🕺",
        "Send me a message and lets chat further!",
      ],
      connect: ["Send a message", "Other options?"],
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

    const filterQuestion = bot.filter(
      (message) => message.question !== reply
    );

    displayReply(reply);
    // setTimeout(() => {
    //   displayQuestion(filterQuestion);
    // }, 1000);
    console.log(filterQuestion)

  };

  return (
    <div className="px-3 border   ">
      {messageList.map((message) => {
        return (
          <Chat
            text={message.text}
            key={message.id}
          />
        );
      })}

      <div className="flex flex-wrap gap-2">
        {bot.map((bot) => {
          return (
            <button key="bot.id" className="py-3 px-4 border rounded-full bg-[#ffafcc] text-[#05445E] font-semibold  " onClick={handleClick} >
              {bot.question}{" "}
            </button>
          );
        })}
      </div>

      <div ref={containerRef}></div>
    </div>
  );
};

export default Chatbox;
