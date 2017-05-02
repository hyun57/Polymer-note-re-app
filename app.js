var express = require('express');
var myapp = express();
var bodyParser = require('body-parser');
var rest_api = require('./routes/rest_api')

myapp.use(bodyParser.json()); // for parsing myapplication/json
//myapp.use(/^((?!.*abc).*)/, express.static(__dirname + '/'));
myapp.use('/', express.static(__dirname + '/'));
myapp.use('/memories', express.static(__dirname + '/'));
myapp.use('/monthly', express.static(__dirname + '/'));
myapp.use('/write', express.static(__dirname + '/'));
myapp.use('/media', express.static(__dirname + '/'));
myapp.use('/search', express.static(__dirname + '/'));
myapp.use('/weather', express.static(__dirname + '/'));
myapp.use('/MusicMoment', express.static(__dirname + '/'));
myapp.use('/ourworld', express.static(__dirname + '/'));
myapp.use('/Goal', express.static(__dirname + '/'));



myapp.all('/api/add', function (req, res, next) {
  console.log('Add API is called...');
  api = new rest_api();
  result = api.write(req);
  if (result) {
    res.json({success: true})
  }
});

myapp.all('/api/list', function (req, res, next) {
  console.log('List API is called...');
  api = new rest_api();
  api.list(req, res);
});

myapp.all('/api/memosearch', function (req, res, next) {
  console.log('MemoSearch API is called...');
  api = new rest_api();
  api.memosearch(req, res);
});

myapp.listen(3000, function () {
  console.log('memo-app listening on port 3000!');
});
