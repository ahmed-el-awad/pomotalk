import Kanban from "./kanban";

export default function Goals() {
  return (
    <>
      <div className="mt-4 text-xl font-bold">
        <h1>Goals</h1>
        <div className="flex gap-10 overflow-x-auto overflow-y-hidden bg-red-300 p-4">
          <Kanban />
          <Kanban />
          <Kanban />
        </div>
      </div>
    </>
  );
}
