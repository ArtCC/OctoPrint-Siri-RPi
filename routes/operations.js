'use strict';

const express = require('express'),
    router = express.Router(),
    request = require('request');

const {
    API_KEY,
    URL_BASE,
    PATH_HOME,
    PATH_BED,
    PATH_TOOL
} = require('../config/config');

router.get('/home', async (req, res) => {
    // Home
    request.post(
        URL_BASE + PATH_HOME + API_KEY,
        { json: { command: 'home', axes: { 'x': 0, 'y': 0, 'z': 0 } } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                // Bed
                request.post(
                    URL_BASE + PATH_BED + API_KEY,
                    { json: { command: 'target', target: 60 } },
                    function (error, response, body) {
                        console.log(response);
                        if (!error) {
                            // Tool
                            request.post(
                                URL_BASE + PATH_TOOL + API_KEY,
                                { json: { command: 'target', targets: { 'tool0': 220 } } },
                                function (error, response, body) {
                                    console.log(response);
                                    if (!error) {
                                        res.status(200).send({ data: { result: 'Ok' } });
                                    } else {
                                        res.status(500).send({ data: { result: 'Error: ' + err } });
                                    }
                                }
                            );
                        } else {
                            res.status(500).send({ data: { result: 'Error: ' + err } });
                        }
                    }
                );
            } else {
                res.status(500).send({ data: { result: 'Error: ' + error } });
            }
        }
    );
});

router.get('/tool', async (req, res) => {
    request.post(
        URL_BASE + PATH_TOOL + API_KEY,
        { json: { command: 'target', targets: { 'tool0': 220 } } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200).send({ data: { result: 'Ok' } });
            } else {
                res.status(500).send({ data: { result: 'Error: ' + err } });
            }
        }
    );
});

router.get('/bed', async (req, res) => {
    request.post(
        URL_BASE + PATH_BED + API_KEY,
        { json: { command: 'target', target: 60 } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                res.status(200).send({ data: { result: 'Ok' } });
            } else {
                res.status(500).send({ data: { result: 'Error: ' + err } });
            }
        }
    );
});

router.get('/cool', async (req, res) => {
    // Bed
    request.post(
        URL_BASE + PATH_BED + API_KEY,
        { json: { command: 'target', target: 0 } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                // Tool
                request.post(
                    URL_BASE + PATH_TOOL + API_KEY,
                    { json: { command: 'target', targets: { 'tool0': 0 } } },
                    function (error, response, body) {
                        console.log(response);
                        if (!error) {
                            res.status(200).send({ data: { result: 'Ok' } });
                        } else {
                            res.status(500).send({ data: { result: 'Error: ' + err } });
                        }
                    }
                );
            } else {
                res.status(500).send({ data: { result: 'Error: ' + err } });
            }
        }
    );
});

module.exports = router;