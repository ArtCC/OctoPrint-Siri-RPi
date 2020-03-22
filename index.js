'use strict';

const express = require('express'),
    app = express();

const connection = require('./routes/connection'),
    job = require('./routes/job'),
    operations = require('./routes/operations');

app.use(express.json());
app.use('/api/connection/', connection);
app.use('/api/job/', job);
app.use('/api/operations/', operations);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Listening in port: ' + port));