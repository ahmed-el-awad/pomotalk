import { Button } from "@heroui/react";
import Tasks from "./tasks";

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
  return (
    <>
      <div className="child flex flex-col items-center bg-gray-200 px-4">
        <div className="col-span-2 mb-2 flex w-full items-center justify-between p-2">
          <h1 className="bg-yellow-200 p-2 text-lg font-bold">
            {"Person\u00A0Name"}
          </h1>
          <Button
            isIconOnly
            size="sm"
            startContent={<EditIcon />}
            className=""
          />
        </div>
        <Tasks />
      </div>
    </>
  );
}
