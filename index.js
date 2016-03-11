/**
 * Created by EUGENE on 10.03.2016.
 */
//server side of project
var app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

app.use(express.static(path.resolve(__dirname, 'client')));
server.listen(8080, function(){
    console.log("server is listening");
});

io.on('connection', function(socket){
    socket.on("xyz", function(x,y){
        console.log(x+"   "+y);
    });
});
