'use strict';

angular.module('app')
    .controller('AddForecastCtrl', ['$scope', 'Forecast', 'Cities', '$route', function ($scope, Forecast, Cities, $route) {
        Cities.get(function (data) {
            $scope.cities = data.response;
        });

        $scope.settings = {
            pageTitle: "Agregar pronóstico a una ciudad",
            action: "Agregar"
        };

        $scope.forecast = {
            forecast: "",
            date: "",
            id_city: ""
        };

        $scope.submit = function () {
            Forecast.save({forecast: $scope.forecast}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.forecast);
                    $scope.settings.success = "El pronóstico ha sido agregado correctamente!";
                }
            })
        };
    }]);

