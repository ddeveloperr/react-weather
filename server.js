var express = require('express');
var app     = express();

const port  = process.env.PORT || 3000; 

app.use(function(req, res, next){
    
    if(req.headers['x-forwarded-proto'] === 'https'){
        next();
    
    } else {
        res.redirect('http://' + req.hostname + req.url); 
    }
});

app.use(express.static('public'));

app.listen(port, process.env.IP, function () {
  console.log('Express server is up on port' + port);
});
