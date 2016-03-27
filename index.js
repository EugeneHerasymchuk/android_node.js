/**
 * Created by EUGENE on 10.03.2016.
 */
//server side of project
var app = require('express')();
var server = require('http').Server(app),
var io = require('socket.io')(server),
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'client')));
server.listen(8080, function(){
    console.log("server is listening");
});

io.on('connection', function(socket){
    socket.on("xyz", function(x,y){
        console.log(x+"   "+y);
    });
});
