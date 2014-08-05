'use strict';

/**
 * @ngdoc function
 * @name ngQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngQuizApp
 */
angular.module('ngQuizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
