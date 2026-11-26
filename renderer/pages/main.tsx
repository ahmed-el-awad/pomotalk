import Goals from "../components/goals";
import Chat from "../components/chat";
import Alarm from "../components/alarm";
import { Header } from "../components/header";

export default function Main() {
  return (
    <section className="grid grid-cols-10">
      <div
        id="leftSide"
        className="bg-temp-4 col-span-8 flex flex-col rounded-xl p-3"
      >
        <Header />
        <div>
          <Goals />
        </div>
        <div className="mt-auto">
          <Alarm />
        </div>
      </div>
      <div id="rightSide" className="col-span-2">
        <Chat />
      </div>
    </section>
  );
}
