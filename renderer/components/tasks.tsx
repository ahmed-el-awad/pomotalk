import { Reorder, useDragControls } from "framer-motion";
import Task from "./task";
import { useState } from "react";

interface Props {
  isEditing: boolean;
}

export default function Tasks({ isEditing }: Props) {
  const [tasks, setTasks] = useState<string[]>([
    "Read 5 pages",
    "Read 10 pages",
    "Read 20 pages",
  ]);

  return (
    <>
      <div className="flex flex-col bg-blue-300 p-2">
        {isEditing ? (
          <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
            {tasks.map((task) => (
              <Task task={task} key={task} isEditing={isEditing} />
            ))}
          </Reorder.Group>
        ) : (
          <div>
            {tasks.map((task) => (
              <Task task={task} key={task} isEditing={isEditing} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
