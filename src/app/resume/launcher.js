var express = require('express');
var server = express();

server.use('/', express.static("newportfolio/src/app/resume"+'/'));

server.listen(3001, function(){
    console.log('listening on this port');
});

const openBrowser = require ("opn");

openBrowser('http://localhost:3001/index.html');