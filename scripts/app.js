var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {

    $scope.name = 'Tony';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info( $scope.name );
    $log.info( $scope.formattedName );

    console.log( $resource );

});