import Kanban from "./kanban";

export default function Goals() {
  return (
    <>
      <div className="mt-2 text-xl font-bold">
        <div className="bg-temp-5 scrollbar-thumb-temp-3 flex overflow-x-auto rounded-lg pt-4">
          <Kanban />
          <Kanban />
          <Kanban />
          <Kanban />
          <Kanban />
          <Kanban />
        </div>
      </div>
    </>
  );
}
