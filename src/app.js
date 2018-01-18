const express = require('express');
const fs = require('fs');
const app = express();
const readline =require('readline');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Ynov');
});

app.get('/api/health', function(req, res) {
  res.sendStatus(200);
});

app.get('/api/extensions', function(req, res) {
  fs.readdir('./src/templates/', function(err, content) {
    if(err) {
      res.sendStatus(500);
    }
    var listExtensions = [];
    for(var i=0; i<content.length; i++) {
      listExtensions.push(content[i]);
    }
    var extension = { extensions: listExtensions }
    res.send(JSON.stringify(extension));
  })
})

app.get('/api/templates', function(req, res) {
  fs.readdir('./src/templates/markdown/', function(err, contents) {
    if(err) {
      res.sendStatus(500);
    }
    var listTemplates = [];
    for(var i=0; i<contents.length; i++) {
      var content = contents[i].split(".")
      listTemplates.push(content[0]);
    }
    var template = { templates: listTemplates}
    res.send(JSON.stringify(template));
  })
})

module.exports = app
