import { Avatar, AvatarGroup, Button, Divider, Link } from "@heroui/react";
import React from "react";
import Goals from "../components/goals";
import Chat from "../components/chat";
import Alarm from "../components/alarm";

type Colors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

const avatarColors: Colors[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

const BackButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

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
              <Button
                isIconOnly
                startContent={<BackButton />}
                size="sm"
                radius="full"
                className="bg-temp-3"
              ></Button>
            </Link>
            <p className="bg-temp-3 ml-3 mr-3 rounded-full p-2 px-3 text-center">
              Host Name's Room
            </p>
          </section>
          <div className="bg-temp-3 flex items-center rounded-full p-1 px-4">
            <AvatarGroup className="flex *:cursor-default" size="sm" max={3}>
              <Avatar disableAnimation color={avatarColors[2]}></Avatar>
              <Avatar disableAnimation color={avatarColors[3]}></Avatar>
              <Avatar disableAnimation color={avatarColors[4]}></Avatar>
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
