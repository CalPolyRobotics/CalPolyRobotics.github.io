// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});
}]);

// Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("", {
            templateUrl : "pages/main.htm"
        })
        .when("/main", {
            templateUrl : "pages/main.htm"
        })
        .when("/projects", {
            templateUrl : "pages/projects.htm"
        })
        .when("/store", {
            templateUrl : "pages/store.htm"
        })
        .when("/contact", {
            templateUrl : "pages/contact.htm"
        })
        .when("/about", {
            templateUrl : "pages/about.htm"
        })
        .when("/mailing", {
            templateUrl : "pages/mailing.htm"
        })
        .when("/projects/:name",{
            templateUrl : function($routeParams) {
                return "pages/projects/" + $routeParams.name;
            }
        });

});
