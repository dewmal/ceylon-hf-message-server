var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Ceylon.App');
});

app.get('/admin-sec-by-ob-sec-c3ac7oryka', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('election_result', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('election_result', function(msg){
    io.emit('election_result', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
