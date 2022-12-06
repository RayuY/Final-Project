const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ownersRouter = require('./routes/owners');
const restaurantsRouter = require('./routes/restaurants');
const reservationsRouter = require('./routes/reservations');
const twilioRouter = require('./routes/twilio');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/owners', ownersRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/reservations', reservationsRouter);

app.use('/twilio', twilioRouter);

module.exports = app;
