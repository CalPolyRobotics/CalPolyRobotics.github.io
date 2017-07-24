var app = angular.module('firstApplication');

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
