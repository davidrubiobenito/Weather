'use strict';

angular.module('app', ['ngResource','ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: 'views/templates/list.html',
                controller: 'HomeCtrl'
            })
            .when("/edit/:id", {
                templateUrl: 'views/templates/edit.html',
                controller: 'EditCtrl'
            })
            .when("/create", {
                templateUrl: 'views/templates/create.html',
                controller: 'CreateCtrl'
            })
            .when("/add_weather", {
                templateUrl: 'views/templates/add_weather.html',
                controller: 'AddWeatherCtrl'
            })
             .when("/wiew/:id", {
                templateUrl: 'views/templates/view.html',
                controller: 'ViewCtrl'
            })
            .otherwise({ redirectTo: '/home'});
    }
);

