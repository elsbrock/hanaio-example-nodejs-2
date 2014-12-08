var app = require('express')();

app.get('/*', function (req, res) {
    console.log('GET /' + req.params[0]);
    
    res.sendFile(req.params[0] ? req.params[0] : 'index.html', { root : './client'});
});

app.listen(8080);