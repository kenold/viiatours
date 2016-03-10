var express = require('express');
var app = express();
var port = process.env.PORT;
var host = process.env.IP;

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/tours', function(req, res) {
    res.render('tours/index.ejs');
});

app.get('/tour/:id', function(req, res) {
    res.send('single tour page');
});

app.get('/about', function(req, res) {
    res.send('about page');
});

app.get('/contact', function(req, res) {
    res.send('contact page');
});

app.get('/faqs', function(req, res) {
    res.send('FAQs page');
});

app.listen(port, host, function () {
  console.log('Viia Tours app listening on port ' + port + '!');
});