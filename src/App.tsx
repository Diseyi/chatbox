import MessageOutlined from "@ant-design/icons/lib/icons/MessageOutlined";
import "./App.css";
import Chatbox from "./component/chatbox";
import Header from "./component/header";

function App() {
  return (
    <div className=" ">
      <div className="">
      <MessageOutlined />
      </div>
      <div className="relative w-96 h-[500px]  rounded border overflow-none bg-[#D4F1F4] border-[#189AB4] mt-10 mx-auto">
        <Header />
        <div className="w-full h-[410px] overflow-y-scroll scroll-style ">
          <Chatbox />
        </div>
      </div>
    </div>
  );
}

export default App;
