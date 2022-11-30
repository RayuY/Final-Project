const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');
const ownersRouter = require('./routes/owners');
const restaurantsRouter = require('./routes/restaurants');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customers', customersRouter);
app.use('/customers/:id', customersRouter);
app.use('/owners', ownersRouter);
app.use('/owners/:id', ownersRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/restaurants/:id', restaurantsRouter);

module.exports = app;
