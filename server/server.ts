import WebSocket, { WebSocketServer } from "ws";
import express from "express";
import http from "http";
import { randomUUID } from "crypto";

const port = 8080;
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const clients = new Map<string, WebSocket>();

wss.on("connection", (ws: WebSocket) => {
  const clientID = randomUUID().slice(0, 8);
  clients.set(clientID, ws);

  console.log(`Client ${clientID} connected`);

  ws.on("message", (message: string) => {
    console.log(`Received: ${message} sent by ${clientID}`);

    // broadcasts message to every connected client, minus the one sending the message
    clients.forEach((client: WebSocket, currentClientID: string) => {
      if (currentClientID !== clientID) {
        client.send(`client #${clientID}: ${message}`);
      }
    });
  });

  ws.on("close", () => {
    clients.delete(clientID);
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log("running on port", port);
});
