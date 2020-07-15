'use strict';

var express = require('express');
var cors = require('cors');

var multer = require('multer');

var app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', (req,res) => {

  console.log(req);
  res.send('post form clicked');

});

app.listen(port, function () {
  console.log('Node.js listening: '+port);
});
