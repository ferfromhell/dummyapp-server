var express = require('express');
var app = express();


//CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/test', function (req, res) {
  console.log('req: ',req)
  res.json({
    servStat: "connected to server"
  });
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});