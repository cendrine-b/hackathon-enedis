angular.module('app')
    .controller('QRCodeController', function($scope, CurrentUser, UserService) {
      
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

    });
