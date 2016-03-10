var express = require('express');
var app = express();
var port = process.env.PORT;
var ip = process.env.IP;

app.get('/tours', function(req, res) {
    res.send("All tours");
});

app.listen(port, ip, function () {
  console.log('Viia Tours app listening on port ' + port + '!');
});