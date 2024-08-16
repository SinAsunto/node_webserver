require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Elements'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Server
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});