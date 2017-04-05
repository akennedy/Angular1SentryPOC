'use strict';

angular.module('exceptionHandlingApp')
  .controller('MainCtrl', ['$scope', '$q',
    function($scope, $q) {
      function MainCtrlInitException(message) {
        this.name = 'MainCtrlInitException';
        this.message = message;
      }
      MainCtrlInitException.prototype = new Error();
      MainCtrlInitException.prototype.constructor = MainCtrlInitException;

      function init() {
        /* We just reject the promise of this function. Only for the demo */
        return $q.reject("Check it Bleed.  Chip was in a jam");
      }

      init().
      catch (
        function(cause) {
          throw new MainCtrlInitException(cause);
        });
    }
  ]);
