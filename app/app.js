'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('pageController', pageController);
function pageController( $scope, $mdSidenav, $http){
    $scope.loadLists = function(){
        $http.get('pages/projects/projects.json').then(
            function(response){
                $scope.projectList = response.data.projects;
            },
            function(response){
                window.alert( "Something Went Wrong :(");
            });
    };

    $scope.toggleLeftMenu = function(){
        $mdSidenav('left').toggle();
        $scope.showProjectList = false;
    };
}


// Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "pages/main.htm",
        })
        .when("/main", {
            templateUrl : "pages/main.htm",
        })
        .when("/projects", {
            templateUrl : "pages/projects.htm"
        })
        .when("/store", {
            templateUrl : "pages/store.htm",
            controller : "storeCtrl"
        })
        .when("/contact", {
            templateUrl : "pages/contact.htm",
            controller : "contactCtrl"
        })
        .when("/about", {
            templateUrl : "pages/about.htm",
            controller : "aboutCtrl"
        })
        .when("/projects/:name",{
            templateUrl : function($routeParams) {
                return "pages/projects/" + $routeParams.name;
            }
        });

});

// Router Controller functions
// NOTE: not every page will need a helper controller. Email List landing page will probably need one though
app.controller("storeCtrl", function ($scope) {
    $scope.msg = "Best Store Ever";
});

app.controller("contactCtrl", function ($scope) {
    $scope.msg = "Best Contact Ever";
});

app.controller("aboutCtrl", function ($scope) {
    $scope.msg = "Best About Ever";
});