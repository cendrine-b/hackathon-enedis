angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser, HeartsService) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.logout = function() {
            Auth.logout();
        };





        /* $scope.countHeart = HeartsService;

        console.log("$scope.countHeart", $scope.countHeart); */




        /* LIFE HEARTS */
        $scope.countHeart = 5;


        /* $scope.countHeart = HeartsService.countHeart;
        $scope.changeValue = function(data) {
          $scope.updateServiceCountHeart(data);
        }
        $scope.updateServiceCountHeart = function(countHeart) {
          HeartsService.ChangeValue(countHeart);
          $scope.countHeart = HeartsService.countHeart;
        } */



        /* $scope.countHeart = HeartsService.countHeart;
        $scope.answerDanger = function() {
          if ($scope.countHeart < 6) {
            var data = $scope.countHeart++;
            console.log("$scope.countHeart updated", $scope.countHeart);
            $scope.updateServiceCountHeart(data);
          }
        };
        $scope.answerDanger(); */



        $scope.answer = true;
        console.log("$scope.answer", $scope.answer);

        $scope.answerDanger = function() {
          if ($scope.countHeart < 6) {
            $scope.countHeart++;
            console.log("$scope.countHeart updated", $scope.countHeart);
          }
        };
        $scope.answerDanger();

        $scope.answerNoDanger = function() {
          if ($scope.countHeart > 0) {
            $scope.countHeart--;
            console.log("$scope.countHeart updated", $scope.countHeart);
          }
        };
        $scope.answerNoDanger();

        console.log("$scope.countHeart final", $scope.countHeart);

    });
