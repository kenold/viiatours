var express = require('express');
var app = express();
var port = process.env.PORT;
var host = process.env.IP;

// set the public folder for css, img and script files
app.use(express.static('public'));

// tell express to EJS template, so no .ejs needed
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    
    var tours = [
         {
             id: 100,
             name: "Snorkelling + Buggy",
             price: 90,
             photo: "https://viiatours.com/wp-content/uploads/2016/01/viia-combo-fetured.jpg"
         },
         {  
             id: 200,
             name: "Zip Line + Buggy",
             price: 140,
             photo: "https://viiatours.com/wp-content/uploads/2015/10/zipline-canopy-puntacana.jpg"
         },
         {
             id: 300,
             name: "Dune Buggy Individual",
             price: 85,
             photo: "https://viiatours.com/wp-content/uploads/2016/01/dune-buggy.jpg"
         }
    ];
    
    var tagline = "Find the best adventure and sightseeing activities in the area.";
    
    res.render('home', {
        tours: tours,
        tagline: tagline
    });
});

app.get('/tours', function(req, res) {
    res.render('tours/index');
});

app.get('/tour/:id', function(req, res) {
    res.send('single tour page');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/faqs', function(req, res) {
    res.render('pages/faqs');
});

app.listen(port, host, function () {
  console.log('Viia Tours app listening on port ' + port + '!');
});