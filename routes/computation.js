var express = require('express');
var router = express.Router();

x=Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined)
    {
        x=req.query.x;
    }

  first=Math.log2(x);
  second=Math.cosh(x);
  third=Math.floor(x)
  res.send(`log2 applied to ${x} is ${first}<br>cosh applied to ${x} is ${second}<br>floor applied to ${x} is ${third}`);
});

module.exports = router;
