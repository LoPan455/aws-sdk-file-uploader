myApp.controller('NavController',['DataFactory', '$uibModal', '$log', '$document', function(DataFactory, $uibModal, $log, $document) {

  var self = this;  
  self.animationsEnabled = true;

  console.log('Nav controller running');

  self.open = function (size, parentSelector) {
    console.log('Login Button Clicked');
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: self.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/views/login-view.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  }

}]);
