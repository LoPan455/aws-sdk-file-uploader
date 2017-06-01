var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home-view.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when ('/upload', {
            templateUrl: '/views/upload.html',
            controller: 'UploadController',
            controllerAs: 'uc'
        })
        .when ('/view-2', {
            templateUrl: '/views/view_2.html',
            controller: 'TwoController',
            controllerAs: 'two'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
