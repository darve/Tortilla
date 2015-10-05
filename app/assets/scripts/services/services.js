
/*  Symplify Services
/* ================================== */

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [] /* module dependencies */);

    app.factory('$sanitize', [function() {
        return function(input) {
            return input.replace('\n', '').replace('\t', '').replace('\r', '').replace(/^\s+/g, '');
        };
    }]);

    app.factory("Auth", ["$firebaseAuth",
        function($firebaseAuth) {
            var ref = new Firebase("https://glowing-heat-8250.firebaseio.com/apps/symplify/");
            return $firebaseAuth(ref);
        }
    ]);

    app.factory("Data", [function(){

    }]);


})(window,document,window.angular,'SymplifyApp','services');
