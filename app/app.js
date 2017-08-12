'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

/*
app.config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
});
*/
app.config(function($mdThemingProvider) {
    var customPrimary = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#f6f6f6',
        '400': '#e9e9ea',
        '500': '#DCDCDD',
        '600': '#cfcfd0',
        '700': '#c2c2c4',
        '800': '#b5b5b7',
        '900': '#a8a8ab',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#9b9b9e'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
            customPrimary);

    var customAccent = {
        '50': '#0b0e10',
        '100': '#161b1e',
        '200': '#21282d',
        '300': '#2c353c',
        '400': '#36424b',
        '500': '#414f59',
        '600': '#576977',
        '700': '#627685',
        '800': '#6d8394',
        '900': '#7b909f',
        'A100': '#576977',
        'A200': '#1985A1', // NavBar Highlight color
        'A400': '#414f59',
        'A700': '#8a9ca9'
    };
    $mdThemingProvider
        .definePalette('customAccent',
            customAccent);

    var customWarn = {
        '50': '#55c7e5',
        '100': '#3fc0e1',
        '200': '#29b8de',
        '300': '#20a9cd',
        '400': '#1c97b7',
        '500': '#1985A1',
        '600': '#16738b',
        '700': '#126175',
        '800': '#0f4e5f',
        '900': '#0b3c49',
        'A100': '#6bcee8',
        'A200': '#81d6eb',
        'A400': '#97ddef',
        'A700': '#082a33'
    };
    $mdThemingProvider
        .definePalette('customWarn',
            customWarn);

    var customBackground = {
        '50': '#84898e',
        '100': '#777c81',
        '200': '#6b6f74',
        '300': '#5e6267',
        '400': '#525659',
        '500': '#46494C',
        '600': '#3a3c3f',
        '700': '#2e2f31',
        '800': '#212324',
        '900': '#151617',
        'A100': '#46494C',
        'A200': '#9ea2a6',
        'A400': '#acafb2',
        'A700': '#09090a'
    };
    $mdThemingProvider
        .definePalette('customBackground',
            customBackground);
    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground')
});

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);

app.controller('pageController', pageController);
function pageController( $scope, $mdSidenav, $http, $location){
    $scope.getClass = function(path){
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


app.controller('folderCtrl', function ($scope, $http) {
    $scope.w = window.innerWidth;
    $scope.h = window.innerHeight-20;
    $scope.uri = "http://lorempixel.com";
    $scope.folders = [
        'animals',
        'business',
        'cats',
        'city',
        'food',
        'night',
        'life',
        'fashion',
        'people',
        'nature',
        'sports',
        'technics',
        'transport'
    ];
    $scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    $scope.currentFolder = $scope.folders[0];
    $scope.selectFolder = function (folder) {
        $scope.currentFolder = folder;
    };
    $scope.activeFolder = function (folder) {
        return (folder === $scope.currentFolder) ? 'active' : '';
    };
});


// Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("", {
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
        .when("/mailing", {
            templateUrl : "pages/mailing.htm",
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
