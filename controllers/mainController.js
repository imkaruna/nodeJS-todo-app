module.exports = function (app) {
  app.get('/', function (req, res) {
    console.log(req.url);
    res.render('index');
  });

  app.post('/', function (req, res) {

  });

  app.delete('/', function () {

  });
};
