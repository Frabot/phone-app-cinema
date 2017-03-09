angular.module('app')
.controller('mainController', ['$scope', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate()
    }
}]);