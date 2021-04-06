import { io } from 'socket.io-client';

export const connectToSocket = (server, room, client, displayName) => {
    const socket = io(server, { query: { "room": room, "client": client, "displayName": displayName } });
    socket.connect();

    return socket;
}

export const disconnectFromSocket = (socket) => {
    socket.disconnect();
    return socket;
}
