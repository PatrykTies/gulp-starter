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
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl as about'
      });
  }]);