var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile('../views/index.html', function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      res.write(data);
    }
    res.end();
  });

});

module.exports = router;
