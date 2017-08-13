// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});
}]);

app.controller('pageController', pageController);
function pageController( $scope, $mdSidenav, $http, $location){
    $scope.backgroundClass= function(path){
        if($location.path().substr(0, path.length) == path ){
            return "background-active";
        }else{
            return "";
        }
    };

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
