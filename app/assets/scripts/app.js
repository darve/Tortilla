
/*  Symplify Prototype
/* ================================== */

(function(w,d,n,ng,ns) {

    'use strict';

    var app = ng.module(ns, [

        // All of the controllers
        ns + '.GameController',
        ns + '.HomeController',
        ns + '.ListController',
        ns + '.LoginController',
        ns + '.MainController',
        ns + '.RegisterController',
        ns + '.SearchController',
        ns + '.ContrastController',

        // Everything else
        ns + '.services',
        ns + '.filters'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /state1
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
            controller: "HomeController",
            resolve: {
                "currentAuth": ["Auth", function(Auth) {
                return Auth.$requireAuth();
            }]
        }})

        .state('lists', {
            url: "/lists",
            templateUrl: "lists.html",
            controller: "ListController",
            resolve: {
                "currentAuth": ["Auth", function(Auth) {
                   return Auth.$requireAuth();
                }]
            }
        })

        .state('game', {
            url: "/game",
            templateUrl: "game.html",
            controller: "GameController",
            resolve: {
                "currentAuth": ["Auth", function(Auth){
                    return Auth.$requireAuth();
                }]
            }
        })

        .state('register', {
            url: "/register",
            templateUrl: "register.html"
        });
    }]);

    app.run(['$timeout', '$rootScope', '$http', '$state', function($timeout, $rootScope, $http, $state) {
        console.log('app initiliased');
          $rootScope.$on('$stateChangeError', function () {
            // Redirect user to our login page
            $state.go('login');
          });
    }]);

})(window,document,navigator,window.angular,'SymplifyApp');
