
'use strict';

var ng = require('angular'),
app = ng.module('BriocheApp', []);

require('./controllers');
require('./services');
require('./directives');
require('./filters');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            controller: "LoginController"
        })

        .state('contrast', {
            url: "/contrast",
            templateUrl: "contrast.html",
            controller: "ContrastController"
        })

        .state('home', {
            url: "/",
            templateUrl: "home.html",
            controller: "HomeController"
    }]);

    app.run(['$timeout', '$rootScope', '$http', '$state', function($timeout, $rootScope, $http, $state) {
        console.log('app initiliased');
        $rootScope.$on('$stateChangeError', function () {

        // Redirect user to our login page
        $state.go('login');

    });
}]);
