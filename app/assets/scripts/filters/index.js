
'use strict';

var ng = require('angular'),
    app = ng.module('BriocheApp', []);

app.filter('slugify', require('./slugify'));
app.filter('capitalize', require('./capitalize'));
app.filter('reverse', require('./reverse'));
