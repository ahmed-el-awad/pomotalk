import { Button, Form, Textarea } from "@heroui/react";
import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      "message:",
      (e.currentTarget.elements.namedItem("message") as HTMLInputElement).value
    );

    setMessage("");
  };

  return (
    <div className="col-span-2 flex flex-col justify-between bg-blue-300">
      <h1 className="ml-2 mt-2 text-xl font-bold">Chat</h1>
      <Form onSubmit={onSubmit} className="flex flex-row items-center">
        <Textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-2 h-20 p-2 pr-0"
          maxRows={3}
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}
