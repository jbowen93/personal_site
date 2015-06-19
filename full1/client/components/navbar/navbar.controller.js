/// <reference path="../../../typings/angularjs/angular.d.ts"/>
'use strict';

var app = angular.module('testApp');

app.controller('NavbarCtrl', function ($scope, $location) {
  $scope.menu = [
    {
    'title': 'Home',
    'link': '/'
    },
    {
    'title': 'About',
    'link': '/about'
    },
    {
    'title': 'Contact',
    'link': '/contact'
    }
    ];

  $scope.isCollapsed = true;

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
