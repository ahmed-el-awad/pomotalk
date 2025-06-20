import Kanban from "./kanban";

export default function Goals() {
  return (
    <>
      <div className="mb-4 w-full text-xl font-bold">Goals</div>
      <div className="flex gap-10 overflow-x-auto bg-red-300 p-4">
        <Kanban />
        <Kanban />
        <Kanban />
      </div>
    </>
  );
}
