import "./App.css";
import Chatbox from "./component/chatbox";
import Header from "./component/header";
import Blog from "./component/Test";

function App() {
  return (
    <div className=" ">
      <div className="relative w-96 h-[500px] overflow-scroll rounded border bg-[#D4F1F4] border-[#189AB4] mt-10 mx-auto">
        <Header />
        <Chatbox />
        {/* <Blog /> */}
      </div>
    </div>
  );
}

export default App;
