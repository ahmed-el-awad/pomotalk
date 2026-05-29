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
    <div className="ml-2 flex flex-col justify-between">
      {/* Chat messages */}
      <div className="flex h-[80vh] flex-col-reverse overflow-y-scroll">
        {chatMessages.map((messageInfo, idx) => {
          return (
            <div key={idx} className="mb-2 px-2">
              <p className="bg-temp-3 mb-1 w-fit rounded-md rounded-bl-none px-3 pb-1">
                {messageInfo.name}
              </p>
              <p className="bg-temp-3 min-h-16 rounded-md rounded-tl-none p-1 px-1">
                {messageInfo.message}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom part */}
      <Form onSubmit={onSubmit} className="mt-1 flex flex-col">
        <Textarea
          name="message"
          placeholder="Send a message"
          value={message}
          onKeyDown={(e) => {
            if (e.target.value && e.keyCode == 13) {
              return onSubmit(e);
            } else if (e.target.value.includes("\n")) {
              console.log("val", e.target.value);
              return null;
            }
          }}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="h-20"
          maxRows={3}
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}
