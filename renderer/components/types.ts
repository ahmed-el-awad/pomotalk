interface TaskItem {
  id: number;
  text: string;
}
interface TaskProps {
  task: TaskItem;
  isEditing?: boolean;
  setTasks?: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  index?: number;
}
