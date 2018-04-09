// Load Up the Dependencies
var express = require('express');
app = express();

app.use(express.static(__dirname));

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 5000;

//Set RESTful routes
app.get('/', function(req, res) {
  //chat.sendMessage();
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req,res){
  res.send("hello");
})
// Start the server
app.listen(port);
console.log("Server has booted up successfully.");