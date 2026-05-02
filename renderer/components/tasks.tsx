import { Reorder, useDragControls } from "framer-motion";
import Task from "./task";
import { useState } from "react";

interface Props {
  isEditing: boolean;
}

export default function Tasks({ isEditing }: Props) {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, text: "Read 5 pages" },
    { id: 2, text: "Read 10 pages" },
    { id: 3, text: "Read 20 pages" },
    { id: 3, text: "Read 50 pages" },
  ]);

  return (
    <>
      <div className="bg-temp-3 flex flex-col rounded-md rounded-bl-none rounded-tl-none p-2 pl-0">
        {isEditing ? (
          <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
            {tasks.map((task, index) => (
              <Task
                task={task}
                key={task.id}
                index={index}
                isEditing={isEditing}
                setTasks={setTasks}
              />
            ))}
          </Reorder.Group>
        ) : (
          <div>
            {tasks.map((task, index) => (
              <Task
                task={task}
                key={task.id}
                isEditing={isEditing}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
