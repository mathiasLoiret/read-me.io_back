const express = require('express');
const app = express();
var fs = require('fs');
const templatePath = "templates"

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Ynov');
});

app.get('/api/health', function(req, res) {
  res.sendStatus(200);
});

app.get('/api/generate', function(req, res) {
  res.status(200);
  res.end(generate(req.query))
});

module.exports = app

function generate(data){
	return getfile(JSON.stringify(data))
}

function getfile(fileName){
  let extension = fileName.ext;
  let template = fileName.temp;
  var content;
  console.log('ext  '+ extension);
  console.log('temp  '+ template);

  fs.readFile(`template/${extension}/${template}.${extension}`, 'utf8', function(err, data) {
    if(err){
      console.log('error');
    }
    console.log('content  ' + data );
    content = data;
});
	return "fileLoad : ";
}
