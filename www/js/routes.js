angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page', {
    url: '/page2',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('1', {
    url: '/page3',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('2', {
    url: '/page4',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('3', {
    url: '/page5',
    templateUrl: 'templates/3.html',
    controller: '3Ctrl'
  })

  .state('slider', {
    url: '/page6',
    templateUrl: 'templates/slider.html',
    controller: 'sliderCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});