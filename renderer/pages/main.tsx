import Goals from "../components/goals";
import Chat from "../components/chat";
import Alarm from "../components/alarm";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { BackIcon } from "../components/icons/BackIcon";
import { Avatar, AvatarGroup } from "../components/ui/avatar";

export default function Main() {
  return (
    <div className="grid grid-cols-10">
      {/*
      TODO: 
      content between doesn't work, shows this 
      The flex-wrap: nowrap property prevents align-content from having an effect.
      Try setting flex-wrap to something other than nowrap.
    */}
      <div className="leftSide bg-temp-4 col-span-8 rounded-xl p-3">
        <header className="bg-temp-5 flex content-end justify-between rounded-full p-2">
          <section className="flex">
            <Link href="/home">
              <Button className="bg-temp-3">
                <BackIcon />
              </Button>
            </Link>
            <p className="bg-temp-3 mr-3 ml-3 rounded-full p-2 px-3 text-center">
              Host Name's Room
            </p>
          </section>
          <div className="bg-temp-3 flex items-center rounded-full p-1 px-4">
            <AvatarGroup className="flex *:cursor-default">
              <Avatar></Avatar>
              <Avatar></Avatar>
              <Avatar></Avatar>
            </AvatarGroup>
          </div>
        </header>
        <div className="">
          <Goals />
        </div>
      </div>
      <div className="rightSide col-span-2">
        <Chat />
      </div>
    </div>
  );
}
