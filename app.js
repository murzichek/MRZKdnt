/**
 * @license Apache-2.0
 * @copyright 2024 MrzkDev
 */

'use strict';

const express = require('express');
const helmet = require('helmet');
require('dotenv').config();


const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');


const app = express();
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use('/', home);

app.use('/checkout', checkout);

app.listen(process.env.PORT, () => {
    console.log(`app listeneing on http://localhost:${process.env.PORT}`);
});