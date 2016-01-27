'use strict';

/**
 * @ngdoc overview
 * @name uiRouterPracticeApp
 * @description
 * # uiRouterPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);
  
angular.module('uiRouterPracticeApp')
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider

    .state('route_1', {
      url: "/route1111",
      views: {
        "viewA": { template: "<div>AAAA route11111 view </div>" },
        "viewB": { template: "<div>BBBB route11111 view </div>" }
      }
    })
    .state('route_2', {
      url: "/route_2222",
      views: {
        "viewA": { template: "<div>AAAA route2222 view </div>" },
        "viewB": { template: "<div>AAAA route2222 view </div>" }
      }
    })





  /*
    .state('state1', {
      url: "/state1",
      templateUrl: "views/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    */






/*    
    .state('contents',{
    	url: 'contents/{id:int}',
    	controller: ['$scope', '$stateParams', function($scope, $stateParams){
    		$scope.id = $stateParams.id;
    	}],
    	template: '<div>{{id}}</div>'
    	 + '<a ui-sref=".pages({page: 1})"> -1 -</a>'
    	 + '<a ui-sref=".pages({page: 2})"> -2 -</a>'
    	 + '<div ui-view><div>'
    })
    .state('contents.pages', {
    	url: '/pages/{page:int}',
    	controller: ['$scope', '$stateParams', function($scope, $stateParams){
    		$scope.page = $stateParams.page;
    	}],
    	template: '<div> page number is {{page}}</div>'

    });
*/
    
});
  
  
  
