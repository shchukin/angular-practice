var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
    $scope.testVariable = 'Hello!';
    $scope.testFunction = function () {
        alert('Hi!');
    };

    console.log($scope);

    $scope.testFunction();

});