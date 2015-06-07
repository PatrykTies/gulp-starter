angular
  .module('myapp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl as home'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'createCtrl as create'
      });
  }]);