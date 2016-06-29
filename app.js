var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var portName = "/dev/ttyACM0";

var integerData;

var myPort = new SerialPort(portName, {
  baudRate:9600,
  parser:serialport.parsers.readline("\r\n")
});

myPort.on('open', openData);
myPort.on('data', onData);

function openData(){
  console.log("Connection now open");
}
function onData(data){
  var test_int_data = parseInt(data);
  if(test_int_data < 0) return 0;
  else {
    integerData = test_int_data;
  }
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/smoothie.js', function(req, res){
  res.sendFile(__dirname + '/smoothie.js');
});

io.on('connection', function(socket){
    console.log("User connected");
    socket.on('getData', function(){
      socket.emit('dat', integerData);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
