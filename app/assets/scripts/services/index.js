
'use strict';

var ng = require('angular'),
    app = ng.module('BriocheApp', []);


/**
 * HERE we list all of our controllers
 */
app.factory('$sanitize', require('./$sanitize'));
