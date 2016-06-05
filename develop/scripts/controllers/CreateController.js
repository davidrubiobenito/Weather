'use strict';

angular.module('app')
    .controller('CreateCtrl', ['$scope', 'Cities', function ($scope, Cities) {
        $scope.settings = {
            pageTitle: "Agregar ciudad",
            action: "Agregar"
        };

        $scope.city = {
            id: "",
            name: ""
        };

        $scope.submit = function () {
            Cities.save({city: $scope.city}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.city);
                    $scope.settings.success = "La ciudad ha sido creada correctamente!";
                }
            })
        };
    }]);

