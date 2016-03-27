/**
 * Created by EUGENE on 10.03.2016.
 */
//server side of project
var app = require('express')();
var server = require('http').Server(app),
var io = require('socket.io')(server),
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'client')));
// variables to separate sockets from android and web-page
var display,
android;

// socket connection
io.on('connection', function(socket){
	socket.on("android", function(data){
	   	// if web-page connected
	   	if(data === 0){ 
      display = socket;
      console.log("conected web-page");
    }
    else{
      android = socket;
      console.log("conected client");
    }
  });
     // an event from client with coordinates of accelerometer
socket.on("xyz", function(x,y){
     // send these coordinates to index.html
	display.emit("getTime", x, y);
        console.log(x+"   "+y);
    });
    socket.on("keys", function(upS,downS,rightS,leftS){
     // send these coordinates to index.html
	display.emit("sendKeys",upS,downS,rightS,leftS);
        console.log(upS,downS,rightS,leftS);
    });
    
});


server.listen(8080, function(){
    console.log("server is listening on 8080");
});

