import {Server} from "socket.io";

import http from "http";

import express from "express";

const app = express();


const server = http.createServer(app);

const io = new Server(server, { 
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});



const usersocketmap = {}; // {userId: socketId}
export const  getrecieversocketid = (recieverid) => {
    console.log("🗺️ Current socket map:", usersocketmap);
console.log("📥 Looking for receiver:", recieverid);
    return usersocketmap[recieverid];
};


io.on("connection", (socket) => {
   
    console.log("a user connected", socket.id);


    const userId = socket.handshake.query.userId;
    

    if(userId != "undefined") usersocketmap[userId] = socket.id;


    io.emit("getonlineusers", Object.keys(usersocketmap));
    

    // socket.on() is for listening all the incoming and outgoing events
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete usersocketmap[userId];
    io.emit("getonlineusers", Object.keys(usersocketmap));

    });
   

});

export {app, io, server};
