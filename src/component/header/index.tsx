import { CloseOutlined } from "@ant-design/icons";
import React from "react";

interface Props {
  handleClick?: any;
}

const Header = (props: Props) => {
  return (
    <div className=" py-5 flex justify-between z-10 rounded items-center bg-[#05445E] sticky px-6 top-0 w-full">
      <div className="flex space-x-3 ">
        <div className="border w-12 bg-[#189AB4] h-12 rounded-full ">
          <img
            className="h-12 w-12 rounded-full"
            src="https://joeschmoe.io/api/v1/random"
            alt=""
          />
        </div>
        <div className="">
          <div className="text-white font-semibold ">Diseyi Bot</div>
          <div className="text-sm text-white font-light ">
            Ask me any question
          </div>
        </div>
      </div>
      <div className="" onClick={props.handleClick} >
        <CloseOutlined style={{ color: "white " }} />
      </div>
    </div>
  );
};

export default Header;
