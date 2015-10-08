
'use strict';

module.exports = function() {
    return function(input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
};
