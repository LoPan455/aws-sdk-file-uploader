myApp.controller('LoginController',['DataFactory', '$uibModal', '$log', '$document', function(DataFactory, $uibModalInstance, $log, $document) {

  var self = this;
  self.animationsEnabled = true;
  self.testText = 'text text';
  console.log('Login controller running');

  self.ok = function(){
    console.log('ok clicked');
  }


}]);
