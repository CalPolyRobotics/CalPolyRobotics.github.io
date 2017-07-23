var app = angular.module('firstApplication', ['ngMaterial', 'ngRoute']);
app.controller('pageController', pageController);

function pageController( $scope, $mdSidenav, $http){
   $scope.loadLists = function(){
      $http.get('docs/projects.json').then(
         function(response){
            $scope.projectList = response.data.projects;
         },
         function(response){
            window.alert( "Something Went Wrong :(");
         });
   };

   $scope.openLeftMenu = function(){
      $mdSidenav('left').toggle();
   };
}

// Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "pages/main.htm",
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
    $scope.msg = "Best Contact Ever";
});
