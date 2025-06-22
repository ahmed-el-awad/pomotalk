import { Avatar, AvatarGroup, Button, Divider, Link } from "@heroui/react";
import React from "react";
import Goals from "../components/goals";
import Chat from "../components/chat";

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

export default function Main() {
  return (
    <>
      <header className="bg-0 flex h-full items-center p-2">
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
      <Link href="/home">Home</Link>
    </>
  );
}
