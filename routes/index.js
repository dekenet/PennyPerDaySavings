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
router.get('/content', function(req, res, next) {
  res.render('section', { c: req.query.c || 0 });
});

module.exports = router;
