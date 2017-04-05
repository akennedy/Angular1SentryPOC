'use strict';

angular.module('exceptionHandlingApp')
  .config(function($provide) {
    $provide.decorator('$exceptionHandler', ['$log', '$delegate',
      function($log, $delegate) {
        return function(exception, cause) {
          $log.debug('Default exception handler.');
          $delegate(exception, cause);
        };
      }
    ]);
  });
