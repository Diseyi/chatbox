import React, { useRef, useState } from "react";
import {
  replyHello,
  replyOtherOption,
  replyCollaborate,
  replyMentorship,
  replyHire,
  welcomeMessage,
  botQuestions,
  hire,
} from "../../utilities/data";

const Chatbox = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [sendMessage, setSendMessage] = useState(false);

  const displayQuestion = (questions: any) => {
    questions.map((message: any) => {
      const div = document.createElement("div");
      const button = document.createElement("button");

      div.className = "flex hide flex-wrap gap-2 ";
      button.className =
        "py-2 px-4 border text-sm rounded-full bg-[#B1B1B1] hover:bg-[#747474] text-black";
      button.addEventListener("click", handleClick);

      button.innerText = message.text;
      div.appendChild(button);
      containerRef.current?.appendChild(div);
    });
  };

  const displayAnswer = (answers: any) => {
    answers.map((message: any) => {
      const div = document.createElement("div");
      const button = document.createElement("div");
      div.className = "flex ";
      button.className =
        "border border-[#0A0708]  text-black inline-flex p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-1";

      button.innerText = message.text;
      div.appendChild(button);
      containerRef.current?.appendChild(div);
    });
  };

  const displayReply = (reply: any) => {
    const div = document.createElement("div");
    const button = document.createElement("div");
    div.className = "flex justify-end";
    button.className =
      " text-white bg-[#444444] inline-flex p-3 text-sm rounded-tl-lg rounded-br-lg rounded-bl-lg text-end my-2";

    button.innerText = reply;
    div.appendChild(button);
    containerRef.current?.appendChild(div);
  };

  // const sendMessage = () => {
  //   const div = document.createElement("div");
  //   const anchor = document.createElement("a");

  //   anchor.href = "mailto:filomiinaa@gmail.com";

  //   div.className = "w-full ";
  //   anchor.className =
  //     "w-full block mt-4 tetx-sm text-center border bg-[#189AB4] text-[#D4F1F4] cursor-pointer  p-4 text-sm rounded";

  //   anchor.innerText = "Send me a message";

  //   div.appendChild(anchor);
  //   containerRef.current?.appendChild(div);
  // };

  const handleClick = (event: any) => {
    const reply = event.target.innerText;

    const divs = document.querySelectorAll("button");
    divs.forEach((div: any) => {
      div.remove();
    });

    const filteredReply = botQuestions.filter((item) => item.text !== reply);

    if (reply === "I just wanted to say hello") {
      displayReply(reply);
      setTimeout(() => {
        displayAnswer(replyHello);
        displayQuestion(filteredReply);
      }, 1000);
    }
    if (reply === "Interested in mentorship") {
      displayReply(reply);
      setTimeout(() => {
        displayAnswer(replyMentorship);
        displayQuestion(filteredReply);
      }, 1000);
    }

    if (reply === "how can I collaborate with you?") {
      displayReply(reply);
      setTimeout(() => {
        displayAnswer(replyCollaborate);
        displayQuestion(filteredReply);
      }, 1000);
    }

    if (reply === "I'd like to hire you!") {
      displayReply(reply);
      setTimeout(() => {
        displayAnswer(replyHire);
        displayQuestion(hire);
      }, 1000);
    }
    if (reply === "Other options?") {
      displayReply(reply);
      setTimeout(() => {
        displayAnswer(replyOtherOption);
        displayQuestion(botQuestions);
      }, 1000);
    }
    if (reply === "Send a message") {
    setSendMessage(true);
    }
  };

  return (
    <div className="px-3 ">
      {!sendMessage ? (
        <div>
          <div className="my-2">
            {welcomeMessage.map((message) => {
              return (
                <div
                  key={message.id}
                  className="border border-[#0A0708]  text-black inline-flex p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-1"
                >
                  {message.text}{" "}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-1">
            {botQuestions.map((botQuestions) => {
              return (
                <button
                  key={botQuestions.id}
                  className="py-2 px-4 border text-sm rounded-full bg-[#B1B1B1] hover:bg-[#747474] text-black "
                  onClick={handleClick}
                >
                  {botQuestions.text}{" "}
                </button>
              );
            })}
          </div>

          <div ref={containerRef}></div>
        </div>
      ) : (
        <form className="mt-4">
          <h2 className="text-base text-center my-2">
            I'll get back to you shortly
          </h2>
          <label htmlFor="name" className="block text-sm py-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 border mb-2"
          />
          <label htmlFor="email" className="block text-sm py-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full p-2 border mb-2"
            placeholder=""
          />
          <label htmlFor="email" className="block text-sm py-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full p-2 border mb-2"
          />
          <label htmlFor="message" className="block text-sm py-1">
            How can I help you?{" "}
          </label>
          <textarea name="" id="" rows={5} className="border w-full"></textarea>
          <button className="w-full block mt-4 tetx-sm text-center border bg-[#189AB4] text-[#D4F1F4] cursor-pointer  p-4 text-sm rounded">
            {" "}
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Chatbox;
