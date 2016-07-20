'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $http.get("http://nominatim.openstreetmap.org/search/135%20pilkington%20avenue,%20birmingham?format=json&polygon=1&addressdetails=1").then(function (response) {
    $scope.myWelcome = response.data[0];
  });
});
