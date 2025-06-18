import Tasks from "./tasks";

export default function Kanban() {
  return (
    <>
      <div className="child flex flex-col items-center bg-gray-200 px-4">
        <h1 className="mb-4 bg-yellow-200 p-2 text-lg font-bold">
          {"Person\u00A0Name"}
        </h1>
        <Tasks></Tasks>
      </div>
    </>
  );
}
