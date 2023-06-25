const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const mainControl = require('./controller/main');
const ejsMate = require('ejs-mate');


const port = 8080;
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended:true }));

app.get('/', mainControl.showHome);

app.get('/menu', mainControl.showMenu);

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

