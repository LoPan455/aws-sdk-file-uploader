myApp.controller('LoginController',['$scope', '$uibModalInstance', function(DataFactory, $uibModalInstance, $log, $document, $scope) {

  var self = this;
  self.animationsEnabled = true;
  self.testText = 'text text';
  console.log('Login controller running');
  console.log('$uiBmodalinstance is: ',$uibModalInstance);

  // self.ok = function(){
  //   console.log('ok clicked');
  // }



  // Login to application with Facebook

 self.fbLogin = function(){
   FB.login(function(response){
    console.log('FBlogin response is: ,', response);
    self.close();
  })
}


self.close = function(){
  $uibModalInstance.close('closed');
}




}]);
