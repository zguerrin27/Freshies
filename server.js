const express = require('express');
const mongoose = require('mongoose');
const bodyParcer = require('body-parcer');

const app = express();

// Body Parser Middleware

app.use(bodyParcer.json());

