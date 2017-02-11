var bodyParser = require('body-parser');

var data = [{item: "Buy milk"},{item: "Attend event"},{item: "Pay bill"}]
var urlEncodedData =  bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

  app.get('/', function (req, res) {
    console.log(req.url);
    res.render('index', {todos: data});
  });

  app.post('/', urlEncodedData, function (req, res) {
    data.push(req.body);
    console.log('posted');
    res.json(data);

  });

  app.delete('/:item', function (req, res) {
    console.log('delete');
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
