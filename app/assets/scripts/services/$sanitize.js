
'use strict';

module.exports = [function() {
    return function(input) {
        return input.replace('\n', '').replace('\t', '').replace('\r', '').replace(/^\s+/g, '');
    };
}];
