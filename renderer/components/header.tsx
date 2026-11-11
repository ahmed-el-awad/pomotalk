import Link from "next/link";
import { Button } from "./ui/button";
import { BackIcon } from "./icons/BackIcon";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup } from "./ui/avatar";
import { Crown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-temp-5 flex justify-between rounded-full p-2">
      <section className="flex items-center">
        <Link href="/home">
          <Button size="unstyled" className="rounded-full p-2">
            <BackIcon />
          </Button>
        </Link>
        <p className="bg-temp-3 mr-3 ml-3 rounded-full px-3 py-2 text-center">
          Host Name's Room
        </p>
      </section>
      <div className="bg-temp-3 rounded-full px-4 py-1">
        {/* TODO: show initial names here from the server */}
        {/* TODO: show the host as the first person */}
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarFallback>ED</AvatarFallback>
            <AvatarBadge className="bg-amber-300">
              <Crown />
            </AvatarBadge>
          </Avatar>
          <Avatar size="lg"></Avatar>
          <Avatar size="lg"></Avatar>
        </AvatarGroup>
      </div>
    </header>
  );
}
