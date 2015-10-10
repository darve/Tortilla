
'use strict';

var ng = require('angular'),
    app;

/**
 * Include our module dependencies
 */
require('angular-sanitize');
require('angular.ui-router');
require('./controllers/');
require('./directives');
require('./services/');
require('./filters/');

app = ng.module('TortillaApp', [
    'ui.router',
    'TortillaControllers',
    'TortillaDirectives',
    'TortillaServices',
    'TortillaFilters'
    ]);

/**
 * Include our compiled views
 */
require('../views/views.js');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController'
    });
}]);

app.run(['$timeout', '$rootScope', '$http', '$state', function($timeout, $rootScope, $http, $state) {
    console.log('app initiliased');
    $rootScope.$on('$stateChangeError', function () {
        // Redirect user to our login page
        // $state.go('login');
    });
}]);
