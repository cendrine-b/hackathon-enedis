angular.module('app').controller('MainController', function($scope) {

  /* CALL QR CODE READER / CAMERA */
  angular.element(document).ready(function() {
    angular.element('#reader').html5_qrcode(function(data) { // start webcam
      console.log("QR Code result: ", data); // print QR code content
      document.location.href="https://www.google.fr/webhp?hl=fr&sa=X&ved=0ahUKEwjuwI64zInYAhWBRBoKHcNSBmwQPAgD";
      angular.element("#reader").html5_qrcode_stop(); // stop webcam
    }, function(error) {
      // console.log(error);
    }, function(videoError) {
      console.log(videoError);
    });
  });

});
