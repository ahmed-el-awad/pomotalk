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

const HomeIcon = () => {
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
    <>
      <header className="flex items-center p-2">
        <Link href="/home">
          <Button
            isIconOnly
            startContent={<HomeIcon />}
            size="sm"
            radius="full"
          ></Button>
        </Link>
        <Alarm />
        <h1 className="mr-20">People</h1>
        <AvatarGroup
          className="flex *:cursor-default"
          size="sm"
          max={3}
          isBordered
        >
          <Avatar name="Ahmed" color={avatarColors[1]}></Avatar>
          <Avatar color={avatarColors[2]}></Avatar>
          <Avatar color={avatarColors[3]}></Avatar>
          <Avatar color={avatarColors[4]}></Avatar>
        </AvatarGroup>
      </header>
      <Divider />
      <div className="grid grid-flow-col content-end *:min-w-0">
        <Goals />
        <Chat />
      </div>
    </>
  );
}
