const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});