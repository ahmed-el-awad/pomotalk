import WebSocket, { WebSocketServer } from "ws";
import express from "express";
import http from "http";
import { randomUUID } from "crypto";

interface ChatMessage {
  name: string;
  message: string;
}

const port = 8080;
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const clients = new Map<string, WebSocket>();
const messageList: ChatMessage[] = [];

wss.on("connection", (ws: WebSocket) => {
  const clientID = randomUUID().slice(0, 8);
  clients.set(clientID, ws);

  console.log(`Client ${clientID} connected`);

  // TODO: currently the param is type string but there's no guarantee that it is a string
  // find out what type is more suitable to be used here
  ws.on("message", (message: string) => {
    message = message.toString();
    console.log(`Received: ${message} sent by ${clientID}`);

    messageList.push({
      name: clientID,
      message: message,
    });

    // For debugging
    console.log("current messages");
    for (const m of messageList) {
      console.log(m);
    }

    // broadcasts message to every connected client, minus the one sending the message
    clients.forEach((client: WebSocket, currentClientID: string) => {
      if (client.readyState === WebSocket.OPEN) {
        // client.send(`client #${clientID}: ${message}`);
        client.send(JSON.stringify(messageList));
      }
    });
  });

  ws.on("close", () => {
    clients.delete(clientID);
    console.log(`Client ${clientID} disconnected`);
  });
});

server.listen(port, () => {
  console.log("running on port", port);
});
