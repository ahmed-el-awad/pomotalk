import { Button } from "@heroui/react";
import Tasks from "./tasks";
import { useState } from "react";

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
};

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
          isIconOnly
          size="sm"
          startContent={<EditIcon />}
          className="rounded-full p-1"
          onPress={() => setIsEditing(!isEditing)}
        />
      </div>
      <div className="">
        <div className="col-span-2 flex w-full items-center justify-between">
          <Tasks isEditing={isEditing} />
        </div>
      </div>
    </div>
  );
}
