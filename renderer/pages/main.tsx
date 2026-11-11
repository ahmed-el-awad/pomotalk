import Goals from "../components/goals";
import Chat from "../components/chat";
import Alarm from "../components/alarm";
import { Header } from "../components/header";

export default function Main() {
  return (
    <div className="grid grid-cols-10">
      <div className="leftSide bg-temp-4 col-span-8 rounded-xl p-3">
        <Header />
        <div className="flex flex-col content-around">
          <div>
            <Goals />
          </div>
          {/* <div className="mt-auto">
            <Alarm />
          </div> */}
        </div>
      </div>
      <div className="rightSide col-span-2">
        <Chat />
      </div>
    </div>
  );
}
