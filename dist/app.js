"use strict";
var express = require('express');
var path = require('path');
var app = express();
var staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('/hello', function (req, res) {
    res.send('hello mofo');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
