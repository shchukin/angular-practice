var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowerhandle = function () {
        return $filter('lowercase')( $scope.handle );
    };

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.handle = 'anothertwitterhandle';
            console.log( 'Scope has been changed!' );
        });
    }, 3000);


}]);
