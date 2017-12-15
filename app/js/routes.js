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
            })
            .state('anon.qrcode', {
                url: '/qrcode',
                views: {
                    'content@': {
                        templateUrl: 'anon/qrcode.html',
                        controller: 'QRCodeController'
                    }
                }
            })
            .state('anon.firstanimation', {
                url: '/firstanimation',
                views: {
                    'content@': {
                        templateUrl: 'anon/firstanimation.html',
                        controller: 'FirstAnimationController'
                    }
                }
            })
            .state('anon.secondanimation', {
                url: '/secondanimation',
                views: {
                    'content@': {
                        templateUrl: 'anon/secondanimation.html',
                        controller: 'SecondAnimationController'
                    }
                }
            })
            .state('anon.question', {
                url: '/question',
                views: {
                    'content@': {
                        templateUrl: 'anon/question.html',
                        controller: 'QuestionController'
                    }
                }
            })
            .state('anon.answer', {
                url: '/answer',
                views: {
                    'content@': {
                        templateUrl: 'anon/answer.html',
                        controller: 'AnswerController'
                    }
                }
            })
            .state('anon.final', {
                url: '/final',
                views: {
                    'content@': {
                        templateUrl: 'anon/final.html',
                        controller: 'FinalController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
