var express = require('express');
var cors = require('cors');
var port = 9000;

var corsOptions = { origin: true, optionsSuccessStatus: 200 };

var app = express();
app.use(cors(corsOptions));
app.listen(port);

console.log('Listening on port', port);

//--------------------------------------------------Prueba---------------------------------------

app.get('/', function (req, res) {
  res.send("Hola mundo! 201503798")
});