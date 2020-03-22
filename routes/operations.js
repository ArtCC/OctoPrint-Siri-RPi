'use strict';

const express = require('express'),
    router = express.Router(),
    request = require('request'),
    ip = require('ip');

const {
    API_KEY,
    URL_BASE,
    PATH_HOME,
    PATH_BED,
    PATH_TOOL
} = require('../config/config');

router.get('/home', async (req, res) => {
    var bed = req.query.bedTemp.match(/(\d+)/);
    var tool = req.query.toolTemp.match(/(\d+)/);
    // Home
    request.post(
        URL_BASE + ip.address() + PATH_HOME + API_KEY,
        { json: { command: 'home', axes: { 'x': 0, 'y': 0, 'z': 0 } } },
        function (error, response, body) {
            console.log(response);
            if (!error) {
                // Bed
                request.post(
                    URL_BASE + ip.address() + PATH_BED + API_KEY,
                    { json: { command: 'target', target: parseInt(bed[0]) } },
                    function (error, response, body) {
                        console.log(response);
                        if (!error) {
                            // Tool
                            request.post(
                                URL_BASE + ip.address() + PATH_TOOL + API_KEY,
                                { json: { command: 'target', targets: { 'tool0': parseInt(tool[0]) } } },
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
                            res.status(500).send({ data: { result: 'Error: ' + error } });
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
    var tool = req.query.toolTemp.match(/(\d+)/);
    request.post(
        URL_BASE + ip.address() + PATH_TOOL + API_KEY,
        { json: { command: 'target', targets: { 'tool0': parseInt(tool[0]) } } },
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

router.get('/bed', async (req, res) => {
    var bed = req.query.bedTemp.match(/(\d+)/);
    request.post(
        URL_BASE + ip.address() + PATH_BED + API_KEY,
        { json: { command: 'target', target: parseInt(bed[0]) } },
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

router.get('/cool', async (req, res) => {
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
        }
    );
});

module.exports = router;