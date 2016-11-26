var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowerhandle = function () {
        return $filter('lowercase')( $scope.handle );
    };

    $scope.characters = 5;

    // $scope.rules = [
    //     { rulename: "Must be 5 characters" },
    //     { rulename: "Must not be used elsewhere" },
    //     { rulename: "Must be cool" }
    // ]


    $http.get('/angular/data/rules.json')
        .success(function (data) {
            $scope.rules = data;
            console.log( $scope.rules );
        })
        .error(function (data, status) {
            console.log(status);
            console.log(data);
        })

}]);
