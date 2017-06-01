myApp.controller('LoginController',['DataFactory', '$uibModal', '$log', '$document' function(DataFactory, $uibModal, $log, $document) {

  var self = this;

  self.animationsEnabled = true;

  console.log('Login controller running');

  self.open = function (size, parentSelector) {
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


}]);
