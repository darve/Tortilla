
'use strict';

var ng = require('angular'),
    app;

require('angular-sanitize');
require('angular.ui-router');
require('./controllers/');
require('./services/');
require('./filters/');

app = ng.module('BriocheApp', ['ui.router', 'BriocheControllers']);

require('./views.js');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "home.html",
        controller: "HomeController"
    });
}]);

app.run(['$timeout', '$rootScope', '$http', '$state', function($timeout, $rootScope, $http, $state) {
    console.log('app initiliased');
    $rootScope.$on('$stateChangeError', function () {
        // Redirect user to our login page
        // $state.go('login');
    });
}]);
