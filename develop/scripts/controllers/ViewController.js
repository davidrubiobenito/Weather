'use strict';

angular.module('app')
    .controller('ViewCtrl', ['$scope', 'Forecast', 'Cities', '$routeParams', '$route', function ($scope, Forecast, Cities, $routeParams, $route) {
        var id = $routeParams.id;

        Cities.get({id: id}, function (data) {
            $scope.city = data.response;
        });

        Forecast.get({id: id}, function (data) {
            $scope.forecast = data.response;
        });

        $scope.remove = function (id) {
            Forecast.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        };
    }]);

