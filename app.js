var express = require('express');
var todoController = require('./controllers/mainController.js');
var app = express();

//Setup template engine
app.set('view engine', 'ejs');


// Setup static files
app.use(express.static('./public'));

todoController(app);
// Port the app will be running on
app.listen(3000);
console.log('Now listening at port 3000...');
