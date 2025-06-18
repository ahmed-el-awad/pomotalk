import { Avatar, AvatarGroup, Divider } from "@heroui/react";
import Link from "next/link";
import React from "react";
import Goals from "./goals";

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

export default function MainPage() {
  return (
    <>
      <header className="bg-0 flex h-full items-center p-2">
        <h1 className="mr-20">People</h1>
        <AvatarGroup className="flex" size="sm" max={3} isBordered>
          <Avatar name="Ahmed" color={avatarColors[1]}></Avatar>
          <Avatar color={avatarColors[2]}></Avatar>
          <Avatar color={avatarColors[3]}></Avatar>
          <Avatar color={avatarColors[4]}></Avatar>
        </AvatarGroup>
      </header>
      <Divider className="mb-4" />
      <Goals />
      <Link href="/alarm">Alarm</Link>
    </>
  );
}
