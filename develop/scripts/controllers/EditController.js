'use strict';

angular.module('app')
    .controller('EditCtrl', ['$scope', 'Cities', '$routeParams', function ($scope, Cities, $routeParams) {
        $scope.settings = {
            pageTitle: "Editar ciudad",
            action: "Editar"
        };

        var id = $routeParams.id;

        Cities.get({id: id}, function (data) {
            $scope.city = data.response;
        });

        $scope.submit = function () {
            Cities.update({city: $scope.city}, function (data) {
                $scope.settings.success = "La ciudad ha sido editada correctamente!";
            });
        };
    }]);

