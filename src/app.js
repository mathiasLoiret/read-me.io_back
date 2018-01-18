const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Ynov');
});

app.get('/api/health', function(req, res) {
  res.sendStatus(200);
  res.
});

app.get('/api/generate', function(req, res) {
  res.status(200);
  res.end(generate("default"))
});

module.exports = app

function generate(data){
	return getfile(data)
}

function getfile(fileName){
	return "fileLoad : " + fileName
}