/**
 * @license Apache-2.0
 * @copyright 2024 MrzkDev
 */

'use strict';

const router = require('express').Router();

const { checkout } = require('../controllers/checkout.controller');

router.post('/', checkout);
module.exports = router;
