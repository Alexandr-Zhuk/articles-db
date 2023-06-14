const express = require('express');
const articlesRouter = require('./routes/articles');
const authorsRouter = require('./routes/authors');
const genresRouter = require('./routes/genres');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blogTest');

const server = express();

server.listen(3000);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.json());
server.use(express.urlencoded({ extended: false}));

server.use(express.static(__dirname + '/public'));
server.use('/articles', articlesRouter);
server.use('/authors', authorsRouter);
server.use('/genres', genresRouter);

