'use strict';

/**
 * @ngdoc overview
 * @name dsmsApp
 * @description
 * # dsmsApp
 *
 * Main module of the application.
 */
var app = angular.module('dsmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider.state('OfficeAdminCreationWithKey', {
      url: '/office-admin-creation/',
      templateUrl: '/partials/offices/admin/office-admin-creation.html',
      controller: 'OfficeAdminCreationController' 
    });
});
