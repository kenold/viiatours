var express = require('express');
var app = express();
var port = process.env.PORT;
var host = process.env.IP;

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/tours', function(req, res) {
    res.render('tours/index.ejs');
})

app.listen(port, host, function () {
  console.log('Viia Tours app listening on port ' + port + '!');
});