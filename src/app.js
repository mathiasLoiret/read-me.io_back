const express = require('express');
const app = express();
var fs = require('fs');
const templatePath = "src/templates"

const tempList = ['basic','java','node'];
const extList = ['asciidoc','markdown'];

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
  generate(req.query, (err, resContent) => {
    if(err){
      res.status(404);
      res.end(JSON.stringify(err));
    }else{
      res.end(JSON.stringify(resContent))
    }

  })

});

module.exports = app

function generate(data, callback){
	var resObj = {}
  try {
    resObj['template'] = getTemplate(data.temp);
  	resObj['ext'] = getExt(data.ext);

    getfile(`${resObj['ext']}/${resObj['template']}.${resObj['ext']}`, (err, fileContent) => {
      if(err){
        callback(err,undefined);
      }else{
        resObj['file'] = fileContent;
        callback(undefined,resObj);
      }
  	});

  } catch (e) {
    callback(e, undefined);
  }


}

function getfile(filePath, callback){
   fs.readFile(`${templatePath}/${filePath}`, (err, data) =>{
      if(err){
        callback(err, undefined);
      }else{
        callback(undefined, data.toString());
      }

    });
}

function getTemplate(value){
	if(value == undefined){
		return 'basic';
	}else if(tempList.indexOf(value) != -1 ){
    return value;
  }
	 throw {err:'unreconized template'}
}

function getExt(value){
  if(value == undefined){
		return 'asciidoc';
	}else if(extList.indexOf(value) != -1 ){
    return value;
  }
	throw {err:'unreconized extension'};
}
