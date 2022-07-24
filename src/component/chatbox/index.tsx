import React, { useRef } from "react";
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

  const displayQuestion = (questions: any) => {
    questions.map((message: any) => {
      const div = document.createElement("div");
      const button = document.createElement("button");

      div.className = "flex hide flex-wrap gap-2 ";
      button.className =
        "py-2 px-4 border text-sm rounded-full bg-[#ffafcc] text-[#05445E]";
      button.addEventListener("click", handleClick);

      button.innerText = message.text;
      div.appendChild(button);
      containerRef.current.appendChild(div);
    });
  };

  const displayAnswer = (answers: any) => {
    answers.map((message: any) => {
      const div = document.createElement("div");
      const button = document.createElement("div");
      div.className = "flex ";
      button.className =
        "border bg-[#189AB4] text-[#D4F1F4] inline-flex p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-1";

      button.innerText = message.text;
      div.appendChild(button);
      containerRef.current.appendChild(div);
    });
  };

  const displayReply = (reply: any) => {
    const div = document.createElement("div");
    const button = document.createElement("div");
    div.className = "flex justify-end";
    button.className =
      "border text-[#05445E] border-[#189AB4] inline-flex p-3 text-sm rounded-tl-lg rounded-br-lg rounded-bl-lg text-end my-2";

    button.innerText = reply;
    div.appendChild(button);
    containerRef.current.appendChild(div);
  };

  const sendMessage = () => {
    const div = document.createElement("div");
    const anchor = document.createElement("a");

    anchor.href = "mailto:filomiinaa@gmail.com";

    div.className = "w-full ";
    anchor.className =
      "w-full block mt-4 tetx-sm text-center border bg-[#189AB4] text-[#D4F1F4] cursor-pointer  p-4 text-sm rounded";

    anchor.innerText = "Send me a message";

    div.appendChild(anchor);
    containerRef.current.appendChild(div);
  };

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
      sendMessage();
    }
  };

  return (
    <div className="px-3 border ">
      <div className="my-2">
        {welcomeMessage.map((message) => {
          return (
            <div
              key={message.id}
              className="border bg-[#189AB4] text-[#D4F1F4] inline-flex p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-1"
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
              className="py-2 px-4 border text-sm rounded-full bg-[#ffafcc] text-[#05445E] "
              onClick={handleClick}
            >
              {botQuestions.text}{" "}
            </button>
          );
        })}
      </div>

      <div ref={containerRef}></div>
      <div></div>
    </div>
  );
};

export default Chatbox;
