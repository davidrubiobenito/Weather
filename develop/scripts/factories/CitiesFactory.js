'use strict';

angular.module('app')

    .factory('Cities',
        [
            '$resource', function ($resource)
            {
                return $resource
                (
                    'http://weatherapi.dev/cities/:id',
                    {id:"@_id"},
                    {update: {method:"PUT", params: {id:"@_id"}}}
                )
            }
        ]
    );