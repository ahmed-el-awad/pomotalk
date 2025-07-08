import { Button, Form, Textarea } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

interface ChatMessage {
  name: string;
  message: string;
}

export default function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.onopen = () => {
      console.log("Websocket connected");
    };

    socketRef.current.onmessage = (event) => {
      const newMessagesFromServer: ChatMessage[] = JSON.parse(event.data);
      console.log("Message from server:", newMessagesFromServer);

      setChatMessages(newMessagesFromServer);
    };

    socketRef.current.onclose = () => {
      console.error("WebSocket connection was lost");
    };

    return () => socketRef.current.close();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
      console.log("sent message", message);

      setMessage("");
    } else {
      console.log("websocket is not connected");
      console.log("trying to reconnect...");

      socketRef.current = new WebSocket("ws://localhost:8080");

      socketRef.current.onopen = () => {
        console.log("Websocket connected");
      };
    }
  };

  return (
    <div className="col-span-2 flex flex-col justify-between bg-blue-300">
      <h1 className="ml-2 mt-2 text-xl font-bold">Chat</h1>
      <div>
        {chatMessages.map((messageInfo, idx) => {
          return (
            <div key={idx} className="mx-4 bg-red-400 px-4">
              {messageInfo.message}
            </div>
          );
        })}
      </div>
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
