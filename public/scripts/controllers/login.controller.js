myApp.controller('LoginController',['$scope', '$uibModalInstance', function(DataFactory, $uibModalInstance, $log, $document, $scope) {

  var self = this;
  self.animationsEnabled = true;
  self.testText = 'text text';

  // Login to application with Facebook

  self.fbLogin = function(){
     FB.login(function(response){

       // confirm we are getting something back, perhaps evolve into
       // a callback if/else block

      console.log('FBlogin response is: ,', response);

      // send the response object back to the Nav Contoller
      // there are perhaps many ways to do this

      self.close(response);

    })
  }


  // closes the modal instance and returns a promise

self.close = function(response){
  $uibModalInstance.close(response);
}




}]);
