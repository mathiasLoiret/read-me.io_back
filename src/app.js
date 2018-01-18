const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Ynov');
});

app.get('/api/health', function(req, res) {
  res.sendStatus(200);
});

app.get('/api/generate', function(req, res) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(generate(req.query)))
});

module.exports = app

function generate(data){
	var resObj = {}
	resObj["template"] = getExt(data.template)
	resObj["ext"] = getExt(data.ext)
	resObj["file"] = getfile(resObj["ext"] + "/" + resObj["template"])
	return resObj
}

function getfile(fileName){
	return "fileLoad : " + fileName
}

function getTemplate(value){
	if(value == undefined){
		return "asciidoc"
	}
	return value
}

function getExt(value){
	if(value == undefined){
		return "basic"
	}
	return value

}