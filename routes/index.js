const fs = require('fs');
const express = require('express');
const router = express.Router();
const calculators = {title: 'Calculators', links: fs.readdirSync('./apps/calculators')};

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Penny Per Day Savings',
    nav: [calculators],
    c: req.query.c || 0
  });
});
router.get('/content/*', function(req, res, next) {
  var idx = req.params[0];
  var path = './apps/calculators/'+calculators.links[idx]+'/index.html';
  res.send(fs.readFileSync(path));
});

module.exports = router;
