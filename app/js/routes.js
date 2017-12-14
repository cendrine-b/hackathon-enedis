angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
