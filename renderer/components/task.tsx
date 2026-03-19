import { Checkbox, divider } from "@heroui/react";
import { Reorder, useDragControls } from "framer-motion";

export default function Task({ task, isEditing, setTasks, index }: TaskProps) {
  const dragControls = useDragControls();

  return (
    <>
      <div className="mb-2 w-48">
        {isEditing ? (
          <Reorder.Item
            value={task}
            dragListener={false}
            dragControls={dragControls}
            className="flex items-center justify-between bg-white"
          >
            <input
              className="w-full"
              value={task.text}
              onChange={(e) =>
                setTasks((prev: TaskItem[]) =>
                  prev.map((t, i) =>
                    i === index ? { ...t, text: e.target.value } : t
                  )
                )
              }
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="reorder-handle ml-4 size-6 h-full cursor-pointer bg-red-400"
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
            <span className="text-md">{task.text}</span>
          </div>
        )}
      </div>
    </>
  );
}
