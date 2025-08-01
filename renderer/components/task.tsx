import { Checkbox, divider } from "@heroui/react";
import { Reorder, useDragControls } from "framer-motion";

interface TaskProps {
  task: string;
  isEditing?: boolean;
}

export default function Task({ task, isEditing }: TaskProps) {
  const dragControls = useDragControls();

  return (
    <>
      <div className="mb-2 w-48">
        {isEditing ? (
          <Reorder.Item
            value={task}
            dragListener={false}
            dragControls={dragControls}
            className="flex justify-between bg-white"
          >
            <div className="">
              <Checkbox lineThrough disableAnimation>
                <span className="text-lg">{task}</span>
              </Checkbox>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="reorder-handle ml-4 size-6 cursor-pointer bg-red-400"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </Reorder.Item>
        ) : (
          <div className="flex justify-between bg-white">
            <span className="text-md">{task}</span>
          </div>
        )}
      </div>
    </>
  );
}
