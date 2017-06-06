myApp.controller('NavController',['DataFactory', '$uibModal', '$log', '$document', function(DataFactory, $uibModal, $log, $document) {

  var self = this;
  console.log('Nav Contoller running...');
  self.animationsEnabled = true;
  self.fbUser = DataFactory.currentUser.details; // initializes empty object to hold the FB user obj

  self.open = function (size) {
    console.log('Login Button Clicked');

    var modalInstance = $uibModal.open({
      animation: self.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/views/login-view.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      bindToContoller: 'true',
      size: size,
      keyboard: 'true'
      // appendTo: parentElem
      // resolve: {
      //   items: function () {
      //     return $ctrl.items;
      //   }
      // }
    });

    modalInstance.result.then(function(response) {
      self.fbUser = response;
      console.log(self.fbUser);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


}]);
