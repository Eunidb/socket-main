const express = require("express")
const {createServer} = require("http")
const {Server} = require("socket.io")

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:3000'
    }
  });

io.on("connection",(socket)=>{
    console.log("Nueva conexión",socket.id);

    socket.on("newMessage",(data)=>{
        io.emit("messages",data)
    });
})

httpServer.listen(9000,()=>{
    console.log("Ejecutando en el puerto 9000")
});

io.listen(9001, () => {
    console.log("Servidor Socket.io ejecutándose en el puerto 9001");
  });
// crear colección Socket.io
// ws://localhost:9000

