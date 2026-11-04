import Tasks from "./tasks";
import { useState } from "react";
import { Button } from "./ui/button";
import { EditIcon } from "./icons/EditIcon";

export default function Kanban() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string | null>(null);

  {
    /* 
    TODO: Wrap this in a context to pass each user name 
    */
  }
  return (
    <div className="flex h-72 flex-col items-start px-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="bg-temp-4 rounded-tr-lg p-2 px-4 text-lg font-bold">
          {"Person\u00A0Name"}
        </h1>
        <Button
          size="sm"
          className="rounded-full p-1"
          onClick={() => setIsEditing(!isEditing)}
        >
          <EditIcon />
        </Button>
      </div>
      <div className="">
        <div className="col-span-2 flex w-full items-center justify-between">
          <Tasks isEditing={isEditing} />
        </div>
      </div>
    </div>
  );
}
