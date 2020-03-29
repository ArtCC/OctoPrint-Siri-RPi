'use strict';

const express = require('express'),
    router = express.Router(),
    request = require('request'),
    ip = require('ip');

const {
    API_KEY,
    URL_BASE,
    PATH_JOB,
    PATH_BED,
    PATH_TOOL
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
                // Bed
                request.post(
                    URL_BASE + ip.address() + PATH_BED + API_KEY,
                    { json: { command: 'target', target: 0 } },
                    function (error, response, body) {
                        console.log(response);
                        if (!error) {
                            // Tool
                            request.post(
                                URL_BASE + ip.address() + PATH_TOOL + API_KEY,
                                { json: { command: 'target', targets: { 'tool0': 0 } } },
                                function (error, response, body) {
                                    console.log(response);
                                    if (!error) {
                                        res.status(200).send({ data: { result: 'Ok' } });
                                    } else {
                                        res.status(500).send({ data: { result: 'Error: ' + error } });
                                    }
                                }
                            );
                        } else {
                            res.status(500).send({ data: { result: 'Error: ' + err } });
                        }
                    })
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

router.get('/time', async (req, res) => {
    request.get(
        URL_BASE + ip.address() + PATH_JOB + API_KEY,
        function (error, response, body) {
            if (!error) {
                var json = JSON.parse(body);
                const estimatedPrintTimeInSeconds = json.job.estimatedPrintTime;
                if (estimatedPrintTimeInSeconds === null) {
                    res.status(200).send({ data: { result: 'Off' } });
                } else {
                    const estimatedPrintTimeInHours = estimatedPrintTimeInSeconds / 3600;
                    res.status(200).send({ data: { result: parseInt(estimatedPrintTimeInHours) } });
                }
            } else {
                res.status(500).send({ data: { result: 'Error: ' + error } });
            }
        }
    );
});

module.exports = router;