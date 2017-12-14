angular.module('app').controller('MainController', function($scope) {

  /* CALL QR CODE READER / CAMERA */
  angular.element(document).ready(function() {
    angular.element('#reader').html5_qrcode(function(data) { // start webcam
      console.log("QR Code result: ", data); // print QR code content
      document.location.href=data;
      angular.element("#reader").html5_qrcode_stop(); // stop webcam
    }, function(error) {
      // console.log(error);
    }, function(videoError) {
      console.log(videoError);
    });
  });


  $scope.countHeart = 5;


  /* var updateCounter = function() {
    $scope.countHeart++;
  }
  updateCounter(); */

  /*
    Si réponse vrai = ajoute cœur si ;
    Si réponse fausse = countHeart -1;
  */
  /* if() {

  } else {

  } */

});
