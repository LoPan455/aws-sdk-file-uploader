myApp.controller('NavController',['DataFactory', '$uibModal', '$log', '$document', function(DataFactory, $uibModal, $log, $document) {

  var self = this;
  console.log('Nav Contoller running...');
  self.animationsEnabled = true;
  self.fbUser = DataFactory.currentUser.details; // initializes empty object to hold the FB user obj

  self.upload = function(size){
    console.log('Upload Button Clicked');
    var uploadModalInstance = $uibModal.open({
      animation: self.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/views/templates/upload.html',
      controller: 'UploadController',
      controllerAs: 'ulc',
      backdrop: 'false',
      bindToContoller: 'true',
      size: size,
      keyboard: 'true'
    });
    uploadModalInstance.result.then(function (reason) {
      console.log('modal closed with:', reason);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  self.login = function (size) {
    console.log('Login Button Clicked');
    var loginModalInstance = $uibModal.open({
      animation: self.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/views/login-view.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      bindToContoller: 'true',
      size: size,
      keyboard: 'true'
    });

    loginModalInstance.result.then(function(response) {
      self.fbUser = response;
      console.log(self.fbUser);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


}]);
