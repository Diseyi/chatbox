import React from "react";

interface Props {
  text: any;
  handleClick?: any;
}

const ChatReply = ( props: Props ) => {
    return (
      <div className="flex justify-end  ">
        <button className="border text-[#D4F1F4] bg-[#189AB4] p-3 text-sm rounded-tl-lg rounded-br-lg rounded-bl-lg text-end my-2">
          {props.text}
        </button>
      </div>
    );
};

export default ChatReply;
