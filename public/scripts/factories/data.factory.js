myApp.factory('DataFactory',['$http',function($http) {
console.log('Data Factory running');

  var currentUser = { details:{} };

  return {
    
    currentUser: currentUser
  }

}]);
