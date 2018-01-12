const express = require('express');
const app = express();

const port = 8080;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello Ynov');
});

app.listen(port, function() {
  console.log(`Server started on port ${port}!`);
})
