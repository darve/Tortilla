
'use strict';

var app = require('angular').module('BriocheFilters', []);

app.filter('slugify', require('./slugify'));
app.filter('capitalize', require('./capitalize'));
app.filter('reverse', require('./reverse'));
