'use strict';

angular.module('app')

    .factory('Weather',
        [
            '$resource', function ($resource)
        {
            return $resource
            (
                'http://weatherAPI.dev/weather/:id',
                {id:"@_id"},
                {update: {method:"PUT", params: {id:"@_id"}}}
            )
        }
        ]
    );