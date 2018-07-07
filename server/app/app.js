const express = require('express');
const path = require('path');
const config = require('./config/index');
const app = express();

// public files and routes

app.use(express.static(path.join(__dirname, 'public')));
require('./routes/index')(app);

// run server

app.listen(config.get('port'), () => console.log('Server started'));
