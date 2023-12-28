const express = require('express');
const app = express();
// Getting http module
const http = require('http');
// creating a http server and passing express as request handler
const server = http.createServer(app);
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server);




app.use('/',express.static(path.join(__dirname,'public')));

// io.on --> is a method 
io.on('connection',(socket)=>{
    console.log(`Someone got conneted with id - ${socket.id}`);
})


















const port = 3333;
server.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});

