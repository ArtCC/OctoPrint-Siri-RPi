'use strict';

const API_KEY = '2D5E7779BCF944D8A003DD78DA7812A6';
const URL_BASE = 'http://192.168.1.78/api/';

// Connection URL path
const PATH_CONNECTION = 'connection?apikey=';

// Operations URL path
const PATH_HOME = 'printer/printhead?apikey=';
const PATH_BED = 'printer/bed?apikey=';
const PATH_TOOL = 'printer/tool?apikey=';

const API = {
    API_KEY,
    URL_BASE,
    PATH_CONNECTION,
    PATH_HOME,
    PATH_BED,
    PATH_TOOL
};

module.exports = API;