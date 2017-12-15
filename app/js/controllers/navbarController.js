angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.logout = function() {
            Auth.logout();
        };


        /* LIFE HEARTS */
        $scope.countHeart = 5;
        //console.log("$scope.countHeart", $scope.countHeart);

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
