'use strict';

angular.module('app', ['ngResource','ngRoute'])

    .config(['$routeProvider', function ($routerProvider) {
        $routerProvider
            .when('/home', {
                templateUrl: 'views/templates/list.html',
                controller: 'HomeCtrl'
            })
            .when('/edit/:id', {
                templateUrl: 'views/templates/edit.html',
                controller: 'EditCtrl'
            })
            .when('/create/', {
                templateUrl: 'views/templates/create.html',
                controller: 'CreateCtrl'
            })
            .when('/addForecast/', {
                templateUrl: 'views/templates/addForecast.html',
                controller: 'AddForecastCtrl'
            })
            .when('/view/:id', {
                templateUrl: 'views/templates/view.html',
                controller: 'ViewCtrl'
            })
            .otherwise({redirectTo: '/home'});
    }]
);

