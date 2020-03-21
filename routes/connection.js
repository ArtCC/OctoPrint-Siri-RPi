'use strict';

const express = require('express'),
    router = express.Router(),
    request = require('request');

const {
    API_KEY,
    URL_BASE,
    PATH_CONNECTION
} = require('../config/config');

router.get('/connect', async (req, res) => {
    request.post(
        URL_BASE + PATH_CONNECTION + API_KEY,
        { json: { command: 'connect' } },
        function (error, response, body) {
            if (!error) {
                console.log(response);
                res.status(200);
            } else {
                res.status(500).send({ data: { result: 'Error: ' + err } });
            }
        }
    );
});

router.get('/disconnect', async (req, res) => {
    request.post(
        URL_BASE + PATH_CONNECTION + API_KEY,
        { json: { command: 'disconnect' } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200);
            } else {
                res.status(500).send({ data: { result: 'Error: ' + err } });
            }
        }
    );
});

module.exports = router;