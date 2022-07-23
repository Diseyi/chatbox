import React from 'react'

interface Props {
    text: string,
    handleClick: any
}

const Chat = (props: Props) => {
  return (
    <button
      className="border bg-[#189AB4] text-[#D4F1F4]  p-3 text-sm rounded-tr-lg rounded-br-lg rounded-bl-lg text-start my-2"
      onClick={props.handleClick}
    >
      {" "}
      {props.text}{" "}
    </button>
  );
}

export default Chat