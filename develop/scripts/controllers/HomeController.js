'use strict';

angular.module('app')
    .controller('HomeCtrl', ['$scope', 'Cities', '$route', function ($scope, Cities, $route) {
        Cities.get(function (data) {
            $scope.cities = data.response;
        });

        $scope.remove = function (id) {
            Cities.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        };
    }]);
