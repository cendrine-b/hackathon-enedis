angular.module('app')
.factory('HeartsService', ['$rootScope', function ($rootScope) {


  var service = {

      countHeart: 5,

      SaveState: function () {
          sessionStorage.HeartsService = angular.toJson(service.countHeart);
      },

      RestoreState: function () {
          service.countHeart = angular.fromJson(sessionStorage.HeartsService);
      }
  };

  $rootScope.$on("savestate", service.SaveState);
  $rootScope.$on("restorestate", service.RestoreState);

  return service;





    /* var heartService = {};

    heartService.countHeart = 5;

    heartService.ChangeValue = function(value) {
      heartService.countHeart = value;
    };

    return heartService; */




    /* var service = {

        model: {
            name: '',
            email: ''
        },

        SaveState: function () {
            sessionStorage.userService = angular.toJson(service.model);
        },

        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.userService);
        }
    }

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service; */
}]);
