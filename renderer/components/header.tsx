import Link from "next/link";
import { Button } from "./ui/button";
import { BackIcon } from "./icons/BackIcon";
import { Avatar, AvatarGroup } from "./ui/avatar";

export function Header() {
  return (
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
  );
}
