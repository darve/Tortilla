
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
        ns + '.filters',

        // Dependencies
        'ui.router',
        'firebase'
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


/* ============================================ */
/*  Filters JSON tree
/* ============================================ */

var filters = {

    language: {
        display_name: "Language",
        query: "",
        children: {

            semantic_categories: {
                display_name: "Semantic Categories",
                query: "",
                meta: {}
            },

            grammatical_categories: {
                display_name: "Grammatical Categories",
                query: "",
                children: {

                    verbs: {
                        display_name: "Verbs",
                        query: "",
                        children: {

                            auxillary_verbs: {
                                display_name: "Auxillary Verbs",
                                query: "",
                                children: {

                                    modal_auxillary_verbs: {
                                        display_name: "Modal Auxillary Verbs",
                                        query: ""
                                    }
                                }
                            },

                            past_tense_verbs: {
                                display_name: "Past Tense Verbs",
                                query: "",
                                children: {

                                    irregular_past_tense_verbs: {
                                        display_name: "Irregular Past Tense Verbs",
                                        query: ""
                                    },

                                    past_simple_verbs: {
                                        display_name: "Past Simple Verbs",
                                        query: ""
                                    },

                                    past_participle_verbs: {
                                        display_name: "Past Participle Verbs",
                                        query: ""
                                    }
                                }
                            },

                            infinitive_verbs: {
                                display_name: "Infinitive Verbs",
                                query: ""
                            },

                            third_person_present_tense_verbs: {
                                display_name: "Third Person Present Tense Verbs",
                                query: ""
                            },

                            progressive_verbs: {
                                display_name: "Progressive Verbs (ing)",
                                query: ""
                            }
                        }
                    },

                    nouns: {
                        display_name: "Nouns",
                        query: "",
                        children: {

                            plurals: {
                                display_name: "Plurals",
                                query: "",
                                children: {

                                    regular_plurals: {
                                        display_name: "Regular Plurals",
                                        query: ""
                                    },

                                    irregular_plurals: {
                                        display_name: "Irregular Plurals",
                                        query: ""
                                    }
                                }
                            }
                        }
                    },

                    adjectives: {
                        display_name: "Adjectives",
                        query: ""
                    },

                    superlatives: {
                        display_name: "Superlatives",
                        query: ""
                    },

                    comparative: {
                        display_name: "Comparative",
                        query: ""
                    },

                    adverbs: {
                        display_name: "Adverbs",
                        query: ""
                    },

                    prepositions: {
                        display_name: "Prepositions",
                        query: ""
                    },

                    pronouns: {
                        display_name: "Pronouns",
                        query: ""
                    },

                    conjunctions: {
                        display_name: "Conjunctions",
                        query: ""
                    },

                    determiners: {
                        display_name: "Determiners",
                        query: ""
                    }
                }
            }
        }
    },

    speech: {
        display_name: "Speech",
        query: "",
        children: {

        }
    }
};




angular.module("SymplifyApp").run(["$templateCache", function($templateCache) {$templateCache.put("contrast.html","<div id=\"contrast\" class=\"page\">\n	<div class=\"section\">\n		<div class=\"inner\">\n			<form>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast1\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast2\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast3\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast4\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n				<div class=\"contrast-option\">\n					<select ng-model=\"contrast5\" ng-options=\"o as o for o in consonants\">\n					</select>	\n				</div>\n\n				<hr/>\n\n				<ul ng-repeat=\"item in output\">\n					<li>\n						<span ng-repeat=\"word in item\">{{ word }}, </span>\n					</li>\n				</ul>\n\n\n			</form>		\n		</div>\n	</div>\n</div>");
$templateCache.put("game.html","<div id=\"game\" class=\"page\">\n</div>");
$templateCache.put("home.html","<div id=\"home\" class=\"page\">\n	<div class=\"section\">\n		<div class=\"inner\">\n			<h2>Symplify</h2>\n\n		    <ul>\n		        <li><a href=\"/#/lists\">Symbol Lists</a></li>\n		    </ul>		\n		</div>\n	</div>\n    \n\n</div>");
$templateCache.put("lists.html","<div id=\"lists\" class=\"page\">\n\n	\n	<!-- NAV -->\n	<div class=\"section\">\n		<div class=\"inner\">\n			<nav class=\"subnav\">\n				<ul>\n					<li><a ng-click=\"changeView(\'browse\')\" ng-class=\"{ selected: view === \'browse\' }\">Browse</a></li>\n					<li><a ng-click=\"changeView(\'new\')\" ng-class=\"{ selected: view === \'new\' }\">Create New List</a></li>\n				</ul>\n			</nav>\n		</div>\n	</div>\n\n	<!-- New Lists -->\n	<div class=\"section\" ng-show=\"view === \'new\'\">\n		<div class=\"inner\">\n			<h2>New List</h2>\n\n			<form novalidate>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"List name\" ng-model=\"newList.name\">\n				</div>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"List type\" ng-model=\"newList.type\">\n				</div>\n				<div class=\"row\">\n					<input type=\"text\" placeholder=\"Search symbols\" ng-model=\"search\">\n				</div>\n				<div class=\"row\">\n					<ul class=\"symbols\">\n						<li class=\"symbol\" ng-repeat=\"symbol in results\" ng-click=\"toggleSymbol(symbol)\">\n							<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n							<span class=\"word_text\">{{ symbol.word_text }}</span>\n						</li>\n					</ul>\n				</div>\n				<input type=\"submit\" ng-click=\"createList()\">\n			</form>\n			\n			<hr/>	\n\n			<h2>Selected symbols</h2>\n	\n			<div class=\"row\">\n				<ul class=\"symbols\">\n					<li class=\"symbol\" ng-repeat=\"symbol in newList.symbols\" ng-click=\"\">\n						<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n						<span class=\"word_text\">{{ symbol.word_text }}</span>\n					</li>\n				</ul>\n			</div>\n		</div>\n	</div>\n\n\n	<!-- Browse existing lists -->\n	<div class=\"section\" ng-show=\"view === \'browse\'\">\n		<div class=\"inner\">\n			<h2>Browse lists</h2>\n			<form novalidate>\n				<div class=\"row\">\n					<select ng-model=\"current\" ng-init=\"init()\" ng-change=\"listChanged(data)\">\n						<option ng-repeat=\"list in lists\" value=\"{{ $index }}\">{{ list.name }}</option>\n					</select>\n				</div>\n			</form>\n			<ul class=\"symbols\">\n				<li class=\"symbol\" ng-repeat=\"symbol in list.symbols\">\n					<img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" />\n					<span class=\"word_text\">{{ symbol.word_text }}</span>\n				</li>\n			</ul>\n		</div>\n	</div>\n	\n\n</div>");
$templateCache.put("login.html","<div id=\"home\" class=\"page\">\n\n	<div class=\"section\">\n		<div class=\"inner\">\n			<h1>Login</h1>\n\n			<form novalidate>\n				<div class=\"row\">\n					<label>Email</label><input type=\"text\" ng-model=\"user.email\">\n				</div>\n				<div class=\"row\">\n					<label>Password</label><input type=\"password\" ng-model=\"user.password\">\n				</div>\n				<input type=\"submit\" ng-click=\"attemptLogin(data)\">\n			</form>\n\n			<p>Not registered? <a ui-sref=\"register\">Sign up</a> here.</a>\n		</div>\n	</div>\n</div>");
$templateCache.put("register.html","<div id=\"home\" class=\"page\">\n\n	<div class=\"inner\">\n		<h1>Register</h1>\n		\n		<form novalidate>\n			<div class=\"row\">\n				<label>Username</label><input type=\"text\" ng-model=\"user.username\">\n			</div>\n			<div class=\"row\">\n				<label>Email Address</label><input type=\"text\" ng-model=\"user.email\">\n			</div>\n			<div class=\"row\">\n				<label>Password</label><input type=\"password\" ng-model=\"user.password\">\n			</div>\n			<div class=\"row\">\n				<label>Domain</label><input type=\"text\" ng-model=\"user.domain\">\n			</div>\n			<div class=\"row\">\n				<label>First name</label><input type=\"text\" ng-model=\"user.name_first\">\n			</div>\n			<div class=\"row\">\n				<label>Surname</label><input type=\"text\" ng-model=\"user.name_second\">\n			</div>\n			<input type=\"submit\" ng-click=\"register()\">\n		</form>\n	</div>\n\n</div>");
$templateCache.put("search.html","<div ng-controller=\"SearchController\" id=\"search\" class=\"page\">\n    <h2>Search</h2>\n    <form>\n        <!-- <input type=\"password\" id=\"password\" ng-model=\"password\" placeholder=\"password\"> -->\n        <input type=\"text\" id=\"searchterm\" ng-model=\"searchterm\" placeholder=\"Search\">\n    </form>\n    <ul id=\"symbols\">\n       <li ng-repeat=\"symbol in symbols\">\n           <img ng-src=\"http://symplifyapp.com/graphics/{{ symbol.gfx_filename }}\" style=\"display: block;\" />\n           <label>{{ symbol.word_text }}</label>\n       </li> \n    </ul>\n</div>");}]);
/*  Symplify Directives
 /* ================================== */

(function (w, d, ng, ns, m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
        [ns + '.services'] /* module dependencies */);

    // app.directive('directiveTemplate', ['$rootScope', '$timeout', function($rootScope, $timeout){
    //     return {
    //         restrict: 'E',
    //         link: function(scope, elem, attrs) {
    //         }
    //     };
    // }]);

})(window, document, window.angular, 'SymplifyApp', 'directives');
(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('ContrastController',
        ['$scope', '$q', '$rootScope', '$firebase', '$http', '$timeout', '$location', '$templateCache', '$compile',
        function($scope, $q, $rootScope, $firebase, $http, $timeout, $location, $templateCache, $compile) {

        var contrasts = [],
            num = 0,
            count = 0;

        $scope.current = [];
        $scope.output = [];
        $scope.consonants = ['p','b','t','d','k','m','n','l','r','f','v','s','z','hh','w','g','ch','jh','ng','th','dh','sh','zh','y'];
        $scope.vowels = ['iy','aa','ao','uw','er','ih','eh','ae','ah','oh','uh','ax','ey','ay','oy','ow','aw','ia','ea','ua'];

        $scope.contrast1 = '';
        $scope.contrast2 = '';
        $scope.contrast3 = '';
        $scope.contrast4 = '';
        $scope.contrast5 = '';

        $scope.$watch('contrast1', update);
        $scope.$watch('contrast2', update);
        $scope.$watch('contrast3', update);
        $scope.$watch('contrast4', update);
        $scope.$watch('contrast5', update);

        function update(ov, nv) {
            contrasts = [];
            count = 0;
            num = 0;
            $scope.output = [];

            for ( var i = 1, l = 5; i <= l; i++ ) {
                if ( $scope['contrast' + i] !== '' && i !== 1 && $scope.contrast1 !== $scope['contrast' + i]) {
                    num++;
                    var str = $scope.contrast1 + '-' +$scope['contrast' + i] + '.json';
                    $http.get('/contrasts/' + str).then(sort);
                }
            }
        };

        function sort(data) {
            count++;
            contrasts.push(data.data);

            var valid = [],
                lad = [],
                res = [],
                out = [],
                found;

            if ( count === num ) {

                // For each of the dropdowns
                for ( var o = 0, p = contrasts.length; o < p; o++ ) {

                    // Find an entry in the list that matches list number one
                    for ( var i = 0, l = contrasts[o].length; i < l; i++ ) {
                        valid = [];
                        found = false;
                        // For each of the set of results we have ( not including the first dropdown )
                        // i = each item in contrasts1
                        // we need to compare this lad with every element in the other arrays
                        // and any that match need to be stuck in an array

                        // Each of the other lists
                        for ( var x = 1, y = count; x < y; x++ ) {

                            // Each of the words in the list
                            for ( var w in contrasts[x] ) {
                                try {
                                    if ( contrasts[x][w][0].word_text === contrasts[0][i][0].word_text ) {
                                        valid.push(contrasts[x][w][0].word_text);
                                        valid.push(contrasts[x][w][1].word_text);
                                    }
                                } catch(e) {}
                            }
                        }

                        try {
                            res.push([contrasts[0][i][0].word_text, contrasts[0][i][1].word_text]);
                            for ( var v in valid ) {
                                res[res.length-1].push(valid[v]);
                            }

                            out = uniq_fast(res[res.length-1]).sort();
                            if ( out.length > count ) {
                                $scope.output.push(out);
                            }

                        } catch(e) {}

                    }
                }
            }
        }

        function contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i][0].word_text === obj) {
                    return i;
                }
            }
            return false;
        }

        function uniq_fast(a) {
            var seen = {};
            var out = [];
            var len = a.length;
            var j = 0;
            for(var i = 0; i < len; i++) {
                 var item = a[i];
                 if(seen[item] !== 1) {
                       seen[item] = 1;
                       out[j++] = item;
                 }
            }
            return out;
        }

    }]);

})(window,document,window.angular,'SymplifyApp','ContrastController');


(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);


})(window,document,window.angular,'SymplifyApp','Controller');

(function(win,doc,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('GameController',
        ['$scope', '$rootScope', '$element', '$firebase', '$http', '$timeout', '$location', '$templateCache', '$compile',
        function($scope, $rootScope, $element, $firebase, $http, $timeout, $location, $templateCache, $compile) {

        var symbols,
            fb,
            framecounter = 0,

            // Some rad colours, should we need any.
            colours = [
                0xed5565,
                0xda4453,
                0xfc6e51,
                0xe9573f,
                0xffce54,
                0xfcbb42,
                0xa0d468,
                0x8cc152,
                0x48cfad,
                0x37bc9b,
                0x4fc1e9,
                0x3bafda,
                0x5d9cec,
                0x4a89dc,
                0xac92ec,
                0x967adc,
                0xec87c0,
                0xd770ad,
                0xf5f7fa,
                0xe6e9ed,
                0xccd1d9,
                0xaab2bd,
                0x656d78,
                0x434a5
            ],

            cfg = {
                x: 0,
                y: 0,
                w: win.innerWidth,
                h: win.innerHeight,
            },

            stage,
            renderer,
            loader,

            fixtures = {
                poly: undefined,
                body: undefined
            },

            tempPosition,
            tempContainer,
            tempSprite,

            ev = {},
            clicked,

            clicked = false,

            gfx = [],
            sprites = [],

            player;


        function randomColour() {
            return colours[Math.floor(Math.random() * colours.length)];
        }

        function randomSymbol() {
            var result;
            var count = 0;

            for (var prop in symbols) {
                if (Math.random() < 1/++count) result = symbols[prop];
            }

            return result;
        }
        function defineUIListeners () {

            $(doc).on('keydown', function(e){

                // console.log(e.keyCode);

                if ( e.keyCode === 37 ) {
                    // Left
                } else if ( e.keyCode === 38 ) {
                    // Up
                } else if ( e.keyCode === 39 ) {
                    // Right
                } else if ( e.keyCode === 40 ) {
                    // Down
                }

                if ( e.keyCode === 65 ) {
                    // Left torque
                } else if ( e.keyCode === 68 ) {
                    // Right torque
                }

            });
        };

        function render() {
            window.requestAnimationFrame(render);
            framecounter++;
            renderer.render(stage);
        }

        function addSymbols() {

            var size = 128;

            for ( var i in symbols ) {
                tempSprite = new PIXI.Sprite(PIXI.Texture.fromImage('/assets/img/graphics/' + symbols[i].gfx_filename));
                tempContainer = new PIXI.Container();

                gfx = new PIXI.Graphics();
                gfx.beginFill(0xffffff);
                gfx.drawRoundedRect(-size/2, -size/2, size, size, 6);

                tempContainer.addChild(gfx);
                tempContainer.addChild(tempSprite)

                tempSprite.scale.x = size / tempSprite.texture.width * .9;
                tempSprite.scale.y = size / tempSprite.texture.height * .9;
                tempSprite.i = 1;
                tempSprite.anchor.x = tempSprite.anchor.y = 0.5;

                tempContainer.position.x = Math.random() * cfg.w;
                tempContainer.position.y = Math.random() * cfg.h;

                stage.addChild(tempContainer);
                sprites.push(tempContainer);
            }

            window.requestAnimationFrame(render);
        }

        function init() {
            /**
             * Create the pixi stage and renderer and add them to the
             * page
             */
            stage = new PIXI.Container();
            renderer = new PIXI.WebGLRenderer(cfg.w, cfg.h, { backgroundColor: 0xDDDDDD});
            $('#game').append(renderer.view);

            $http.get('/api/lists/4yAvHFbv').then(function(response){

                symbols = response.data[0].symbols;

                /**
                 * Begin game asset load
                 */
                loader = PIXI.loader;

                for ( var i in symbols ) {
                    loader.add(String(symbols[i].word_id), '/assets/img/graphics/' + symbols[i].gfx_filename);
                }

                loader.once('complete', addSymbols);
                loader.load();
            });

        }

        $(init);

    }]);

})(window,document,window.angular,'SymplifyApp','GameController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('HomeController',
        ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', '$firebaseAuth',
        function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile, $firebaseAuth) {

    }]);

})(window,document,window.angular,'SymplifyApp','HomeController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('ListController',
    ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', '$firebaseAuth',
        function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile, $firebaseAuth) {

        $scope.view = 'browse';

        $scope.current = null;
        $scope.list = {};
        $scope.newList = {
            name: '',
            type: '',
            symbols: []
        };
        $scope.lists = null;
        $scope.search = '';
        $scope.results = [];

        $scope.createList = function() {
            $http.post('/api/lists', $scope.newList).then(function(response) {
                $http.get('/api/lists').then(function(response){
                    $scope.lists = response.data;
                });
            });
        };

        $scope.listChanged = function(data) {
            console.log('changed', $scope.list);
            $scope.list = $scope.lists[$scope.current];
        };

        $scope.init = function() {

        };

        $scope.changeView = function(view) {
            console.log(view);
            $scope.view = view;
        };

        $scope.$watch('search', function(nv, ov) {
            console.log(nv.length);
            if ( nv.length > 1) {
                console.log('here');
                $http.post('/api/search', { searchterm: nv }).then(function(data){
                    $timeout(function() {
                        $scope.$apply(function() {
                            $scope.results = data.data;
                            console.log(data);
                        });
                    });
                });
            }
        });

        $scope.toggleSymbol = function(symbol) {
            $scope.newList.symbols.push(symbol);
        };

        $http.get('/api/lists').then(function(response){
            $timeout(function() {
                $scope.$apply(function() {
                    console.log(response.data);
                    $scope.lists = response.data;
                    $scope.current = 0;
                    $scope.list = $scope.lists[0];
                });
            });

        });

    }]);

})(window,document,window.angular,'SymplifyApp','ListController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('LoginController',
    ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', '$firebaseAuth', '$state',
        function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile, $firebaseAuth, $state) {

        var ref = new Firebase("https://glowing-heat-8250.firebaseio.com/apps/symplify/"),
            auth = $firebaseAuth(ref);

        $scope.user = {
            email: '',
            password: ''
        };

        // Synchronously check if the user is logged in
        var authData = auth.$getAuth();
        if (authData) {
            console.log("Logged in as:", authData.uid);
        } else {
            console.log("Logged out");
        }

        $scope.attemptLogin = function() {
            auth.$authWithPassword($scope.user).then(function(authData) {
                console.log("Logged in as:", authData.uid, authData);

                $http.post('/api/login', { token: authData.token }).then(function(response) {
                    $state.go('home');
                });

            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });
        };

    }]);

})(window,document,window.angular,'SymplifyApp','LoginController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('MainController',
        ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', '$firebaseAuth',
        function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile, $firebaseAuth) {

    }]);

})(window,document,window.angular,'SymplifyApp','MainController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('RegisterController',
    ['$scope', '$rootScope', '$http', '$timeout', '$location', '$templateCache', '$compile', '$firebaseAuth',
        function($scope, $rootScope, $http, $timeout, $location, $templateCache, $compile, $firebaseAuth) {

        $scope.user = {
            username: '',
            email: '',
            password: '',
            name_first: '',
            name_second: '',
            domain: ''
        };

        $scope.register = function() {
            console.log($scope.user);
            $http.post('/api/users', $scope.user).then(function(response) {
                console.log(response);
            });
        };

    }]);

})(window,document,window.angular,'SymplifyApp','RegisterController');

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       [ns + '.services',
                        ns + '.directives'] /* module dependencies */);

    app.controller('SearchController',
        ['$scope', '$rootScope', '$firebase', '$http', '$timeout', '$location', '$templateCache', '$compile',
        function($scope, $rootScope, $firebase, $http, $timeout, $location, $templateCache, $compile) {

        var ref = new Firebase("https://glowing-heat-8250.firebaseio.com/apps/symplify/"),
            sync = $firebase(ref),
            timeout;

        $scope.data = "";
        $scope.searchterm = "";
        $scope.password = "";
        $scope.symbols = [];

        $scope.$watch('data', function(nv,ov){
            $scope.symbols = [];
            if ( nv.length > 0 ) {
                for ( var i in nv ) {
                    ref.child("symbols/" + nv[i]).on("value", function(snapshot) {
                        $timeout(function(){
                            $scope.$apply(function(){
                                $scope.symbols.push(snapshot.val());
                                console.log( $scope.symbols );
                            });
                        });
                    });
                }
            }
        });

        $scope.$watch('searchterm', function(nv, ov){
            console.log('searchterm changed', nv);
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                if ( nv !== "" ) {
                    ref.child("indexes/word_text/" + encodeURI(nv)).on("value", function(snapshot) {
                        $timeout(function() {
                            $scope.$apply(function() {
                                console.log('data returned from firebase', snapshot.val());
                                $scope.data = snapshot.val();
                            });
                        });
                    });
                }
            }, 2000);
        });

        $(d).on('keyup', '#searchterm', function(e){


        });

        $scope.searchterm = "";

    }]);

})(window,document,window.angular,'SymplifyApp','SearchController');


/*  Symplify Filters
/* ================================== */

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                        [] /* module dependencies */);

    app.filter('slugify', function() {
        return function(input) {
            return input.toLowerCase().split('é').join('e').replace(/[^\w\s-]/g, "").replace(/[-\s]+/g, "-");
        };
    });

    app.filter('capitalize', function() {
        return function(input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        };
    });

    app.filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });

})(window,document,window.angular,'SymplifyApp','filters');

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


    /**
     * Why do we need a data service
        1. It should intercept messages from the server and only pass on
        the relevant information needed by the controller
     */
    app.factory("Data", [function(){

    }]);


})(window,document,window.angular,'SymplifyApp','services');
