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
  ]);

  return (
    <>
      <div className="flex flex-col bg-blue-300 p-2">
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
