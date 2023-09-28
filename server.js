process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();

app.post('/contact', (req, res) => {
    // Validate username and password

    res.redirect('/');
});

app.listen(3000);
module.exports = app;


console.log('Server running at http://localhost:3000/');