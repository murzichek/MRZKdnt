/**
 * @license Apache-2.0
 * @copyright 2024 MrzkDev
 */

'use strict';

const router = require('express').Router();
const { home } = require('../controllers/home.controller');


router.get('/', home);
module.exports = router;
