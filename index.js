var express = require('express');
var app = express(), port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  var head = req.headers['user-agent'].toString(), result = {};
  result.ipaddress = req.headers['x-forwarded-for'];
  result.language = req.headers["accept-language"].split(",")[0];
  result.software = head.substring(head.indexOf("(") + 1, head.indexOf(")"));
  
  res.setHeader('Content-Type', 'application/json');
  res.send(result);
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
