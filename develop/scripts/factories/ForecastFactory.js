'use strict';

angular.module('app')

    .factory('Forecast',
        [
            '$resource', function ($resource)
        {
            return $resource
            (
                'http://weatherAPI.dev/forecast/:id',
                {id:"@_id"},
                {update: {method:"PUT", params: {id:"@_id"}}}
            )
        }
        ]
    );