
'use strict';

module.exports = function() {
    return function(input) {
        return input.toLowerCase().split('é').join('e').replace(/[^\w\s-]/g, '').replace(/[-\s]+/g, '-');
    };
};
