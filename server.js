var express = require('express');
var path = ('path');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');

var app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(process.cwd() + '/public'));

var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.use(favicon(path.join(__dirname, 'public/assets/img', 'burger.png')));
app.use(favicon(process.cwd() + '/public/assets/img/burger.png'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});