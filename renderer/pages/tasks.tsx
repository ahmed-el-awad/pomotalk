import { Reorder, useDragControls } from "framer-motion";
import Task from "./task";
import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState<string[]>([
    "Read 5 pages",
    "Read 10 pages",
    "Read 20 pages",
  ]);

  return (
    <>
      <div className="flex flex-col bg-blue-300 p-2">
        <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
          {tasks.map((task) => (
            <Task task={task} key={task} />
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}
