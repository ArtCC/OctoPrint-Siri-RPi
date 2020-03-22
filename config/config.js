'use strict';

const API_KEY = '2D5E7779BCF944D8A003DD78DA7812A6';
const URL_BASE = 'http://';

// Connection URL path
const PATH_CONNECTION = '/api/connection?apikey=';

// Job URL path
const PATH_JOB = '/api/job?apikey=';

// Operations URL path
const PATH_HOME = '/api/printer/printhead?apikey=';
const PATH_BED = '/api/printer/bed?apikey=';
const PATH_TOOL = '/api/printer/tool?apikey=';

const API = {
    API_KEY,
    URL_BASE,
    PATH_CONNECTION,
    PATH_JOB,
    PATH_HOME,
    PATH_BED,
    PATH_TOOL
};

module.exports = API;