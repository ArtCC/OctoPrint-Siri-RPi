'use strict';

const express = require('express'),
    router = express.Router(),
    request = require('request'),
    ip = require('ip');

const {
    API_KEY,
    URL_BASE,
    PATH_JOB
} = require('../config/config');

router.get('/start', async (req, res) => {
    request.post(
        URL_BASE + ip.address() + PATH_JOB + API_KEY,
        { json: { command: 'start' } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200).send({ data: { result: 'Ok' } });
            } else {
                res.status(500).send({ data: { result: 'Error: ' + error } });
            }
        }
    );
});

router.get('/cancel', async (req, res) => {
    request.post(
        URL_BASE + ip.address() + PATH_JOB + API_KEY,
        { json: { command: 'cancel' } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200).send({ data: { result: 'Ok' } });
            } else {
                res.status(500).send({ data: { result: 'Error: ' + error } });
            }
        }
    );
});

router.get('/pause', async (req, res) => {
    request.post(
        URL_BASE + ip.address() + PATH_JOB + API_KEY,
        { json: { command: 'pause' } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200).send({ data: { result: 'Ok' } });
            } else {
                res.status(500).send({ data: { result: 'Error: ' + error } });
            }
        }
    );
});

module.exports = router;