myApp.controller('NavController',['DataFactory', '$uibModal', '$log', '$document', function(DataFactory, $uibModal, $log, $document) {

  var self = this;
  console.log('Nav Contoller running...');
  self.animationsEnabled = true;
  self.testText = 'Test Text';
  self.testMessage = function(){
    console.log('test message for button click');
  };

  self.open = function (size) {
    console.log('Login Button Clicked');
    console.log('$uibModal is: ', $uiBmodal);
    var modalInstance = $uibModal.open({
      animation: self.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/views/login-view.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      size: size
      // appendTo: parentElem
      // resolve: {
      //   items: function () {
      //     return $ctrl.items;
      //   }
      // }
    });

    modalInstance.result.then(function (selectedItem) {
      self.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


}]);
